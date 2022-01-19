import React from 'react';
import { useState } from 'react';
import TextArea  from '../../components/forms/textarea'
import {ContainerBox,Container} from '../../components/style'
import { Link } from 'react-router-dom';
function Exercicio3() {
  const [texto,setText]=useState('');
  return (
   <Container>
        <Link to="/" >Home</Link>
        <ContainerBox>
            <h1>Exercício 3</h1>
            <TextArea 
                label="Text Area Example"
                value={texto}
                onChange={(event)=>{setText(event.target.value)}}
                cols="50"
            />
        </ContainerBox >
    </Container>  );
}

export default Exercicio3;