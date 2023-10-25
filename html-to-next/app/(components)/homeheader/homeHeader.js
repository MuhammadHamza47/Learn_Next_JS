import React from 'react'
import Navbar from '../navbar/navbar'

export default function HomeHeader() {
  return (
    <section class="header">
    <Navbar/>
    <div class="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br/> esse blanditiis in quae perspiciatis quo.
            </p>
            <a href="#" class="hero_btn">Visit Us To Know More</a>
        </div>
    </section>
  )
}
