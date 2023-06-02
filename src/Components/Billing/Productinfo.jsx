import React from 'react'
var inputStyle={
    input:{
      border:"1px solid black",  
      borderRadius:"10px",
      padding:'15px',
      margin:'15px',
      fontSize:'15px',
      backgroundColor: "var(--mayo)",
      color: "var(--tar)",
      placeholder: "var(--place)"
    },
   input1:{
    border:"1px solid black",  
    borderRadius:"10px",
      padding:'15px',
      flexGrow:'2',
      margin:'15px',
      backgroundColor: "var(--mayo)",
      color: "var(--tar)",
      fontSize:'15px'
    //   fontSize:'10px'


   }
  }
export const Productinfo = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '2',
            backgroundColor:'var(--sea)',
            borderRadius:'10px'
        }} >
            <input type='text' placeholder='Name of the product' style={inputStyle.input} />
            <div style={{
                display:'flex'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type='text' placeholder='Serial No.'  style={inputStyle.input}/>
                    <input type='text' placeholder='Qty'  style={inputStyle.input}/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type='text' placeholder='Unit Price'  style={inputStyle.input}/>
                    <input type='text' placeholder='GST'  style={inputStyle.input}/>
                </div>
                <input type='input' placeholder='Total' style={inputStyle.input1}/>
            </div>

        </div>
    )
}

export default Productinfo