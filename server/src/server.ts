import express, { response } from 'express';

const app = express();

app.use(express.json());

// Rota: Endereço completo da requisição 
// Recurso: Qual entidade estamos acessando no sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação no back-end

//POST http://localhost:3333/users -> Criar usuário
//GET http://localhost:3333/users -> Listar usuários
//GET http://localhost:3333/users/5 -> Buscar dados do usuário com id 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação...
// Request Body: Parâmetros para criação/atualização de informações

const users = [
    'Diego', // 0
    'Rafael', // 1
    'Paulo', // 2
    'Ana', //3
    'Gabriel' //4
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user=>user.includes(search)):users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response)=>{
    const id = Number(request.params.id);

    const user = users [id];

    return response.json(user);
});

app.post('/users', (request, response)=>{
    const data = request.body;
    console.log(data);

    const user = {
        name: data.name,
        email: data.email,
    };
    
    return response.json(user);
});

app.listen(3333);

