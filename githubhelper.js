#!/usr/bin/env node

const request = require('./requests');
const comandos = require('commander');

comandos
  .version('1.0.0')
  .description('Buscar repositorios do Github');


comandos
  .command('Ola <name>')
  .alias('o')
  .description('Testando')
  .action(name => ola(name));

comandos
  .command('repo <user>')
  .alias('r')
  .description('Buscar repositorios de um usuário')
  .action(async(user) => {
    try {
      let repos = await request.buscaRepositorioDo('rodrigorahman')
      repos.forEach(repo => console.info(repo.name));
    } catch (error) {
      console.error(error);
    }
  })

comandos.parse(process.argv);

function ola(name) {
  console.info(`Ola ${name}`);
}