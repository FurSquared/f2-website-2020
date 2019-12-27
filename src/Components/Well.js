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
      width: 100%;
      padding: 2rem;
      display: inline-block;
      
      --aug-inset:7px; 
      --aug-inset-bg: rgb(58, 134, 183); 
      --aug-inset-opacity: 0.6;
      
      --aug-border:5px; 
      --aug-border-bg:rgba(58, 134, 183, 0.7 ); 
      --aug-border-opacity: 0.9; 
      
      --aug-tl:10px; 
      --aug-tl-height:0px; 
      --aug-tl-width:0px; 
      
      --aug-tr:20px; 
      --aug-tr-height:20px; 
      --aug-tr-width: 250px;; 
      
      --aug-br:20px; 
      --aug-br-height:0px; 
      --aug-br-width:0px; 
      
      --aug-bl:30px; 
      --aug-bl-height:30px; 
      --aug-bl-width:30px; 
      
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
      --aug-l-height: ${props => props.attrs['--aug-l-height']}
    }
`;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function useAugAnim(position, min, max, speed) {
  const [dimension, setDimension] = useState(min);
  const [direction, setDirection] = useState(1);

  useInterval(() => {
    setDimension(dimension + direction);

    if(direction && dimension >= max) {
      setDirection(-1);
    } else if(direction === -1 && dimension <= min) {
      setDirection(1);
    }

  }, speed);

  return {[position]: `${dimension}px;`};
}


function Well({children}) {
  const styles = {
    ...useAugAnim('--aug-l-height', 50, 200, 50)
};

  return (
    <Hero>
      <InnerWell attrs={styles}>
        <div className={`aug`} augmented-ui="tr-clip-x l-clip-y bl-clip tl-round br-round b-clip-x exe">
          <Content>
            {children}
          </Content>
        </div>
      </InnerWell>
    </Hero>
  )
}

export default Well;