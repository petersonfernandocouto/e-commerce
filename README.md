
# E-commerce

Este projeto é um website de e-commerce focado na venda de roupas. Ele permite que os usuários façam login, naveguem por diversas peças de roupas, visualizem detalhes específicos de cada peça e finalizem suas compras através de uma interface intuitiva. O projeto foi desenvolvido para ser analisado pela escola onde estudo programação, bem como para ser avaliado por empresas interessadas em minhas habilidades de desenvolvimento web.


## Deploy

Para fazer o deploy desse projeto rode:
https://e-commerce-flax-six.vercel.app/




## Funcionalidades

- Tela de Login: Permite que os usuários entrem no sistema utilizando suas credenciais.

- Visualização de Peças de Roupas: Após o login, os usuários podem navegar por diversas peças de roupas disponíveis.

- Detalhes da Peça: Ao selecionar uma peça de roupa, os usuários são redirecionados para uma página que exibe detalhes da peça, incluindo valor, cor e tamanho.


- Opção de Pagamento: Nesta página, os usuários confirmam o valor da peça, inserem seu nome, escolhem a opção de entrega e a forma de pagamento.

- Confirmação da Compra: Após preencher todos os dados, os usuários finalizam a compra e uma mensagem de confirmação é exibida.


## Instalação

Instale my-project com npm:

- npm create vite@latest name-of-your-project -- --template react

- npm install

- npm install react-router-dom localforage match-sorter sort-by

(Rode o projeto com: npm run dev)

- npm add -D sass

- npm install react-icons --save

(o react-icons são icones que poderão ser visualizado no site: https://react-icons.github.io/react-icons/)


    
## Aprendizados

Construindo este projeto, aprendi a desenvolver uma API própria utilizando mock, o que me permitiu simular interações reais com o backend sem depender de um servidor completo. Também aprendi a guardar as informações selecionadas pelo cliente e transferi-las para outra rota, garantindo que os dados corretos fossem exibidos nas páginas subsequentes.

Além disso, enfrentei desafios como a gestão de estados entre diferentes componentes e a implementação de navegação dinâmica com React Router. Superar esses desafios me ajudou a melhorar minhas habilidades em desenvolvimento front-end e a entender melhor como criar aplicações web interativas e responsivas.


## Melhorias

Em breve, planejo adicionar uma nova funcionalidade na página de pagamento: um input onde o usuário poderá inserir o valor que ele irá pagar. Se o valor inserido for maior que o preço do produto, o usuário poderá visualizar o troco. Caso o valor inserido seja menor que o necessário, a compra será cancelada e o usuário será notificado. Esta melhoria visa oferecer uma experiência de pagamento mais completa e informativa para os usuários. Estou aberto a Feedback.


## Licença

[MIT](https://choosealicense.com/licenses/mit/)
