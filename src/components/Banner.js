import React from 'react'
import pic01 from '../assets/images/pic01.jpg'
import foundation_logo from '../images/foundation_logo.jpg'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h1 style={{fontSize:'60px', fontWeight: 'bold'}}><span style={{color: 'red'}}>Heart</span> <span style={{color: 'blue'}}>Matters</span></h1>
        <p style={{fontWeight: 'bold', fontSize: '20px'}}>
          THE ENCYLOPEDIA OF RELATIONSHIP MATTERS
        </p>
      </header>
      <span className="image">
        {/* <img src={pic01} alt="intro" /> */}
        <img src={foundation_logo} alt="logo" />
      </span>
    </div>
    <ScrollLink
      to="one"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Banner
