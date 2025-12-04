import React from 'react'
import { FaGreaterThan } from "react-icons/fa";
import { Link } from 'react-router-dom'
import cs from './Shopfirst.module.css'
import pro1 from '../../../Components/Common/assets/product1.avif'
import pro2 from'../../../Components/Common/assets/product2.avif';
import pro3 from'../../../Components/Common/assets/product3.avif';
import pro4 from'../../../Components/Common/assets/product4.avif';
import pro5 from'../../../Components/Common/assets/product 5.avif';
import pro6 from'../../../Components/Common/assets/product6.avif';


const products=[
{id:1, name:"Ultra HD Smart TV",price: 599,image:pro1},
{id:2,name:"Multi-Functional Blender",price:89,image:pro2},
{id:3, name:"Stylish Smartwatch",price: 199,image:pro3},
{id:4,name:"Noise Cancelling Earbuds",price:89,image:pro4},
{id:5, name:"Compact Air Fryer",price: 129,image:pro5},
{id:6,name:"Smart Kitchen Scale",price:49,image:pro6}
]




const Shopfirst = () => {

return (
    <div>
    <div className={cs.shop}>
     <div className={cs.prp}>
      <p className={cs.list}><Link to="/">Home</Link> </p>
       <p className={cs.icon}><FaGreaterThan/></p>
      <p>ALL Products</p>
     </div>
     <h1>All Products</h1>
     </div>
<div className={cs.grid}>
{products.map((product)=>(
<div key={product.id} className={cs.card}>
<img className={cs.ij} src= {product.image} alt={product.name}/>
<h3>{product.name}</h3>
<p className={cs.price}> $ {product.price}</p>
<p className={cs.list}> <Link to={`/product/${product.id}`} className={cs.product}>
View Details
</Link></p>
</div>
))}
</div>






</div>

      
  )     
}

export default Shopfirst