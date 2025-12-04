import React from 'react'
import design from './Aboutfirst.module.css'
import ab1 from '../../../Components/Common/assets/ab1.avif'
import ab2 from '../../../Components/Common/assets/ab2.avif'
import ab3 from '../../../Components/Common/assets/ab3.avif'
import ab4 from '../../../Components/Common/assets/ab4.avif'
import ab5 from '../../../Components/Common/assets/ab5.avif'


const Aboutfirst = () => {
  return (
<>
<div className={design.ab}>
<div className={design.cont}>
<h1 className={design.mm}>About</h1>
  <p className={design.or}>At D. Mitra, we are a dynamic online electronics store offering a wide 
    range of consumer electronics, from cutting-edge smart TVs to innovative
     kitchen gadgets and personal devices. Our curated collections are meticulously
      selected to reflect industry trends and innovations, ensuring our customers have 
      access to thelatest and most advanced technology. With our standout project,</p>
      
</div>
<div className={design.rrr}><img className={design.lr} src={ab1} alt='rr'/></div>
</div>

<div className={design.mission}><h1><a>Our Mission</a></h1></div>

<div className={design.grid}>

<div className={design.tt}>
<div className={design.cr}>
<h1 className={design.mm}>Smart Appliances</h1>
  <p className={design.gg}>Our mission is to enhance our customers lives by providing
     them with smart appliances that revolutionize their everyday experiences. </p>
</div>
<div className={design.rr}><img className={design.dr} src={ab2} alt='rr'/></div>
</div>

<div className={design.tt}>
 <div className={design.rr}><img className={design.dr} src={ab3} alt='rr'/></div>
<div className={design.ct}>
<h1 className={design.mm}>Integrated Solutions</h1>
  <p className={design.gg}>Integrated solutions, we aim to create seamless and 
    efficient living environments that cater to the modern lifestyle. By combining
     innovative technologies with convenience,
     we ensure our customers enjoy a living experience. </p>
</div>
</div>

<div className={design.tt}>
<div className={design.cr}>
<h1 className={design.mm}>Automated Lighting Systems</h1>
  <p className={design.gg}>Our mission is to enhance our customers lives by providing
     them with smart appliances that revolutionize their everyday experiences. </p>
</div>
<div className={design.rr}><img className={design.dr} src={ab4} alt='rr'/></div>
</div>

<div className={design.tt}>
  <div className={design.rr}><img className={design.dr} src={ab5} alt='rr'/></div>
<div className={design.ct}>
<h1 className={design.mm}>User-Centric Approach</h1>
  <p className={design.gg}>Integrated solutions, we aim to create seamless and 
    efficient living environments that cater to the modern lifestyle. By combining
     innovative technologies with convenience,
     we ensure our customers enjoy a living experience. </p>
</div>
</div>
</div>


</>
  )
}

export default Aboutfirst