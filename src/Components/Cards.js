import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Learn More About the Current News on these Sites!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src = {require('../images/picture2.jpg')}
              text='Learn about the concerns of the nuclear waste water'
              label='BBCNews'
              externalLink = 'https://www.bbc.com/news/world-asia-66106162'
            />
            <CardItem
              src = {require('../images/picture1.jpg')}
              text= "Asia's opinion on Japan's nuclear water plan"
              label='NYTimes'
              externalLink = 'https://www.nytimes.com/2021/04/13/world/asia/japan-fukushima-nuclear-wastewater.html'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src = {require('../images/japProtest.jpg')}
              text='Fear and frustrations with neighboring countries while Japan proceeds with their nuclear water plan'
              label='PBSNews'
              externalLink = 'https://www.pbs.org/newshour/world/japans-neighbors-share-fear-and-frustration-over-radioactive-water-release'
            />
            <CardItem
              src = {require('../images/korProtest.jpg')}
              text='South Korea protests against the ocean contamination'
              label='WallStreet Journal'
              externalLink = 'https://www.wsj.com/articles/japans-plan-to-release-nuclear-wastewater-spurs-resistance-in-south-korea-826f1126'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;