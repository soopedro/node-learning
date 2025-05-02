// UUID => unique universal DB

// - Criar usuários
// - Listagem usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
// - Método HTTP
// - URL

// GET, POST, PUT, PATCH, DELETE

// Stateful: Refere-se a sistemas ou aplicações que mantêm o estado entre requisições. Ou seja, guardam informações sobre interações anteriores. Exemplo: um sistema de login que mantém o usuário autenticado enquanto ele navega no site.

// Stateless: Refere-se a sistemas ou aplicações que não mantêm o estado entre requisições. Cada requisição é independente, sem lembrar informações anteriores. Exemplo: uma API RESTful, onde cada chamada é tratada como nova, sem dependência das chamadas anteriores.

// Formas de enviar informações para a API

// Query Parameters - quando é preciso de uma url statefull - para filtros em listagem para enviar informações que não são sensiveis

- http://localhost:3333/users?userId=1&name=Pedro

// Route Parameters - identificação de recurso fica na url (usar quando não for dados sensiveis)

- http://localhost:3333/users/1

// Request Body - Envio de informações de um forms, passa pelo protocolo HTTPS (usar para dados sensiveis)

- http://localhost:3333/users
  body - {}

  
