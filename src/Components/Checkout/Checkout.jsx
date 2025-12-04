import React, { useState } from 'react'
import Ch from './Checkout.module.css'
const Checkout = () => {
    const [data,setData]=useState({
     name:'',
     address:'',
     zip:'',
     city:'',
     state:'',
     phone:'',
     email:'',
     cardnumber:'',
     cv:'',
})


const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
    
}
const handlesubmit=(e)=>{
    e.preventdefault();
    alert('Order Successfully')
    console.log(data)
}
return (
    <div>
       <div className={Ch.container}>
       <div className={Ch.left}>
        <h1>CheckOut</h1>
        <form onsubmit={handlesubmit}>
            <h3>Shipping Details</h3>
            <input type="text" name="name" placeholder="Fullname" value={data.name} onChange={handleChange}required/>
            <input type="text" name="address" placeholder="Address" value={data.address} onChange={handleChange}required/>
            <input type="number" name="zip" placeholder="Zip" value={data.zip} onChange={handleChange}required/>
            <input type="text" name="city" placeholder="City" value={data.city} onChange={handleChange}required/>
            <input type="text" name="state" placeholder="State" value={data.state} onChange={handleChange}required/>
            <input type="number" name="phone" placeholder="Phone" value={data.phone} onChange={handleChange}required/>
            <input type="email" name="email" placeholder="email" value={data.email} onChange={handleChange}required/>
           <h3>Payment Details</h3>
            <input type="number" name="cardnumber" placeholder="Cardnumber" value={data.cardnumber} onChange={handleChange}required/>
            <input type="number" name="cv" placeholder="CV" value={data.cv} onChange={handleChange}required/>
            <button type="submit">Place Order</button>
        </form>
       </div>

</div>

    








    </div>
  )
}

export default Checkout
