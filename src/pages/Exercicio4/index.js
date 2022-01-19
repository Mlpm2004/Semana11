import React from 'react';
import { useState } from 'react';
import Radio from '../../components/forms/radio'
import {ContainerBox,Container} from '../../components/style'
import { Link } from 'react-router-dom';
import { Children } from 'react/cjs/react.production.min';
function Exercicio4() {
  const [radiomale,setRadioMale]=useState('');
  const [radiofemale,setRadioFemale]=useState('');
  return (

   <Container>
        <Link to="/" >Home</Link>
        <ContainerBox>
            <h1>Exercício 4</h1>
            <Radio 
                label="Male"
                type="radio"
                name="testeradio"
                checked
                value={radiomale}
                onChange={(event)=>{setRadioMale(event.target.value)}}
            />
           <Radio 
                label="Female"
                type="radio"
                name="testeradio"
                value={radiofemale}
                onChange={(event)=>{setRadioFemale(event.target.value)}}
            />
        </ContainerBox>
    </Container>  );
}

export default Exercicio4;