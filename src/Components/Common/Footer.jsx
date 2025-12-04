import React from 'react'
import { Link } from 'react-router-dom'
import de from './Footer.module.css'
import { FaFacebookF, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
const Footer = () => {
  return (
<>
<div className={de.footer}>

<div className={de.logo}>
  <h1>D.Mitra</h1>
</div>

<div className={de.je}>
<Link to={'/Shop'}>Shop</Link>
<Link to={'/About'}>About</Link>
<Link to={'/Contact' }>Contact</Link> 
</div>

<div className={de.je}>
<Link to={'/Privacy'}>Privacy</Link>
<Link to={'/Acessibility'}>Acessibility</Link>
<Link to={'/Refund'}>Refund</Link>
<Link to={'/Shipping'}>Shipping</Link>
<Link to={'/Term'}>Term</Link>
</div>

<div className={de.je}>
<p>123-456-7890</p>
<p>info@mysite.com</p>
<p>500 Terry Francine St.</p> 
<p>  San Francisco, CA 94158</p>
<p><FaFacebookF className={de.icon} />
<FaPinterestP className={de.icon} />
<FaWhatsapp className={de.icon} />
<FaXTwitter className={de.icon} /></p>
</div>
</div>













</>
  )
}

export default Footer