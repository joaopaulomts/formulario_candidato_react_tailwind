# 📝 Sistema de Cadastro de Candidatos

> Uma aplicação React moderna para gerenciamento de candidatos com interface intuitiva e design responsivo.

![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple?style=for-the-badge&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modern-orange?style=for-the-badge&logo=css3)

## 🎯 Sobre o Projeto

Este é um sistema completo de cadastro de candidatos desenvolvido em React com Vite. A aplicação permite cadastrar candidatos com informações detalhadas como nome, email, telefone, área de atuação e experiência profissional.

### ✨ Características Principais

- 🎨 **Interface Moderna** - Design responsivo com gradientes e efeitos visuais
- 📱 **Mobile First** - Funciona perfeitamente em dispositivos móveis
- ⚡ **Performance Otimizada** - Desenvolvido com Vite para máxima velocidade
- 🔧 **Componentes Reutilizáveis** - Arquitetura modular e escalável
- ✅ **Validação de Formulários** - Campos obrigatórios e validação em tempo real
- 🎯 **UX Intuitiva** - Interface limpa e fácil de usar

## 🚀 Tecnologias Utilizadas

- **React 19.1.0** - Biblioteca JavaScript para interfaces
- **Vite 7.0.4** - Build tool e servidor de desenvolvimento
- **CSS3** - Estilização moderna com gradientes e animações
- **JavaScript ES6+** - Funcionalidades modernas do JavaScript

## 📁 Estrutura do Projeto

```
src/
├── assets/
│   └── placeholder.svg
├── components/
│   ├── CandidateCard.jsx      # Card de exibição do candidato
│   ├── CandidateForm.jsx      # Formulário de cadastro
│   ├── CandidateList.jsx      # Lista de candidatos
│   └── FormField.jsx          # Campo de formulário reutilizável
├── constants/
│   └── formOptions.js         # Opções de áreas e experiências
├── hooks/
│   └── useForm.js             # Hook customizado para formulários
├── App.jsx                    # Componente principal
├── main.jsx                   # Ponto de entrada
└── index.css                  # Estilos globais
```

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/formulario_candidato_react_cdn.git
cd formulario_candidato_react_cdn
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto**

```bash
npm run dev
```

4. **Acesse a aplicação**
   Abra seu navegador e acesse: `http://localhost:5173`

## 📋 Scripts Disponíveis

| Comando           | Descrição                                |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento     |
| `npm run build`   | Cria a versão de produção                |
| `npm run preview` | Visualiza a versão de produção           |
| `npm run lint`    | Executa o linter para verificar o código |

## 🎮 Como Usar

### Cadastrando um Candidato

1. **Preencha o formulário** com os dados do candidato:

   - Nome completo
   - Email
   - Telefone
   - Área de atuação
   - Anos de experiência
   - Observações (opcional)

2. **Clique em "Cadastrar Candidato"**

3. **Visualize o candidato** na lista ao lado

### Funcionalidades

- ✅ **Validação automática** de campos obrigatórios
- ✅ **Feedback visual** durante o preenchimento
- ✅ **Lista em tempo real** dos candidatos cadastrados
- ✅ **Interface responsiva** para todos os dispositivos

## 🎨 Áreas de Atuação Disponíveis

- Frontend Development
- Backend Development
- Full Stack Development
- Mobile Development
- DevOps
- Quality Assurance
- UI/UX Design
- Data Science
- AI/Machine Learning
- Outros

## 🔧 Componentes Principais

### CandidateForm

Formulário principal com validação e gerenciamento de estado.

### CandidateList

Exibe todos os candidatos cadastrados em cards organizados.

### FormField

Componente reutilizável para diferentes tipos de input (texto, email, select, textarea).

### useForm Hook

Hook customizado para gerenciar estado e validação de formulários.

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:

- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+)
- 💻 **Desktop** (1024px+)

## 🚀 Deploy

Para fazer o deploy da aplicação:

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

## 🙏 Agradecimentos

- React Team pela incrível biblioteca
- Vite Team pela ferramenta de build
- Comunidade open source

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!**
