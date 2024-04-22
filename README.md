# Projeto Lingo

Lingo é um projeto que cria uma plataforma de aprendizado de idiomas de forma gameficada semelhante o Duolingo. O objetivo do projeto é construir um sistema robusto e escalável para múltiplas linguagens, controle de usuários e pontuações. Além disso, é uma oportunidade de aplicar o Project Based Learning (PBL), ou seja me atualizar e aprofundar meus conhecimentos na integrações de tecnologias com um desenvolvimento de um projeto open-source. Claro que isso foi possível pelo trabalho espetacular do Antonio do Code With Antonio ([Link para o curso](https://youtu.be/dP75Khfy4s4?si=xvfTOMjBMeCwl5gL)) que criou esse curso maravilhoso gratuito. Recomendadissímo os cursos dele.

Então mesmo que seja algo pronto e passo a passo, tem seu valor aprender com projetos reais, visto que você precisa acompanhar o racíocionio de outra pessoa para chegar no objetivo, é um curso longo, vai aparecer erros que não apaprece no código dele e sempre deixamos passar algo. Além disso, você aprende novas sacadas e soluções para problemas cotidianos na vida de um Dev.

## Tecnologias utilizadas
- 🌐 Next.js 14 & server actions, 
- 🗣 AI Voices usando Elevenlabs AI
- 🎨 Componentes da aplicação utilizando Shadcn UI
- 🎭 Desenho dos personagens utilizando KenneyNL
- 🔐 Autenticação e controle dos usuários utilizando Clerk
- 💳 Controle de pagamentos utilizando Stripe
- 💾  Banco de dados PostgresDB usando NeonDB
- 🌧 ORM utilizando DrizzleORM
- 📊 Admin dashboard utilizando React Admin
- 🚀 Deploy na Vercel
- 📱 Responsividade para dispositivos mobile
- 🐼 Gerenciamento de estados utilizando Zustend

## Features do Sistema
- Sistema personalizado para cada usuário
- 🔊 Efeitos Sonoros
- ❤️ Sistema de tentativas com os corações
- 🌟 Sistema de Pontos / XP 
- 🔄 Práticas de lições antigas para ganhar corações
- 🏆 Tabela de lideres 
- 🗺 Desafios valendo pontos
- 🛍 Sistema de shop para obter mais corações ou Assinar o plano mensal


## Configurações iniciais 
### Cloning the repository

```shell
git clone https://github.com/jrneliodias/lingo-project.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
DATABASE_URL="postgresql://..."
STRIPE_API_KEY=""
NEXT_PUBLIC_APP_URL="http://localhost:3000"
STRIPE_WEBHOOK_SECRET=""
```

### Setup Drizzle ORM

```shell
npm run db:push

```

### Seed the app

```shell
npm run db:seed

```

ou

```shell
npm run db:prod

```

### Start the app

```shell
npm run dev
```
