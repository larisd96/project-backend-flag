# Project-backend-flag

# Aplicação Fullstack Ihome

## Funcionamento da Aplicação

A aplicação de listas de compras permite aos utilizadores criar e gerir as suas listas de compras de forma eficiente. Utilizando tecnologias como Node.js, React e MySQL, juntamente com Docker Compose para facilitar o ambiente de desenvolvimento, a aplicação oferece um sistema de login seguro com autenticação JWT. O CRUD completo permite aos utilizadores criar, visualizar, atualizar e excluir listas de compras, bem como adicionar e remover itens das listas. Além disso, os utilizadores podem marcar itens como concluídos ao fazerem compras.

### Configuração do .env 

- MYSQL_DATABASE=dbihome
- MYSQL_USER=user
- MYSQL_PASSWORD= password
- MYSQL_ROOT_PASSWORD= password
- MYSQL_PORT=3306

## Instruções para Executar a Aplicação

Para executar a aplicação, siga estes passos:

1. Certifique-se de ter o Docker, o Docker Compose e Node.js instalados no seu computador.
2. Clone o repositório do projeto a partir do GitHub.
3. Navegue até o diretório /backend/docker do projeto e execute o comando `docker-compose up` para iniciar os contentores Docker.
4. Para correr o frontend, navegue até o diretório /frontend  e corra: npm start
5. Para correr o backend, navegue, até o diretório backend e corra: npm run start
6. Abra o Insomnia ou qualquer outra ferramenta de teste de API para interagir com os endpoints da aplicação.
7. Acesse a aplicação no seu navegador, digitando o endereço localhost:3000 após a inicialização do frontend e backend.


## Funcionalidades Implementadas

- **Sistema de Login e Autenticação JWT:** Os utilizadores podem autenticar-se na aplicação para aceder às suas listas de compras.
- **CRUD Completo:** Os utilizadores podem criar, visualizar, atualizar e excluir as suas listas de compras.
- **Adição e Remoção de Itens:** Os utilizadores podem adicionar itens às suas listas de compras e removê-los conforme necessário.
- **Marcação de Itens Concluídos:** Os utilizadores podem marcar os itens como concluídos ao fazerem compras, facilitando o gerenciamento da lista.
