import React from 'react';
import image from '../images/581887_orig.jpg';
import image2 from '../images/845072_orig.jpg';
import image3 from '../images/2227806_orig.jpg'
import image4 from '../images/4485729_orig.jpg'
import image5 from '../images/6843168_orig.jpg'
import image6 from '../images/8732896_orig.jpg'
import image7 from '../images/9633580_orig.jpg'
import image8 from '../images/Kermit_the_Frog.jpg'

import '../App.css';

const CommercialEditorial = props => {
  return (
    <div className="images">
      <img src={image} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
      <img src={image4} alt="" />
      <img src={image5} alt="" />
      <img src={image6} alt="" />
      <img src={image7} alt="" />
      <img src={image8} alt="" />
    </div>
  )
}

export default CommercialEditorial;
