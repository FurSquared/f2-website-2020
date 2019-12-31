import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Content} from './Layout';

const Hero = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

const InnerWell = styled.div`
  width: 100%;
  text-align: center;
  
  .aug {
      min-height: 250px;
      width: 100%;
      padding: 2rem;
      display: inline-block;
      
      --aug-inset:7px; 
      --aug-inset-bg: rgb(58, 134, 183); 
      --aug-inset-opacity: 0.6;
      
      --aug-border:5px; 
      --aug-border-bg:rgba(58, 134, 183, 0.7 ); 
      --aug-border-opacity: 0.9; 
     
      --aug-tl:25px; 
      --aug-tl-height:25px; 
      --aug-tl-width:25px; 
      
      --aug-tr:20px; 
      --aug-tr-height:20px; 
      --aug-tr-width: 250px;;
      
      --aug-br:25px; 
      --aug-br-height:25px; 
      --aug-br-width:25px; 
      
      --aug-bl:25px; 
      --aug-bl-height:25px; 
      --aug-bl-width:25px; 
      
      --aug-t:0px; 
      --aug-t-height:0px; 
      --aug-t-width:0px; 
      
      --aug-r:0px; 
      --aug-r-height:0px; 
      --aug-r-width:0px; 
      
      --aug-b-offset:0px; 
      --aug-b:150px; 
      --aug-b-height:15px; 
      --aug-b-width: 500px;
      
      --aug-l-offset:0px; 
      --aug-l:20px; 
      --aug-l-height: 150px;
      
      @media (max-width: 768px) {
    
      --aug-bl:10px; 
      --aug-bl-height:10px; 
      --aug-bl-width:10px; 
      
      --aug-br:10px; 
      --aug-br-height:10px; 
      --aug-br-width:10px; 
      
      --aug-b:75px; 
      --aug-b-height:10px; 
      --aug-b-width: 100px;
      
      }
    }
`;

// function useInterval(callback, delay) {
//   const savedCallback = useRef();
//
//   useEffect(() => {
//     savedCallback.current = callback;
//   });
//
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//
//     let id = setInterval(tick, delay);
//     return () => clearInterval(id);
//   }, [delay]);
// }

// function useAugAnim(position, min, max, speed) {
//   const [dimension, setDimension] = useState(min);
//   const [direction, setDirection] = useState(1);
//
//   useInterval(() => {
//     setDimension(dimension + direction);
//
//     if(direction && dimension >= max) {
//       setDirection(-1);
//     } else if(direction === -1 && dimension <= min) {
//       setDirection(1);
//     }
//
//   }, speed);
//
//   return {[position]: `${dimension}px;`};
// }


function Well({children}) {
  const styles = {
    // ...useAugAnim('--aug-l-height', 50, 100, 50)
  };

  return (
    <Hero>
      <InnerWell attrs={styles}>
        <div className={`aug`} augmented-ui="tr-clip-x l-clip-y bl-clip tl-clip br-clip b-clip-x exe">
          <Content>
            {children}
          </Content>
        </div>
      </InnerWell>
    </Hero>
  )
}

export default Well;