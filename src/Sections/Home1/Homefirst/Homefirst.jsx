import React, { useState, useEffect } from "react";
import axios from "axios";
import st from './Homefirst.module.css'
import { Link } from 'react-router-dom';
import remote from '../../../Components/Common/assets/remote.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import product1 from'../../../Components/Common/assets/product1.avif';
import product2 from'../../../Components/Common/assets/product2.avif';
import product3 from'../../../Components/Common/assets/product3.avif';
import product4 from'../../../Components/Common/assets/product4.avif';
import product5 from'../../../Components/Common/assets/product 5.avif';
import product6 from'../../../Components/Common/assets/product6.avif';
import laptop from '../../../Components/Common/assets/laptop.jpg';
import toast from '../../../Components/Common/assets/toat.jpg'



const Homefirst = () => {
const products = [
    { id: 1, title: "Ultra HD Smart TV", price: 599, image: product1 },
    { id: 2, title: "Multi-Functional Blender", price: 89, image: product2 },
    { id: 3, title: "Stylish Smartwatch", price: 199, image: product3 },
    { id: 4, title: "Noise Cancelling Earbuds", price: 89, image: product4 },
    { id: 5, title: "Compact Air Fryer", price: 59, image: product5 },
    { id: 6, title: "Smart Kitchen Scale", price: 49, image: product6 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };


  
return (
    <div>
<div className={st.phone}>

<div className={st.content}>
<h1 className={st.u}>Smart Living Hub</h1>
<p className={st.yy}>From smart TVs and kitchen gadgets to personal devices,<br></br>
   we offer a curated collection of innovative products.</p>
<Link to="/Shop" className={st.bt}>Shop Now </Link>
</div>
</div>


<div className={st.about}>
<div className={st.one}>
<div ><img className={st.im} src={remote} alt='img'/></div>
</div>
<div className={st.two}>
<p className={st.title}>About</p>
<h3 className={st.fg}>D. Mitra is your go-to online electronics store, dedicated to providing a wide 
  range of consumer electronics. Our focus on industry trends and innovation ensures 
  that you have access to cutting-edge products. We believe in a user-centric approach,
   offering informative
   blog posts and live chat support for a seamless shopping experience.</h3><br></br>
<div className={st.bh}>  <Link to="/About" className={st.but}>Learn More</Link></div>
</div>
</div>


<section className={st.related}>
      <h1>Related Products</h1>
      <div className={st.carouselWrapper}>
        <Slider {...settings}>
          {products.map((item) => (
            <div className={st.card} key={item.id}>
              <Link to={`/Product/${item.id}`} className={st.link}>
                <div className={st.imageBox}>
                  <img src={item.image} alt={item.title} className={st.pro} />
                  <div className={st.quickView}>Quick View</div>
                </div>
                <div className={st.textBox}>
                  <p className={st.title}>{item.title}</p>
                  <p className={st.price}>${item.price}.00</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  
<div className={st.product}>
    <div className={st.cyn}>
     <div><h1>Product Showcase</h1></div>
    <div><Link to="/Shop" className={st.lt}>Shop Now</Link></div>
</div>
</div>


<div className={st.device}>
<div className={st.half}>
  <h1 className={st.he}>Personal device</h1>
  <p className={st.ge}>Stay connected and productive with our array of
     personal devices that cater to your everyday needs.</p>
<div className={st.mov}><Link to="/Shop" className={st.if}>Shop Now</Link></div>
</div>
<div className={st.hl}><img className={st.draw} src={laptop} alt='im'/></div>
</div>


<div className={st.open}>
<div className={st.lite}><img className={st.draw} src={toast} alt='li'/></div>
<div className={st.hu}>
<h1 className={st.he}>Kitchen Gadget</h1>
<p className={st.ge}>Elevate your culinary skills with our selection of kitchen
   gadgets designed to make cooking a joyous experience.</p>
<div className={st.bh}><Link to="/About" className={st.but}>Learn More</Link></div>
</div></div>


<div className={st.pr}>
    <div className={st.cy}>
     <div><h1 className={st.ji}>Accessories</h1>
     <p className={st.ke}>Elevate your culinary skills with our selection of kitchen <br></br>
      gadgets designed to make cooking a joyous experience.</p>
     </div>
    <div className={st.br}>  <Link to="/About" className={st.butt}>Learn More</Link></div>
</div>
</div>



























    </div>
  )
}

export default Homefirst