import styled from "styled-components";

export const ContainerBoxexterno=styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
    width:700px;
    border:0.5px solid;
    border-radius:0.5rem;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(43,43,94,1) 79%, rgba(0,212,255,1) 100%);    margin:20px;
    padding:20px;
    font-size:16px;

`
export const Linha=styled.div`
    display:flex;
    flex-direction:row;
    
`
export const Coluna=styled.div`
    display:flex;
    flex-direction:row;
    width: 50%;
    padding: 5px;
    
`
export const Container=styled.div`
    display:flex;
    justify-content:center;
    background-color:black;
    width:750px;
    margin:0 auto

`;
export const Separador=styled.div`
    padding: 5px;
    width: ${(props) => props.largura};


`;


export const LinkFormat=styled.link`
    font-size:16px;
    font-weight: bold;
    padding: 5px;
    text-decoration:none;
`;

