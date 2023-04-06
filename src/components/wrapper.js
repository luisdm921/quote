import Text from "./text";
import Buttons from "./buttons";
import "../App.css";
import { useState } from "react";
const { quotes } = require("../files/data");
export default function Wrapper() {
  const [state, setState] = useState(quotes[0]);
  const [color, setColor] = useState("#456");
  const [fade, setFade] = useState(1);
  // const [fade, setFade] = useState(1);

  function get_rand_color() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
      color = "0" + color;
    }
    return "#" + color;
  }
  function handleChange(e) {
    e.preventDefault();

    // setFade(fade === 1 ? 0.3 : 1);
    const newColor = get_rand_color();
    setColor(newColor);
    let newQuote = "";
    do {
      const index = Math.floor(Math.random() * quotes.length);
      newQuote = quotes[index];
    } while (newQuote === state);

    setState(newQuote);
    if(fade === 1){
      setFade(0.5)
    }else{
      setFade(1)
    }
    
  }

  return (
    <div className="container-main" style={{ backgroundColor: `${color}` }}>
      <div className="wrapper">
        <div id="quote-box" className="container-c">
          <Text color={color} text={state} fade={fade}/>
          <Buttons color={color} text={state} handlechange={handleChange} />
        </div>
        <div className="footer">
          <p>By Luis Dominguez</p>
        </div>
      </div>
    </div>
  );
}
