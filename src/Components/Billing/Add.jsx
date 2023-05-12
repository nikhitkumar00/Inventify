import React from 'react'

var inputStyle={
  input:{
    borderRadius:"10px",
    padding:'10px',
  },
  button:{
    borderRadius:'10px',
    width:'100px',
    height:'30px',
    marginTop:'20px'
    
  }
}

export const Add = () => {
  return (
    <div className='AddMainContainer' style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        flexWrap:'wrap',
        width:'20vw',
        minWidth:'200px',
        maxWidth:'367px',
        height:'250px',
        border :'4px solid black',
        borderRadius:'10px',
        fontSize:'30px'
    }

    
    }>
        <label>Seriel No.</label>
        <input type='text' style={inputStyle.input}></input>
        <label>Quanity</label>
        <input type='text' style={inputStyle.input}></input>
        <button style={inputStyle.button}>Add</button>
    </div>
  )
}