# API DE DOCTOR WHO

<img src="https://static3.srcdn.com/wordpress/wp-content/uploads/2019/01/doctor-who-doctors-e1550612608981.png" alt="Marvel Logo" style="zoom:33%;" />

Back end utilizando Node.js e MongoDB Atras como banco de dados. API completa com CRUD e busca por palavras chaves, retornando a palavra ou o objeto completo.

Para utilizar o projeto faça o dowload do arquivo zip, ou faça o clone em seu computador utilizando o Git. Execute o comando:
```
npm i
```
 dentro da pasta do projeto em seu computador(a pasta que contém o arquivo package.json), para baixar as dependencias do projeto.

 ## O banco de dados

 Como utilizo o MongoDB Atras como banco de dados, não sera necessario baixar o mongoDB, porem para seus exemplos faça uma conta no site (https://www.mongodb.com/pt-br/cloud/atlas/signup)

 Modifique o arquivo .env.example para se conectar no seu banco de dados.

## Agora você pode executar o projeto: 
* Para executar o projeto com o nodemon, digite no terminal: 
```
npm run dev
```
* Para executar o projeto com o node, digite no terminal: 
```
npm start
```

## Testando a API

Você pode utilizar as ferramentas:

* Postman
* Insomnia
* Thunder Client (plugin no vsCode) 

Exemplos de URLs: 
* Essa é a URL de teste padrão: http://localhost:8080/doctors
* Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:8080/doctors/5
* Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:8080/doctors/filter?ator=Smitt

Essa é a estrutura JSON para fazer o POST e o PUT:

```json
{
    "doctor": "Décimo terceira Doutor",
    "ator": "Jodie Whittaker",
    "imageSeason": "https://universowho.com/wp-content/uploads/2018/01/11%C2%AA-temporada-logo-300x300.png"
}
```