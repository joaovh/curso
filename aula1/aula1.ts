interface IEndereco{
    city : string;
    uf : string;
    logradouro : string;
    cep : string;
    numero : string;
  }
  
  interface IPessoa {
    name : string;
    idade? : number | null;
    endereco : IEndereco;
  }
  
   let pessoa : IPessoa = {name : 'Denis',idade : 31,endereco : {city : 'Barretos',uf : 'SP',logradouro : 'Avenida Antonio Gomes',cep : '14781285',numero : '196'}}
  
   let pessoas : IPessoa[] = [
    {name : 'Denis',idade : 31,endereco : {city : 'Barretos',uf : 'SP',logradouro : 'Avenida Antonio Gomes',cep : '14781285',numero : '196'}},
    {name : 'Joao',idade : 28,endereco : {city : 'Colina',uf : 'SP',logradouro : 'AV 32',cep : '14781285',numero : '19'}},
    {name : 'Bruno',idade : 22,endereco : {city : 'Barretos',uf : 'SP',logradouro : 'Rua 18',cep : '14781285',numero : '16'}}
   ]; 
  
   pessoas.forEach(
     (item : IPessoa) => {
       console.log(
         `nome: ${item.name} idade: ${item.idade} endereco: ${item.endereco.city}`
       );
     }
   );