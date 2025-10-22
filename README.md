# 🌅 Hora do Dia

Um projeto simples e interativo que exibe a hora atual e muda dinamicamente a imagem e cor de fundo baseado no período do dia (manhã, tarde ou noite).

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais de JavaScript:

- **Estruturas condicionais**: `if`, `else if` e `else`
- **Seletores DOM**: `querySelector()` para manipular elementos HTML
- **Objeto Date**: `new Date()`, `getHours()` e `getMinutes()` para trabalhar com datas e horas

## 🚀 Funcionalidades

- ⏰ Exibe a hora atual em tempo real
- 🌅 Muda a imagem de fundo baseado no período do dia:
  - **Manhã** (0h às 11h59): Imagem de manhã com fundo dourado
  - **Tarde** (12h às 18h): Imagem de tarde com fundo laranja
  - **Noite** (19h às 23h59): Imagem de noite com fundo roxo
- 🎨 Interface responsiva e moderna

## 📁 Estrutura do Projeto

```
horaDoDia/
├── index.html          # Estrutura HTML principal
├── script.js           # Lógica JavaScript
├── style.css           # Estilos CSS
├── assets/             # Imagens do projeto
│   ├── manha.jpg       # Imagem da manhã
│   ├── tarde.jpg       # Imagem da tarde
│   └── noite.jpg       # Imagem da noite
└── README.md           # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com CSS Grid
- **JavaScript**: Lógica de programação e manipulação do DOM

## 📖 Conceitos JavaScript Aplicados

### 1. Estruturas Condicionais
```javascript
if(hora >= 0 && hora < 12){
    // Código para manhã
} else if(hora >= 12 && hora <= 18){
    // Código para tarde
} else {
    // Código para noite
}
```

### 2. Seletores DOM
```javascript
var msg = document.querySelector('p#msg')
var img = document.querySelector('img#imagem')
var copyLink = document.querySelector('a#copyLink')
```

### 3. Objeto Date
```javascript
var now = new Date()
var hora = now.getHours()
var minuto = now.getMinutes()
```

## 🎨 Características Visuais

- **Sombras e bordas arredondadas** para um visual moderno
- **Cores dinâmicas** que mudam conforme o período do dia
- **Imagens circulares** com efeito visual atrativo

## 📝 Funcionamento

1. **Carregamento**: A função `Load()` é executada quando a página carrega
2. **Captura da hora**: O JavaScript obtém a hora atual usando `new Date()`
3. **Exibição**: A hora é exibida no elemento `<p>` com id "msg"
4. **Condicionais**: Baseado na hora, o sistema decide qual imagem e cor usar
5. **Aplicação**: A imagem e cor de fundo são alteradas dinamicamente

## 🎓 Conceitos de Aprendizado

Este projeto é ideal para iniciantes que querem aprender:

- Como usar estruturas condicionais em JavaScript
- Manipulação básica do DOM
- Trabalhar com datas e horas
- Criar interfaces dinâmicas e responsivas
- Organização de código em funções

## 👨‍💻 Autor

**Leonardo Bruchez** - [GitHub](https://github.com/LeonardoBruchez)

---

*Projeto desenvolvido para fins educacionais e prática de conceitos fundamentais de JavaScript.*
