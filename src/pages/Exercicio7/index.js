import React from 'react';
import { useState } from 'react';
import Input from '../../components/forms/input'
import Check from '../../components/forms/checkbox'
import Button from '../../components/forms/button'
import {ContainerBox,Container} from '../../components/style'
import { Link } from 'react-router-dom';
function Exercicio7() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  return (

   <Container>
        <Link to="/" >Home</Link>
        <ContainerBox>
            <h1>Exercício 7</h1>
            <Input
                type="mail"
                placeholder="mpmartins@bol.com.br"
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}}
            />

            <Input
                type="password"
                placeholder="************"
                value={password}
                onChange={(event)=>{setPassword(event.target.value)}}
            />

            <Check 
                type="checkbox"
                label="Keep me Signed in"

            />
 
            <Button 
                type="submit"
                cor="red"
                width='400px'
                colorText='white'
            > SIGN IN </Button>
                
            
            <Container><Link to="/" >forgot your password?</Link></Container>
        </ContainerBox>
    </Container>  );
}

export default Exercicio7;