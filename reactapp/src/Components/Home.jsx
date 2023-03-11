import React from 'react'
import vg from "../assets/image2.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>Tech Hub</h1>
            <p>Solution of your all problems</p>
        </main>
    </div>
    <div className='home2'>
      <img src={vg} alt="Graphics"/>
      <div>
      <p>
        We are most popular for solving the tech Problems you face every day.
        We are leading tech company whose aim to the increase of solving problems. 
      </p>
      </div>
      
    </div>
    <div className='home3'id="About">
      <div>
        <h1>Who are you?</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur labore error sit ab voluptate! 
        Repellendus cupiditate ipsam ex, deleniti, aspernatur non sunt odio saepe maiores sequi ab enim amet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur labore error sit ab voluptate! 
        Repellendus cupiditate ipsam ex, deleniti, aspernatur non sunt odio saepe maiores sequi ab enim amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur labore error sit ab voluptate! 
        Repellendus cupiditate ipsam ex, deleniti.</p>
      </div>
    </div>
    <div className='home4' id='Brands'>
      <div>
      <h1>Brands</h1>
      <article>
      <div style={{animationDelay:"0.3s",}}>
        <AiFillGoogleCircle/>
      <p>Google</p>
     
      </div>
      <div style={{animationDelay:"0.5s",}}>
     <AiFillAmazonCircle />
      <p>Amazon</p>
     
      </div>
      
      <div style={{animationDelay:"0.7s" ,}}>
      <AiFillYoutube />
      <p>Youtube</p>
     
      </div>

      <div style={{animationDelay: "1s",}}>
      <AiFillInstagram />  
      <p>Instagram</p>
     
      </div>
      </article>
      </div>
    </div>
      
    </>
  )
}

export default Home