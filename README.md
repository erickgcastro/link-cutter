# Projeto de Encurtador/Mascarador de Link

Este é um projeto de um encurtador/mascarador de link, onde os usuários podem encurtar URLs longas. Além disso, o sistema permite que os usuários bloqueiem o acesso ao link encurtado com uma senha.

## Executando o Projeto Localmente

Para executar o projeto localmente em sua máquina, siga as etapas abaixo:

### Pré-requisitos

- Ter o Docker em sua máquina antes de prosseguir.
- Certifique-se de ter a porta 3000 livre em sua máquina antes de prosseguir.

### Passos

1. Clone o repositório do projeto para o seu ambiente de desenvolvimento:

   ```bash
   git clone https://github.com/erickgcastro/link-cutter.git
   ```

2. Navegue até o diretório raiz do projeto;

3. Inicie o projeto usando o Docker Compose:

   ```bash
   docker compose up
   ```

   Isso iniciará os contêineres necessários para executar o frontend e o backend da plataforma;

4. Após o processo de inicialização ser concluído, você poderá acessar a plataforma em seu navegador web através do seguinte endereço:

   ```bash
   http://localhost:3000
   ```

## Funcionalidades

O encurtador/mascarador de link possui as seguintes funcionalidades:

- Encurtamento de URLs: Os usuários podem fornecer uma URL longa e receber um link encurtado correspondente.
- Bloqueio com senha: Os usuários podem definir uma senha para proteger o acesso ao link encurtado. Somente aqueles que conhecem a senha podem acessar o conteúdo.
- Redirecionamento: Quando um usuário acessa o link encurtado, ele é redirecionado para a URL original correspondente.
