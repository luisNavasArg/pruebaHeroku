import './App.css';
import {useEffect,useState}from 'react'
function App() {
  const [opcion,setOpcion]=useState('paquetes');
  const [data,setData]=useState([])

  useEffect(()=>{
    const fecthData= async()=>{
      const response = await fetch('https://pruebagcd.herokuapp.com/'+ opcion)
      const json = await response.json();
      setData(json)
    }
    fecthData();
  },[opcion])
  const cambiarOpcion=()=>{
    if(opcion==='hoteles'){
      setOpcion('paquetes')
    }else setOpcion('hoteles')

  }
  return (
    <div className="App">
      <button onClick={cambiarOpcion}>Cambiar Opción</button>
      <ul>
      {data.map((o,i)=>{return <li key={i.toString()+ opcion} >{o.nombre}</li>})}
      </ul>
    </div>
  );
}

export default App;
