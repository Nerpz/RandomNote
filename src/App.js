import React, {useState} from 'react'
import './App.css';


const Card = ({children}) => {
  const cardContainerStyle = {
    height: '100vh',
    width: '100%',
    
background: 'linear-gradient(90deg, rgba(171,161,24,1) 0%, rgba(211,26,26,1) 50%, rgba(171,161,24,1) 100%)',
backgroundImage: 'url("./notesbg.png")',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  }
  
  const cardStyle = {
     display: 'grid',
     width: '300px',
     maxHeight: '460px',
     backgroundColor: 'gray',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    
    backgroundColor: 'white',
    border: '4px solid black',
    boxShadow: '10px 10px 0px 0px black ',
    padding: '1rem',

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
   
    backgroundColor: 'white',
    color: 'black',
    border: '3px solid black',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0.5rem',
    borderRadius: '0.5rem',
    boxShadow: '4px 4px 0px 0px black',

  }
  const unselectedButtonStyle = {
    backgroundColor: '#eee',
    color: 'black',
    border: '3px  solid black',
    boxShadow: '1px 1px 0px 0px black',
    fontSize: '1.5rem',
    margin: '0.5rem',
    borderRadius: '0.5rem',
    position: 'relative',
    bottom: '-2px',
    right: '-2px',
    fontWeight: 'bold',

  } 
  const runButtonStyle = {
    backgroundColor: 'white',
    color: 'black',
    border: '3px solid black',
    borderRadius: '1rem',
    boxShadow: '6px 6px 0px 0px black ',
    fontSize: '1.5rem',
    gridRow: '7/8',
    gridColumn: '1/4',
    position: 'relative',
    bottom: '2px',
    right: '2px',
    fontWeight: 'bold',
  }
  const hoverRunStyle = {
    backgroundColor: '#ddd',
    color: 'black',
    border: '3px solid black',
    borderRadius: '1rem',
    boxShadow: '2px 2px 0px 0px black ',
    fontSize: '1.5rem',
    gridRow: '7/8',
    gridColumn: '1/4',
    position: 'relative',
    bottom: '-1px',
    right: '-1px'
  }
  const answerStyle = {
    
    color: 'black',
    gridRow: '2/3',
    gridColumn: '1/4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'Center',
    fontSize: '2rem',
  
   
    marginTop: '.5rem',
    fontWeight: 'bold'
  }
  const titleStyle = {
    color: '#eee',
    backgroundColor: '#111',
    boxShadow: '4px 4px 10px 0px #777',
    gridRow: '1/2',
    gridColumn: '1/4',
    height: '100%',
    padding: '0',
    margin: '0',
    textAlign: 'center',
    border: '3px solid black',
    borderRadius: '.25rem',
    
   
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

  const [isShown, setIsShown] = useState(false);


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
      <button onClick={()=>getRandomNote()} style={isShown ? hoverRunStyle : runButtonStyle} onMouseEnter={()=>setIsShown(true)}onMouseLeave={()=>setIsShown(false)}>Get Note</button>
      
    </Card>
    </>
  );
}

export default App;
