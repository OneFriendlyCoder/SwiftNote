import {getStroke} from 'perfect-freehand';
import { getSvgPathFromStroke } from './utils';
import { useState, useEffect, useRef} from 'react';
import {SketchPicker} from 'react-color';

function Draw() {

  const [globalPoints, setGlobalPoints] = useState<number[][][]>([]);
  const [inputPoints, setInputPoints] = useState<number[][]>([]);
  const [strokecolor, setStrokeColor] = useState<string>('');

  function handlePointerDown(e: React.PointerEvent<SVGElement>) {
    const svgElement = e.target as SVGElement;              // tell ts that e.target is an SVGElement and not a generic 'EventTarget'
    svgElement.setPointerCapture(e.pointerId);
    const rect = svgElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setInputPoints([[x, y, e.pressure]]);
  }

  function handlePointerMove(e: React.PointerEvent<SVGElement>){
    if (e.buttons !== 1) return;
    const svgElement = e.target as SVGElement;
    const rect = svgElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setInputPoints([...inputPoints,[x, y, e.pressure]]);
  }

  function handlePointerUp(e: React.PointerEvent<SVGElement>){
    setGlobalPoints([...globalPoints, inputPoints]);
    setInputPoints([]);
  }


// this will load the values from the localstorage whenever the component mounts and thus the values will be preserved
  useEffect(() => {
    const storedPoints = localStorage.getItem('items');
    if(storedPoints){setGlobalPoints(JSON.parse(storedPoints))};
  },[])


// store the values to the localstorage whenever the state changes
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(globalPoints));
  },[globalPoints]);


  const options = {
    size: 5,
    thinning: 0.1,
    smoothing: 1.0,
    streamline: 0.1,
    simulatePressure: true,
  }

return (
    <>

<svg
  onPointerDown={handlePointerDown}
  onPointerMove={handlePointerMove}
  onPointerUp={handlePointerUp}
  style={{touchAction: 'none', border: `1px solid #ccc`, borderRadius: `8px`}}
  width = "1000"
  height = "1000"
>
  {globalPoints.map((path, index)=>(<path key={index} d={getSvgPathFromStroke(getStroke(path, options))}/>))}
  {inputPoints && (<path stroke={strokecolor} d={getSvgPathFromStroke(getStroke(inputPoints, options))}/>)}
  </svg>
  <SketchPicker onChange={(e)=>setStrokeColor(e.hex)}/>
  <button onClick={()=>(localStorage.clear())}>clear</button>
</>
  )
}

export default Draw
