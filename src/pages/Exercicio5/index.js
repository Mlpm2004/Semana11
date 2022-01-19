import React from 'react';
import { useState } from 'react';
import Check from '../../components/forms/checkbox'
import {ContainerBox,Container} from '../../components/style'
import { Link } from 'react-router-dom';
function Exercicio5() {
  const [ckmale,setckmale]=useState('');
  const [ckfemale,setckfemale]=useState('');
  return (

   <Container>
        <Link to="/" >Home</Link>
        <ContainerBox>
            <h1>Exercício 5</h1>
            <Check 
                label="CheckBox 1"
                type="checkbox"
                name="testeradio"
                onChange={(event)=>{setckmale(event.target.value)}}
            />
           <Check
                label="CheckBox 2"
                type="checkbox"
                name="testeradio"
               onChange={(event)=>{setckfemale(event.target.value)}}
            />
           <Check
                label="CheckBox 3"
                type="checkbox"
                name="testeradio"
                onChange={(event)=>{setckfemale(event.target.value)}}
            />
        </ContainerBox>
    </Container>  );
}

export default Exercicio5;