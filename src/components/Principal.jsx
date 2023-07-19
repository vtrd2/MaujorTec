import React from 'react'
import Home from './Home'

const dados = [
    {isbn: "123-87-8098", titulo: "React", autor: "Maujor"},
    {isbn: "123-87-8298", titulo: "Design UX", autor: "Maujor"},
    {isbn: "123-87-8498", titulo: "Laravel para Ninjas", autor: "Jack"},
];

const tituloPagina = "Últimos lançamentos";

function Principal() {
    return (
        <main className="principal">
            <Home dados={dados} tituloPagina={tituloPagina}/>
        </main>
    )
}

export default Principal
