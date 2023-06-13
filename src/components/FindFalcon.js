import React from "react";
import Header from "./Header";
import Form from "./Form";
import { useEffect, useState } from "react";
import "./FindFalcon.css";

export default function FindFalcon() {
  console.log("Hiiiiiii");
  let array = [];

  const [vehicle, setvehicle] = useState([]);
  const [planet, setplanet] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://findfalcone.geektrust.com/vehicles"
        );
        const jsonData = await response.json();
        setvehicle(jsonData);
        const response1 = await fetch(
          "https://findfalcone.geektrust.com/planets"
        );
        const jsonData1 = await response1.json();
        setplanet(jsonData1);

        const response2 = await fetch(
          "https://findfalcone.geektrust.com/token",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
            },
          }
        );
        const data = await response2.json();
        const token = data.token;

        localStorage.setItem("token", token);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getPlanets = (planet) => {
      planet?.forEach((item) => {
        array.push(item?.name);
        // console.log(array)
      });
    };
    getPlanets(planet);
  }, [planet]);

  return (
    <>{planet.length ? <Form props={array} /> : <div class="loading"></div>}</>
  );
}
