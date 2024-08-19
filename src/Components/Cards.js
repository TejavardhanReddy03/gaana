import React from 'react'
import CardItem from './CardItem'
import './Cards.css'; 

import anirudh from '../images/anirudh.jpg';
import ritwiz from '../images/ritwiz.jpg';
import arrahman from '../images/arrahman.jpg';
import sidsriram from '../images/sidsriram.jpg';
import arijit from '../images/arijit.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the artists!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={arijit} 
              text="Arijit Singh"
              label="Love"
              path='/arijit'
            />
            <CardItem
              src={sidsriram}
              text="Sid Sri Ram"
              label="Fantasy"
              path='/Sidsriram'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={anirudh}
              text="Anirudh Ravichandar"
              label="Bass"
              path='/anirudh'
            />
            <CardItem
              src={ritwiz}
              text="Rithviz"
              label="Adventure"
              path='/Rithviz'
            />
            <CardItem
              src={arrahman}  
              text="A R Rahman"
              label="Pride"
              path='/ARrahman'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Cards
