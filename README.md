*Reviews App*

Uma aplicação de reviews completa, criada com Vue.js no frontend, Node.js no backend e PostgreSQL para o banco de dados. O projeto utiliza DDD (Domain-Driven Design) e Event Sourcing para uma estrutura de software sólida e organizada, além de seguir a metodologia TDD (Test-Driven Development).

Tecnologias:

Frontend: Vue.js;
Backend: Node.js (Express);
Banco de Dados: PostgreSQL;
Arquitetura: DDD e Event Sourcing;
Metodologia de Desenvolvimento: TDD;

Funcionalidades:

Criar, editar e visualizar reviews de estabelecimentos.
Persistência de eventos no banco de dados, permitindo reconstrução de estado através de Event Sourcing.
Interface moderna e intuitiva para interação do usuário.

Pré-requisitos:

Certifique-se de ter os seguintes softwares instalados.

Docker e Docker Compose
Node.js (versão 14 ou superior)

Configuração e Inicialização:

Para iniciar o projeto, siga as etapas abaixo.

Clone o repositório:
git clone https://github.com/oliver20000/ReviewsApp.git
cd reviews-test

Configuração do Docker:
Na raiz do projeto execute "docker-compose up --build"


Configuração Manual (sem Docker):

Backend:
Instale as dependências "npm install".
Configure as variáveis de ambiente (.env) com as informações do banco de dados "npm run migrate".
Inicie o servidor "npm run start-dev".

Frontend:

Entre na pasta do Frontend "cd frontend".
Instale as dependências "npm install".
Inicie o frontend "npm run serve".

Acessando a aplicação:
Frontend: Acesse o frontend em http://localhost:8080.
Backend: Acesse o backend em http://localhost:3000.

Testes:
Na raiz do projeto execute "npm test".


Pronto! Agora você tem uma aplicação de reviews completa rodando 🚀.
Se precisar de mais informações, confira a documentação ou entre em contato.
