# Guia de Instalação e Requisitos

**1. Clone o repositório:**

```bash
git clone https://github.com/annaclaratxm/ong-web-design
```

```bash
cd ong-web-design
```

**2. Verifique os requisitos necessários:**

- Node.js: versão maior ou igual à 18.0.0

```bash
node -v
```

- pnpm

```bash
pnpm -v
```

ou

```bash
npm install -g pnpm
```

**3. Instale as dependências necessárias:**

- Após instalar o `pnpm`, rode o comando abaixo para adicionar as dependências:

```bash
pnpm add "@radix-ui/react-slot" "@radix-ui/react-label" "@radix-ui/react-checkbox" "@radix-ui/react-switch" "@radix-ui/react-select" "@radix-ui/react-separator" "@radix-ui/react-avatar" tailwindcss tw-animate-css geist "@vercel/analytics"
```

**4. Adicione os componentes do Shadcn UI:**

- Rode o comando:

```bash
npx shadcn@latest add "https://v0.app/chat/b/b_fqXmIFNIGjG?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..YAdyopIrDqJunNLY.fQAlBR49u_PHqUM59wMUKBZLdUWP74CFOMq-55n1Mvfep909TqZR3LqfO3c.iW3JCHq6EDlTAqbegD3r-g"
```

**5. Rodando a aplicação em ambiente de desenvolvimento:**

- Execute o comando:

```bash
npm run dev
```
