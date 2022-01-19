import React from 'react';
import { useState } from 'react';
import Radio from '../../components/forms/radio'
import {ContainerBox,Container} from '../../components/style'
import { Link } from 'react-router-dom';
import { Children } from 'react/cjs/react.production.min';
function Exercicio1() {
  const [ckmale,setckmale]=useState('');
  const [ckfemale,setckfemale]=useState('');
  return (

   <Container>
        <Link to="/" >Home</Link>
        <ContainerBox>
            <h1>Exercício 1</h1>
            <Radio 
                label="Male"
                type="radio"
                name="testeradio"
                checked
                value={ckmale}
                onChange={(event)=>{setckmale(event.target.value)}}
            />
           <Radio 
                label="Female"
                type="radio"
                name="testeradio"
                value={ckfemale}
                onChange={(event)=>{setckfemale(event.target.value)}}
            />
        </ContainerBox>
    </Container>  );
}

export default Exercicio1;