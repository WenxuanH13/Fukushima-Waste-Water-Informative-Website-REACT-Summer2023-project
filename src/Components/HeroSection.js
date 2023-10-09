import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button1 } from './Button1';
import './HeroSection.css';
import './Cards';

function HeroSection() {

  return (
    <div className='hero-container'>
      <video src={require('../videos/video-3.mp4')} autoPlay loop muted /> 
      <h1>FUKUSHIMA NUCLEAR WASTE WATER DANGERS</h1>
      <p>SEE MORE ABOUT JAPAN'S WASTE WATER RELEASE PLAN</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button1
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          MORE INFO. <i class="fa-solid fa-newspaper" />
        </Button1>
      </div>
    </div>
  );
}

export default HeroSection;