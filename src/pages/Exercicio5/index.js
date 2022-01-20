import React from 'react';
import { useState } from 'react';
import Check from '../../components/forms/checkbox'
import {ContainerBox,Container} from '../../components/style'
import { Link } from 'react-router-dom';
function Exercicio5() {
  const [ck1,setck1]=useState(false);
  const [ck2,setck2]=useState(false);
  const [ck3,setck3]=useState(false);
 return (

   <Container>
        <Link to="/" >Home</Link>
        <ContainerBox>
            <h1>Exercício 5</h1>
            <Check 
                label="CheckBox 1"
                type="checkbox"
                checked={ck1}
                name="CheckBox 1"
                onChange={(event)=>{setck1((event.target.checked))}}
            />
           <Check
                label="CheckBox 2"
                type="checkbox"
                checked={ck2}
                name="CheckBox 2"
                onChange={(event)=>{setck2((event.target.checked))}}
            />
           <Check
                label="CheckBox 3"
                type="checkbox"
                checked={ck3}
                name="CheckBox 3"
                onChange={(event)=>{setck3((event.target.checked))}}
            />
        </ContainerBox>
    </Container>  );
}

export default Exercicio5;