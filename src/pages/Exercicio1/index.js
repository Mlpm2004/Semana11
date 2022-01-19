import React from 'react';
import { useState } from 'react';
import Input from '../../components/forms/input'
import {ContainerBox,Container} from '../../components/style'
import { Link } from 'react-router-dom';
function Exercicio1() {
  const [lname,setLname]=useState('');
  const [email,setEmail]=useState('');
  return (

   <Container>
        <Link to="/" >Home</Link>
        <ContainerBox>
            <h1>Exercício 1</h1>
            <Input 
                label="Last Name"
                value={lname}
                onChange={(event)=>{setLname(event.target.value)}}
            />
           <Input 
                label="Email"
                type="mail"
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}}
            />
        </ContainerBox>
    </Container>  );
}

export default Exercicio1;