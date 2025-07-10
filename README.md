# NLW Agents

Projeto desenvolvido para estudos em um curso de TypeScript e React moderno, focado em práticas atuais de desenvolvimento web.

## 🚀 Tecnologias Utilizadas

### Core
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server

### UI & Styling
- **Tailwind CSS 4** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones modernos
- **Class Variance Authority** - Sistema de variantes para componentes

### State Management & Data Fetching
- **TanStack Query** - Gerenciamento de estado do servidor e cache

### Routing
- **React Router DOM** - Roteamento client-side

### Development Tools
- **Biome** - Linter e formatter (substituindo ESLint + Prettier)
- **Ultracite** - Configuração de linting otimizada

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/          # Componentes base reutilizáveis
├── pages/           # Páginas da aplicação
├── lib/             # Utilitários e configurações
├── app.tsx          # Componente principal
└── main.tsx         # Entry point
```

## 🛠️ Configuração e Setup

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd nlw-agents
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção

## 🎯 Padrões de Projeto

- **Componentes Funcionais** com hooks do React
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização
- **Radix UI** para componentes acessíveis
- **TanStack Query** para gerenciamento de estado
- **Path aliases** (`@/`) para imports mais limpos
- **Biome** para linting e formatação consistente

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais. 