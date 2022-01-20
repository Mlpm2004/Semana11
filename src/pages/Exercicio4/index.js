import React from 'react';
import { useState } from 'react';
import Radio from '../../components/forms/radio'
import {ContainerBox,Container} from '../../components/style'
import { Link } from 'react-router-dom';
import { Children } from 'react/cjs/react.production.min';
function Exercicio4() {
  const [sex,setSex]=useState('');
  return (

   <Container>
        <Link to="/" >Home</Link>
        <ContainerBox>
            <h1>Exercício 4</h1>
            <Radio 
                label="Male"
                type="radio"
                name="testeradio"
                value="Male"
                onChange={(event)=>{setSex(event.target.value)}}
            />
           <Radio 
                label="Female"
                type="radio"
                name="testeradio"
                value="Female"
                onChange={(event)=>{setSex(event.target.value)}}
            />
        </ContainerBox>
    </Container>  );
}

export default Exercicio4;