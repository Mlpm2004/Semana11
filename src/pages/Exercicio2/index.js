import React from 'react';
import { useState } from 'react';
import Select from '../../components/forms/select'
import {ContainerBox,Container} from '../../components/style'
import { Link } from 'react-router-dom';
function Exercicio2() {
  const [option,setOption]=useState('');
  const optionValues=[{valor:"1",texto:"numero 1"},{valor:"2",texto:"numero 2"},{valor:"3",texto:"numero 3"}]
  return (
   <Container>
        <Link to="/" >Home</Link>
        <ContainerBox>
            <h1>Exercício 2</h1>
            <Select 
                description={"Selecione aqui"}
                label="Team Size"
                value={option}
                onChange={(event)=>{setOption(event.target.value)}}
                options={optionValues}
            />
        </ContainerBox>
    </Container>  );
}

export default Exercicio2;