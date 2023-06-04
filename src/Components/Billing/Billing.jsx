import React from 'react'
import './Billing.css'



var inputStyle={
  input:{
    border:"1px solid black",  
    borderRadius:"10px",
    padding:'15px',
    margin:'10px',
    fontSize:'15px',
    backgroundColor: "var(--inputf)",
    color: "var(--tar)",
    placeholder: "var(--place)"
  },
 input1:{
  border:"1px solid black",  
  borderRadius:"10px",
    padding:'15px',
    flexGrow:'1',
    margin:'10px',
    backgroundColor: "var(--inputf)",
    color: "var(--tar)",
    fontSize:'15px',
    maxWidth:'500px'



 }
} 

//Billling Compon
const Billing = () => {
  return (
    <div className='BillingContainer' >
      <div className='BillingHeader'>Billing</div>
      <div className='BillingContainerChild1'>
<div style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '2',
            backgroundColor:'var(--sea)',
            borderRadius:'10px',
            marginRight:'20px',
            padding:'10px',
        }} >
            <input type='text' placeholder='Name of the product' style={inputStyle.input} />
            <div style={{
                display:'flex'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type='text' placeholder='Item Id'  style={inputStyle.input}/>
                    <input type='text' placeholder='Qty'  style={inputStyle.input}/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type='text' placeholder='Unit Price'  style={inputStyle.input} readOnly/>
                    <input type='text' placeholder='Expiry'  style={inputStyle.input} readOnly/>
                </div>
                <div className='Inner_Child_1'>
                <input type='input' placeholder='Total' style={inputStyle.input1}/>
                <div className='Product_Add_Button_div'>
                  <input type="button" value="Add " className='Product_Add_Button' />

                </div>
                </div>
                
            </div>

        </div>

      </div>

      <div className='BillingTable'>
            <table className='TableBody'>
                <thead> <tr>
                    <th className='th_billingtable'>Sl.no</th>
                    <th className='th_billingtable'>Name</th>
                    <th className='th_billingtable'>Expiry</th>
                    <th className='th_billingtable'>Qty</th>
                    <th className='th_billingtable'>Rate</th>
                    <th className='th_billingtable'>GST</th>
                    <th className='th_billingtable'>Total</th>
                </tr></thead>
                <tbody><tr>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                </tr>
                <tr>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                </tr><tr>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                </tr><tr>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                </tr>
                    <tr>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                    </tr>
                    
                    <tr>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                    </tr>
                    <tr>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                        <td className='td_billingtable'>data</td>
                    </tr>
                    <tr>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                </tr><tr>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                </tr>
                <tr>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                </tr><tr>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                </tr><tr>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                    <td className='td_billingtable'>data</td>
                </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className='td_billingtable'></td>
                            <td className='td_billingtable'></td>
                            <td className='td_billingtable'></td>
                            <td className='td_billingtable'></td>
                            <td className='td_billingtable'></td>
                            <td className='td_billingtable'>Total</td>
                            <td className='td_billingtable'>Data</td>
                        </tr>
                    </tfoot>

            </table>
        </div>
    </div>
  )
}

export default Billing;