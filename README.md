# tqi_evolution_fullstack_2022

O projeto foi dividido em duas partes, uma relacionada ao backend e outra relacionada ao front-end.

BACKEND
O projeto do backend constitui em uma API com arquitetura Rest e foi realizado em java utilizando Spring Boot. Para os testes do projeto utilizei o JUnit, e o MockMVC e o Mockito para simular as instancias das classes.

Iniciei o projeto com um banco de dados local utilizando o MySQL, após utilizei o docker compose com MySQL para dar mais portabilidade ao projeto, visando que ele será avaliado pelo time da TQI. Para a conexão e persistencia do dados no banco eu extendi os meus repositórios com o JPA Repository.

Para a camada segurança utilizei o Spring Security e implementei somente uma camada básica de autenticação, porém deixando aberto para futuras atualizações, como a implementação de usuários e as permições que cada um deles poderão ter. O usuário padrão é o user e a senha é password.

Para a documentação do projeto utilizado Swagger.

O projeto possui cinco controllers ao todo, porém o Author controller e os dados relacionados ao mesmo foram comentados. A ideia inicial do projeto era que cada autor estivesse uma lista de livros vinculados a ele, e isso foi implementado na parte do backend!!!! Porém não consegui implementar essa mesma parte do frontend devido ao tempo, logo decidi comentar a controller e realizar a entrega sem ela, futuramente implementarei o a parte de cadastro dos autores no frontend e darei sequencia a ideia inicial do projeto.

As demais controller realizam o cadastro dos clientes, dos livros e vinculam as vendas e compras de livros a estes, deixando todos os dados registrados no banco, realizando um controle de estoque.

FRONTEND

O frontend foi feito com React, utilizei o routes para fazer as páginas, o axios para fazer o consumo da API, escolhi o axios principalmente pela facilidade de fazer a tratativa de erros, podendo pelos através de um try catch.

Fiz o projeto com o intuito dele ser usado como um controle de estoque para somente os funcionarios de uma livraria utilizarem, os clietne não teriam acesso ao mesmo. O frontend constitui em 5 páginas, COMPRA DE LIVROS, responsável por repor o estoque da livraria, VENDA DE LIVROS, responsável por pesquisar, montar um carrinho e vincular a venda a um cliente. CONSULTA DE LIVROS, utilizada para realizar uma consulta dos livros caso queiram saber o estoque e o preço unitário de cada um. CADASTRO DE LIVROS, para cadastrar as informações de cada livro, e o CADASTRO DE CLIENTE, para cadastrar os dados de cada cliente. Todas as opções ficam cadastradas no menu Hamburguer na direita do site.
