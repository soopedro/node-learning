import http from "node:http";
import { Database } from "./database.js";
import { randomUUID } from "node:crypto";
import { json } from "./middlewares/json.js";

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

const database = new Database();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  if (method === "GET" && url === "/users") {
    const users = database.select("users");

    return res.end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;

    const user = {
      id: randomUUID(),
      name: name,
      email: email,
    };

    database.insert("users", user);
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end("Não encontrado!");
});

server.listen(3333);
