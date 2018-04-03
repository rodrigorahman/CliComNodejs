# Criando um link simbolico no node js 

Esse link simbolico serve para adicionar a biblioteca no root do usuário e disponibilizar um executavel de qualquer lugar.

```
npm link
```

## Para remover o link 

```
npm unlink
```


## Para o correto funcionamento

Você precisa adicionar algumas informações no package.json para o correto funcionamento.

```json
 "preferGlobal": true,
  "bin": {
    "command-line-github-repos": "./githubhelper.js"
  }
```


## Arquivo completo

```json
{
  "name": "comand-line-github-repos",
  "version": "1.0.0",
  "description": "",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/rodrigorahman/CliComNodejs.git"
  },
  "author": "Rodrigo Rahman",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/rodrigorahman/CliComNodejs/issues"
  },
  "homepage": "https://github.com/rodrigorahman/CliComNodejs#readme",
  "dependencies": {
    "commander": "^2.15.1",
    "request": "^2.85.0",
    "request-promise": "^4.2.2"
  },
  "preferGlobal": true,
  "bin": {
    "comand-line-github-repos": "./githubhelper.js",
    "docker-helper": "./dockerhelp.js"
  }
}
```