import React from 'react';
import { useState } from 'react';
import SwitchComponent from '../../components/forms/switch'
import {ContainerBox,Container} from '../../components/style'
import { Link } from 'react-router-dom';
function Exercicio5() {
  const [switchbutton1,setSwitchButton1]=useState(true);
  const [switchbutton2,setSwitchButton2]=useState(true);
  const [switchbutton3,setSwitchButton3]=useState(true);
  return (

   <Container>
        <Link to="/" >Home</Link>
        <ContainerBox>
            <h1>Exercício 5</h1>
            <SwitchComponent
                label={"Bluetooth"}
                checked={switchbutton1}
                onChange={(event)=>{setSwitchButton1(event)}}
            />
            <SwitchComponent
                label={"WI-FI"}
                checked={switchbutton2}
                onChange={(event)=>{ setSwitchButton2(event)}}
            />
            <SwitchComponent
                label={"Dark Mode"}
                checked={switchbutton3}
                onChange={(event)=>{ setSwitchButton3(event)}}
            />
        </ContainerBox>
    </Container>  );
}

export default Exercicio5;