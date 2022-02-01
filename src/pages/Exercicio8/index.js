import React from 'react';
import { useState } from 'react';
import Input from '../../components/forms8/input'
import Check from '../../components/forms8/checkbox'
import Button from '../../components/forms8/button'
import Select from '../../components/forms8/select'
import {Separador,Linha,Coluna,Container,ContainerBoxexterno} from './style'
import { Link } from 'react-router-dom';
function Exercicio8() {
  const [formPagamento,setFormPagamento]=useState('');
  const [numcartao,setNumCartao]=useState('');
  const [mesvalidade,setMesValidade]=useState('');
  const [codseg,setCodSeg]=useState('');
  const [nome,setNome]=useState('');
  const [sobrenome,setSobrenome]=useState('');
  const [cidade,setCidade]=useState('');
  const [endcob,setEndCob]=useState('');
  const [endcob2,setEndCob2]=useState('');
  const [cep,setCep]=useState('');
  const [pais,setPais]=useState('');
  const [numtelefone,setNumTelefone]=useState('');
  const cartoes=[{valor:"1",texto:"VISA"},{valor:"2",texto:"American"},{valor:"3",texto:"MasterCard"}];

  return (
   <Container>
        <Link to="/" className="teste">Home</Link>
        <ContainerBoxexterno>
        <h1 className="teste">FORMA DE PAGAMENTO</h1>
        <Linha>
        <Coluna>
            <Select
                label='Selecione uma forma de formPagamento'
                options= {cartoes}
                description="taest"
                value={formPagamento}
                onChange={(event)=>{setFormPagamento(event.target.value)}}
            />
        </Coluna>
        </Linha>
        <Linha>
        <Coluna>
            <Input
                type="number"
                label='Número do Cartão'
                value={numcartao}
                onChange={(event)=>{setNumCartao(event.target.value)}}
            />

        </Coluna>
            <Coluna>
                <Separador largura={'50%'}>
                    <Input
                        label='Data de Validade'
                        type="month"
                        value={mesvalidade}
                        onChange={(event)=>{setMesValidade(event.target.value)}}
                    />
                </Separador>
                <Separador largura={'40%'}>
                    <Input
                            type="number"
                            label='Código de Segurança'
                            min='0'
                            max='999'
                            maxlength="3"
                            value={codseg}
                            onChange={(event)=>{setCodSeg(event.target.value)}}
                        />
                </Separador>
            </Coluna>
        </Linha>
        <h1 className="teste">DADOS DE COBRANÇA</h1>
        <Linha>
            <Coluna>
                <Separador largura={'40%'}>
                <Input
                            label='Nome'
                            value={nome}
                            onChange={(event)=>{setNome(event.target.value)}}
                    />
                </Separador>
                <Separador largura={'40%'}>
                <Input
                        label='Sobrenome'
                            value={sobrenome}
                            onChange={(event)=>{setSobrenome(event.target.value)}}
                    />
                </Separador>
            </Coluna>
            <Coluna>
               <Input
                        label='Cidade'
                        value={cidade}
                        onChange={(event)=>{setCidade(event.target.value)}}
                />
            </Coluna>
        </Linha>
        <Linha>
            <Coluna>
                <Input
                    label='Endereço de cobrança'
                    value={endcob}
                    onChange={(event)=>{setEndCob(event.target.value)}}
                />
            </Coluna>
            <Coluna>
               <Input
                    label='Código Zip ou postal (CEP)'
                    value={cep}
                    onChange={(event)=>{setCep(event.target.value)}}
                />
            </Coluna>
        </Linha>
        <Linha>
            <Coluna>
                <Input
                    label='Endereço de cobrança Linha2'
                    value={endcob2}
                    onChange={(event)=>{setEndCob2(event.target.value)}}
                />
            </Coluna>
        </Linha>
        <Linha>
            <Coluna>
                <Input
                    label='Pais'
                    value={pais}
                    onChange={(event)=>{setPais(event.target.value)}}
                />
            </Coluna>
            <Coluna>
               <Input
                    label='Número de telefone'
                    value={numtelefone}
                    onChange={(event)=>{setNumTelefone(event.target.value)}}
                />
            </Coluna>
        </Linha>
        <Linha>
            <Check
        
                type="checkbox"
                label="Salvar os meus dados de pagamento para agilizar compras futuras"

            />
        </Linha>
        <Linha>
            <h6 className="teste">Você terá chance de revisar o seu pedido antes de ser finalizado</h6>
        </Linha>




 
            <Button 
                type="submit"
                cor="green"
                width='100px'
                colorText='white'
            > Continuar </Button>
        </ContainerBoxexterno>
    </Container>
  );
}

export default Exercicio8;