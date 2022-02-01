import React from "react";
import { Link } from 'react-router-dom';
function Home(){
    const paginas=['Exercicio1','Exercicio2','Exercicio3','Exercicio4','Exercicio5','Exercicio6','Exercicio7','Exercicio8']
    return(
        paginas.map((pagina)=> <li><Link to={pagina} >{pagina}</Link></li>)
    );
}

export default Home;