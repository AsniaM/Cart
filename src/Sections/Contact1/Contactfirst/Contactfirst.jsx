
import React, { useState } from 'react'
import axios from 'axios'
import stu from './Contactfirst.module.css'
import ss from "../../../Components/Common/assets/pin.avif"
const Contactfirst = () => {

const [tex,setTex]=useState('')
const [te,setTe]=useState('')
const [mail,setMail]=useState('')
const [phone,setPhone]=useState('')
const [msg,setMsg]=useState('')
const [error,setError]=useState({})


const myFunction = () => {
const newErr = {}

if (!tex.trim()) {
      newErr.tex = "First name is required";
    }
if (!te.trim()) {
      newErr.te = "Last name is required";
    } 

if(!mail.trim()){
    newErr.mail='This field is required'
}else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
        newErr.mail=' Valid email is required'
    }

if(!phone.trim()){
newErr.phone = 'Phone number is required'
        }else if(!/^[6-9]\d{9}$/.test(phone)){
            newErr.phone = ' Valid phone number is required'
        }

if (!msg.trim()) {
      newErr.msg = "Message cannot be empty";
    }
setError(newErr)
        return Object.keys(newErr).length===0
    }



const handleSubmit = async(e) => {
    e.preventDefault();
        if(myFunction()){
            try{
                const payload = {
                    firstname: tex,
                    lastname:te,
                    email: mail,
                    phone: phone,
                    message: msg,

                }
                const res = await axios.post(`https://jsonplaceholder.typicode.com/users` , payload)
            }catch(err){
                console.log(err)
            }
            alert('Form submitted successfully')
        }
    }









  return (
    <div> <div className={stu.pen}>
      <div><img src={ss} alt='img'/>
    </div>

   <div>

    <div className={stu.formSection}>
      <form onSubmit={handleSubmit} className={stu.form}>
      <h1 className={stu.co}>Contact Us</h1>
      <p className={stu.ow}>Reach out to us for inquiries or assistance</p>

      <div className={stu.row}>
     <div className={stu.field}>
      <label htmlFor="fname">First name*</label>
      <input type="text" value={tex} onChange={(e)=>setTex(e.target.value)} />
      {error.tex ? <p style={{ color: "red" }} >{error.tex}</p> : ''}
      </div>
     <div className={stu.field}>
      <label htmlFor="lname">Last name*</label>
     <input type="text" value={te} onChange={(e)=>setTe(e.target.value)} />
     {error.te?<p style={{ color: "red" }} >{error.te}</p>:''}
       </div>
          </div>

  <div className={stu.row}>
   <div className={stu.field}>

     <label htmlFor="email">Email*</label>
     <input type="email" value={mail} onChange={(e)=>setMail(e.target.value)} />
     {error.mail?<p style={{ color: "red" }} >{error.mail}</p>:''}
</div>
            <div className={stu.field}>

     <label htmlFor="Phone">Phone*</label>
     <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
     {error.phone?<p style={{ color: "red" }} >{error.phone}</p>:''}
</div></div>
    <div className={stu.field}>

     <label htmlFor="Message">Message*</label>
     <input type="text" value={msg} onChange={(e)=>setMsg(e.target.value)} />
     {error.msg?<p style={{ color: "red" }}>{error.msg}</p>:''}</div>

     <button type="submit" className={stu.btn} >Submit</button>
     </form>

    </div> 
</div>
  </div>      </div>
  )
}

export default Contactfirst