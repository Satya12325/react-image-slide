
import { useState } from 'react';
import './App.css';
import SlideShow from './Components/Silde';

function App() {

  const slideImages = [
    "https://media.istockphoto.com/photos/straight-down-above-tall-towers-rising-over-austin-texas-picture-id1320415956?s=612x612",
    "https://media.istockphoto.com/photos/brecon-beacons-landscape-picture-id1308867983?s=612x612",
    "https://media.istockphoto.com/photos/light-streaks-traffic-at-a-travelling-at-night-hualien-taiwan-picture-id467205176?s=612x612",
    "https://images.unsplash.com/photo-1515488701809-e67a02ced1b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  ]

  const [text, setText] = useState("")
  const [limit,setLimit]=useState(slideImages.length-1);
  const handleLimit = ()=>{
    if(Number(text)<limit){
      setLimit(Number(text))
    }
  }

  const [widthval,setWidthval]=useState("");
  const [heightval,setHeightval]=useState("")
  const [width,setWidth]=useState("650");
  const [height,setHeight]=useState("300")
  
  const handleWidth =(e)=>{
    setWidthval(e.target.value);
  }
  const handleHeight =(e)=>{
    setHeightval(e.target.value);
  }

  const handleContainer =()=>{
    setHeight(heightval);
    setWidth(widthval);
  }

  const [movement,setmovement]=useState(true);
  const handleMovement = (e)=>{
    if(e.target.value === "Manual")
    {
      setmovement(false)
    } 
    else{
      setmovement(true);
    }
  }

  const [delay,setDelay]= useState(1500);
  const handleDelay = (e)=>{
      setDelay(Number(e.target.value));
  }

  const [direction, setDirection] = useState("right");
  const handleDirection = (e)=>{
    setDirection(e.target.value);
  }
  return (
    <div className="App">
      <h1>React SlideShow</h1>
      <div>
          <div style={{border: "1px solid gray", padding: "10px"}}>
            <h4>Choose Number of Images To Be Shown : </h4>
            <input type="number" placeholder='choose number of images shown' value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleLimit}>Add Limit</button>
          </div>
          <div style={{border: "1px solid gray", padding: "10px"}}>
            <h4>Select Width and Height with your choice : </h4>
            <select onChange={handleWidth}>
              <option value="650" key="1">Select Width of Container</option>
              <option value="50" key="50">50px</option>
              <option value="100" key="100">100px</option>
              <option value="200" key="200">200px</option>
              <option value="300" key="300">300px</option>
              <option value="400" key="400">400px</option>
              <option value="500" key="500">500px</option>
              <option value="600" key="600">600px</option>
              <option value="700" key="700">700px</option>
              <option value="800" key="800">800px</option>
              <option value="900" key="900">900px</option>
              <option value="1000" key="1000">1000px</option>
            </select>
            <select onChange={handleHeight}>
              <option value="300" key="1">Select Height of Container</option>
              <option value="50" key="50">50px</option>
              <option value="100" key="100">100px</option>
              <option value="200" key="200">200px</option>
              <option value="300" key="300">300px</option>
              <option value="400" key="400">400px</option>
              <option value="500" key="500">500px</option>
              <option value="600" key="600">600px</option>
              <option value="700" key="700">700px</option>
              <option value="800" key="800">800px</option>
              <option value="900" key="900">900px</option>
              <option value="1000" key="1000">1000px</option>
            </select>
            <button onClick={handleContainer}>Add</button>
          </div>
          <div style={{border: "1px solid gray", padding: "10px"}}>
            <h4>Select Movement with your Choice : </h4>
            <select onChange={handleMovement}>
              <option value="Automatic" key="A">Automatic</option>
              <option value="Manual" key="M">Manual</option>
            </select>
          </div>
          {
          movement && <div style={{border: "1px solid gray", padding: "10px"}}>
             <h4>Select Time Delay : </h4>
             <select onChange={handleDelay}>
               <option value="1500" key="1">Select Delay Time</option>
               <option value="500" key="2">500</option>
               <option value="1000" key="3">1000</option>
               <option value="2000" key="4">2000</option>
               <option value="3000" key="5">3000</option>
               <option value="4000" key="6">4000</option>
               <option value="5000" key="7">5000</option>
             </select>
          </div>
          }
          {
            movement && <div style={{border: "1px solid gray", padding: "10px"}}>
                     <h4>Select Direction Either Right or Left : </h4>
                   <select onChange={handleDirection}>
                     <option value="right" key="right">Right</option>
                     <option value="left" key="left">Left</option>
                   </select>
            </div>
          }
      </div>
      <SlideShow 
        images = {slideImages}
        autoplay = {delay}
        movement={movement}
        direction={direction}
        limit={limit}
        width={width}
        height={height}
      />
    </div>
  );
}

export default App;