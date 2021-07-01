import React, {useState} from 'react'
import './App.css';


const Card = ({children}) => {
  const cardContainerStyle = {
    height: '100vh',
    width: '100%',
    backgroundColor:'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const cardStyle = {
     display: 'grid',
     width: '325px',
     height: '80vh',
     backgroundColor: 'gray',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'
  }
  return <>
  <div style={cardContainerStyle}>
     <div style={cardStyle}>
        {children}
     </div>
     </div>
  </>
}


const App = ()=>  {
  const selectedButtonStyle = {
    backgroundColor: 'green',
    color: 'black',
    border: '1px solid black',
    fontSize: '1.5rem'
  }
  const unselectedButtonStyle = {
    backgroundColor: 'gray',
    color: 'black',
    border: '1px solid black',
    fontSize: '1.5rem'
  } 
  const runButtonStyle = {
    backgroundColor: '#333',
    color: 'wheat',
    fontSize: '1.5rem',
    gridRow: '7/8',
    gridColumn: '1/4'
  }
  const answerStyle = {
    backgroundColor: 'blue',
    color: 'wheat',
    gridRow: '2/3',
    gridColumn: '1/4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'Center',
    fontSize: '2rem'
  }
  const titleStyle = {
    color: 'white',
    backgroundColor: 'black',
    gridRow: '1/2',
    gridColumn: '1/4',
    height: '100%',
    padding: '0',
    margin: '0',
    textAlign: 'center'
  }
  const [selectedNote, setSelectedNote] = useState('')
  const [ a, toggleA ] = useState(true)
  const [ aS, toggleAS ] = useState(true)
  const [ b, toggleB ] = useState(true)
  const [ c, toggleC ] = useState(true)
  const [ cS, toggleCS ] = useState(true)
  const [ d, toggleD ] = useState(true)
  const [ dS, toggleDS ] = useState(true)
  const [ e, toggleE ] = useState(true)
  const [ f, toggleF ] = useState(true)
  const [ fS, toggleFS ] = useState(true)
  const [ g, toggleG ] = useState(true)
  const [ gS, toggleGS ] = useState(true)

  const getRandomNote = () => {
    const noteArray = [];
    a && noteArray.push('A')
    aS && noteArray.push('A#')
    b && noteArray.push('B')
    c && noteArray.push('C')
    cS && noteArray.push('C#')
    d && noteArray.push('D')
    dS && noteArray.push('D#')
    e && noteArray.push('E')
    f && noteArray.push('F')
    fS && noteArray.push('F#')
    g && noteArray.push('G')
    gS && noteArray.push('G#')
    const randomIndex = Math.round(Math.random() * (noteArray.length - 1));
    setSelectedNote(noteArray[randomIndex])
    
   

  }
  return (
    <>
    <Card>
      <div style={titleStyle}><h1>Nertobin</h1><h2>Random note generator</h2></div>
      <div style={answerStyle}>
        {`${selectedNote === undefined ? 'Select Notes' : selectedNote}`}
      </div>
      <button onClick={()=>{toggleA(!a)}} style={a ? selectedButtonStyle : unselectedButtonStyle} id='0'>A</button>
      <button onClick={()=>{toggleAS(!aS)}} style={aS ? selectedButtonStyle : unselectedButtonStyle}  id='1'>A#</button>
      <button onClick={()=>{toggleB(!b)}} style={b ? selectedButtonStyle : unselectedButtonStyle} id='2'>B</button>
      <button onClick={()=>{toggleC(!c)}} style={c ? selectedButtonStyle : unselectedButtonStyle} id='3'>C</button>
      <button onClick={()=>{toggleCS(!cS)}} style={cS ? selectedButtonStyle : unselectedButtonStyle} id='4'>C#</button>
      <button onClick={()=>{toggleD(!d)}} style={d ? selectedButtonStyle : unselectedButtonStyle} id='5'>D</button>
      <button onClick={()=>{toggleDS(!dS)}} style={dS ? selectedButtonStyle : unselectedButtonStyle} id='6'>D#</button>
      <button onClick={()=>{toggleE(!e)}} style={e ? selectedButtonStyle : unselectedButtonStyle} id='7'>E</button>
      <button onClick={()=>{toggleF(!f)}} style={f ? selectedButtonStyle : unselectedButtonStyle} id='8'>F</button>
      <button onClick={()=>{toggleFS(!fS)}} style={fS ? selectedButtonStyle : unselectedButtonStyle} id='9'>F#</button>
      <button onClick={()=>{toggleG(!g)}} style={g ? selectedButtonStyle : unselectedButtonStyle} id='10'>G</button>
      <button onClick={()=>{toggleGS(!gS)}} style={gS ? selectedButtonStyle : unselectedButtonStyle} id='11'>G#</button>
      <button onClick={()=>getRandomNote()} style={runButtonStyle}>Get Note</button>
      
    </Card>
    </>
  );
}

export default App;
