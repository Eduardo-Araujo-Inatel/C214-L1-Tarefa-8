# C214 - T8
[![Tarefa 8](https://github.com/Eduardo-Araujo-Inatel/C214-L1-Tarefa-8/actions/workflows/node.js.yml/badge.svg)](https://github.com/Eduardo-Araujo-Inatel/C214-L1-Tarefa-8/actions/workflows/node.js.yml)

Implementação de CRUD em `Javascript` usando a biblioteca `Mongoose` para interagir com um banco de dados `MongoDB`.

## **Requisitos**

É necessario o `Node.js` instalado em seu sistema.

Instale as dependências do projeto com o seguinte comando:

```bash
npm install
```

Em seguida realize os testes:

```bash
npm test
```

## **Endpoints**
#### Há um arquivo de exemplo para o Postman (`postman_collection.json`) na raiz do projeto


GET - /car/list

Body: N/A

GET - /car/listByMarca

Body: 

```json
{
   "marca": nomeDaMarca
}
```

POST - /car/create

Body:

```json
{
    "marca": nomeDaMarca,
    "modelo": nomeDoModelo,
    "cor":  corDoVeiculo,
    "ano": anoDeFabricação
}
```

PUT - /car/update

Body:

```json
{
    "marca": nomeDaMarca,
    "modelo": nomeDoModelo,
    "cor":  corDoVeiculo,
    "ano": anoDeFabricação
}
```

DELETE - /car/deleteAllByMarca

Body:

```json
{
    "marca": nomeDaMarca,
}
```

DELETE - /car/delete/{nomeDaMarca}&{nomeDoModelo}

Body: N/A

---


**Eduardo Borges Araujo - GES - 42**
