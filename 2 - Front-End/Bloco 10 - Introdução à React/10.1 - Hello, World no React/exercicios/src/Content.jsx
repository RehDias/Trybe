import React from "react";

class Content extends React.Component {
    render() {
        const conteudos = [
            {
              conteudo: 'High Order Functions',
              bloco: 8,
              status: 'Aprendido'
            },
            {
              conteudo: 'Composicao de Componentes',
              bloco: 11,
              status: 'Aprendendo',
            },
            {
              conteudo: 'Composicao de Estados',
              bloco: 12,
              status: 'Aprenderei'
            },
            {
              conteudo: 'Redux',
              bloco: 16,
              status: 'Aprenderei'
            },
          ];
          const conteudo = conteudos.map((element) => 
            <ul>          
                <li key = {element.conteudo} >{`O conteúdo é: ${element.conteudo}`}</li>
                <li key = {element.status} >{`Status: ${element.status}`}</li>
                <li key = {element.bloco} >{`Bloco: ${element.bloco}`}</li>   
            </ul>    
            );
        return conteudo;
    }
}

export default Content;