let state = document.getElementById('input-state');
let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe',
'Tocantins'];
function gerateState(){
  for(let i=0; i<estados.length; i+=1){
    let estado = document.createElement('option');
    estado.value = estados[i];
    estado.innerHTML = estados[i];
    state.appendChild(estado);
  }
}
gerateState();