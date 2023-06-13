import React, { useEffect, useState } from "react";
import "../components/FindFalcon.css";
import Table from './Table';
import { useHistory } from 'react-router-dom';

export default function Form(props) {
  const [data, setData] = useState([""]);
  const [vehicle, setvehicle] = useState([]);
  const [planet, setplanet] = useState([]);
  const [vehicleQty, setVehicleQty] = useState(new Map());
  const[vehicledist, setvehicleDist]= useState(new Map())
  const[vehiclemax, setvehicleMax]= useState(new Map())
  const [selection1, setSelection1] = useState("");
  const [selection2, setSelection2] = useState("");
  const [selection3, setSelection3] = useState("");
  const [selection4, setSelection4] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [prevVehicle, setprevvehicle] = useState(new Map());
  const [planetdis, setplanetdis] = useState(new Object());
  const[time,Settime]=useState(new Object())
  let[total,setTotal] =useState('')
  let responseData=''
  const history = useHistory();
  useEffect(() => {
    setData([...props.props]);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://findfalcone.geektrust.com/vehicles"
        );
        const jsonData = await response.json();
        jsonData.forEach((element) => {
          
          vehicleQty.set(element.name, element.total_no);
          vehicledist.set(element.name,element.speed)
          vehiclemax.set(element.name,element.max_distance)
        });
        setvehicle(jsonData);
        const response1 = await fetch(
          "https://findfalcone.geektrust.com/planets"
        );
        const jsonData1 = await response1.json();
        jsonData1.map((item) => {
          // console.log(typeof(item.name))
          planetdis[item.name] = item.distance;
        });
        console.log(planetdis);
        // console.log(planetdis.get('Sapir'))

        setplanet(jsonData1);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    for(let i=1;i<5;i++){
      time[i]=0
    }

    fetchData();
  }, []);

  
    

 

  const handleVehicleSelection = (e) => {
    //to opreate proper checkbox
    let n = e.target.value.length;
  
    if (e.target.value[n - 1] == 1) {
      console.log(selection1);
      console.log(vehicledist.get(e.target.id))
      time[1]=(planetdis[selection1]/vehicledist.get(e.target.id))
      setSelectedOption1(e.target.id + "1");
      
    }

    if (e.target.value[n - 1] == 2) {
      setSelectedOption2(e.target.id + "2");
      time[2]=(planetdis[selection2]/vehicledist.get(e.target.id))
    }
    if (e.target.value[n - 1] == 3) {
      setSelectedOption3(e.target.id + "3");
      time[3]=(planetdis[selection3]/vehicledist.get(e.target.id))
    }
    if (e.target.value[n - 1] == 4) {
      setSelectedOption4(e.target.id + "4");
      time[4]=(planetdis[selection4]/vehicledist.get(e.target.id))
    }
 
    //to decrese vehicle count
    let count = vehicleQty.get(e.target.id);
    console.log(e.target.name);
    console.log(e.target.id);
    vehicleQty.set(e.target.id, --count);
    setVehicleQty(new Map(vehicleQty.entries()));

    //to increase vehicle count in case of change of selection
    if (prevVehicle.get(JSON.parse(e.target.name))) {
      let count = vehicleQty.get(prevVehicle.get(JSON.parse(e.target.name)));
      console.log(count);

      vehicleQty.set(prevVehicle.get(JSON.parse(e.target.name)), ++count);
      prevVehicle.set(JSON.parse(e.target.name), e.target.id);
      setVehicleQty(new Map(vehicleQty.entries()));
    } else {
      prevVehicle.set(JSON.parse(e.target.name), e.target.id);


    }
  
  };

  const handleSelection1Change = (event) => {
    setSelection1(event.target.value);
    
    if(selectedOption1){
    if(vehiclemax.get(selectedOption1.slice(0,-1))<planetdis[event.target.value]){
      alert("vehicle distance must be more or equal to planet, secnario reset ")
      window.location.reload()
    }
    time[1]=(planetdis[event.target.value]/vehicledist.get(selectedOption1.slice(0,-1)))
    
  }
    
  };

  const handleSelection2Change = (event) => {
    setSelection2(event.target.value);
    if(selectedOption2){
    if(vehiclemax.get(selectedOption2.slice(0,-1))<planetdis[event.target.value]){
      alert("vehicle distance must be more or equal to planet, secnario reset ")
      window.location.reload()
    }
    
    time[2]=(planetdis[event.target.value]/vehicledist.get(selectedOption2.slice(0,-1)))
  }
  };

  const handleSelection3Change = (event) => {
    setSelection3(event.target.value);

    if(selectedOption3){
    if(vehiclemax.get(selectedOption3.slice(0,-1))<planetdis[event.target.value]){
      alert("vehicle distance must be more or equal to planet, secnario reset ")
      window.location.reload()
    }
    time[3]=(planetdis[event.target.value]/vehicledist.get(selectedOption3.slice(0,-1)))
  }
    
    

  };

  const handleSelection4Change = (event) => {
  
    setSelection4(event.target.value);
    if(selectedOption4){
    if(vehiclemax.get(selectedOption4.slice(0,-1))<planetdis[event.target.value]){
      alert("vehicle distance must be more or equal to planet, secnario reset ")
      window.location.reload()
    }
    
    time[4]=(planetdis[event.target.value]/vehicledist.get(selectedOption4.slice(0,-1)))
  }
  };
 
  const sendPostRequest = async()=>{
    
    let finalData= {
      "token": localStorage.getItem('token'),
      "planet_names": [selection1,selection2,selection3,selection4],
      "vehicle_names":[selectedOption1.slice(0,-1),selectedOption2.slice(0,-1),selectedOption3.slice(0,-1),selectedOption4.slice(0,-1)]

    }
    console.log(finalData)
    try {
      const url = "https://findfalcone.geektrust.com/find";
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };

   

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(finalData)
    });

    responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
  localStorage.setItem("response",JSON.stringify(responseData))
  history.push('/results')
  
  }
  return (
    <div>
      
      <div className="container">
        
        <div className="item">
          <div>
            {" "}
            <label>
              Selection 1:
              <select value={selection1} onChange={handleSelection1Change}>
                <option value="" disabled>
                  Select an option
                </option>
                {data
                  ?.filter(
                    (item) =>
                      ![selection2, selection3, selection4].includes(item)
                  )
                  .map((element) => (
                    <option value={element}>{element}</option>
                  ))}
              </select>
            </label>
          </div>
          <div>
            {selection1 &&
              vehicle.map((item) => {
                return (
                  <div>
                    <label htmlFor={item.name}>
                      {item.name},({vehicleQty.get(item.name)})
                    </label>
                    <input
                      type="checkbox"
                      value={item.name + "1"}
                      checked={item.name + "1" == selectedOption1}
                      disabled={
                        !vehicleQty.get(item.name) ||
                        item.max_distance < planetdis[selection1]
                      }
                      id={item.name}
                      name="1"
                      onChange={handleVehicleSelection}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="item">
          <div>
            {" "}
            {selection1 ? (
              <label>
                Selection 2:
                <select value={selection2} onChange={handleSelection2Change}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  {data
                    ?.filter(
                      (item) =>
                        ![selection1, selection3, selection4].includes(item)
                    )
                    .map((element) => (
                      <option value={element}>{element}</option>
                    ))}
                </select>
              </label>
            ) : (
              <></>
            )}
          </div>
          <div>
            {selection2 &&
              vehicle.map((item) => {
                return (
                  <div>
                    <label htmlFor={item.name}>
                      {item.name},({vehicleQty.get(item.name)})
                    </label>
                    <input
                      type="checkbox"
                      value={item.name + "2"}
                      checked={item.name + "2" == selectedOption2}
                      disabled={
                        !vehicleQty.get(item.name) ||
                        item.max_distance < planetdis[selection2]
                      }
                      id={item.name}
                      name="2"
                      onChange={handleVehicleSelection}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div class="sepreater">
      <div  className="container">
        <div className="item">
          <div>
            {selection2 ? (
              <label>
                Selection 3:
                <select value={selection3} onChange={handleSelection3Change}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  {data
                    ?.filter(
                      (item) =>
                        ![selection1, selection2, selection4].includes(item)
                    )
                    .map((element) => (
                      <option value={element}>{element}</option>
                    ))}
                </select>
              </label>
            ) : (
              <></>
            )}
          </div>
          <div>{selection3 &&
            vehicle.map((item) => {
              return (
                <div>
                  <label htmlFor={item.name}>
                    {item.name},({vehicleQty.get(item.name)})
                  </label>
                  <input
                    type="checkbox"
                    value={item.name + "3"}
                    checked={item.name + "3" == selectedOption3}
                    disabled={
                      !vehicleQty.get(item.name) ||
                      item.max_distance < planetdis[selection3]
                    }
                    id={item.name}
                    name="3"
                    onChange={handleVehicleSelection}
                  />
                </div>
              );
            })}</div>
          
          
        </div>
        <div className="item">
          <div>{selection3 ? (
            <label>
              Selection 4:
              <select value={selection4} onChange={handleSelection4Change}>
                <option value="" disabled>
                  Select an option
                </option>
                {data
                  ?.filter(
                    (item) =>
                      ![selection1, selection2, selection3].includes(item)
                  )
                  .map((element) => (
                    <option value={element}>{element}</option>
                  ))}
              </select>
            </label>
          ) : (
            <></>
          )}</div>
          <div>{selection4 &&
            vehicle.map((item) => {
              return (
                <div>
                  <label htmlFor={item.name}>
                    {item.name},({vehicleQty.get(item.name)})
                  </label>
                  <input
                    type="checkbox"
                    value={item.name + "4"}
                    checked={item.name + "4" == selectedOption4}
                    disabled={
                      !vehicleQty.get(item.name) ||
                      item.max_distance < planetdis[selection4]
                    }
                    id={item.name}
                    name="4"
                    onChange={handleVehicleSelection}
                  />
                </div>
              );
            })}</div>
          </div>
        </div>
        
        <button className={(selection1 && selection2 && selection3 && selection4 &&selectedOption1 && selectedOption2 && selectedOption3 && selectedOption4)?"find-button":"disabled-button"} onClick={sendPostRequest}>Find Falcon</button> 
        
      
      </div>
      <Table time={time}/>
    </div>
  );
}
