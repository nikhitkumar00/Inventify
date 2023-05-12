import React from 'react'
import './Billing.css'
import { Add } from './Add'
import { Productinfo } from './Productinfo'
import { Billingtable } from './Billingtable'

export const Billing = () => {
  return (
    <div className='BillingContainer' >
      <div className='BillingContainerChild1' style={{
        display: 'flex',
        gap: '20px'
      }}>
        <Add />
        <Productinfo />
      </div>
      <Billingtable/>
    </div>
  )
}