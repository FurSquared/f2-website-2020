import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Content} from './Layout';

const Hero = styled.div`
  width: 100%;
  // margin-top: 2rem;
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
    }
`;

function Well({children}) {
  return (
    <Hero>
      <InnerWell>
        <div>
          <Content>
            {children}
          </Content>
        </div>
      </InnerWell>
    </Hero>
  )
}

export default Well;