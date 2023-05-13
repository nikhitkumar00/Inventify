import React from 'react'
import './Billing.css'
import  Add  from './Add'
import  Productinfo  from './Productinfo'
import  Billingtable  from './Billingtable'
const Billing = () => {
  return (
    <div className='BillingContainer' >
      <div className='BillingContainerChild1'>
        <Add />
        <Productinfo className="Productinfo" />
      </div>
      <Billingtable />
    </div>
  )
}

export default Billing;