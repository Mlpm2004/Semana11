import './App.css';
import React from 'react';
import { useState } from 'react';
import Input from './components/forms/input'
import {ContainerBox,Container} from './components/style'
function App() {
  const [lname,setLname]=useState('');
  const [email,setEmail]=useState('');
  return (
    <Container>
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
    </Container>
  );
}

export default App;
