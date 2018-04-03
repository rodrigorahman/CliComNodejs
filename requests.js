module.exports = {
  buscaRepositorioDo
}

const request = require('request-promise')

async function buscaRepositorioDo(user) {
  const options = {
    uri: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }

  let repositories = await request(options);

  return repositories;
}