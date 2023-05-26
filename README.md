# fastify-evervault
___

![CI](https://github.com/Briscoooe/fastify-evervault/actions/workflows/ci.yml/badge.svg)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://standardjs.com/)
![npm](https://img.shields.io/npm/v/fastify-evervault)

Fastify plugin for [Evervault](https://evervault.com/) for sharing the same Evervault client across your Fastify application.

## Install
```
npm i fastify-evervault
```

## Usage
Add it to your project with `register`, passing in your Evervault API key.
```js
const fastify = require('fastify')()

fastify.register(require('fastify-evervault'), {
  apiKey: 'ev:key:...',
})

fastify.get('/', async (request, reply) => {
  const { evervault } = fastify
  const encrypted = await evervault.encrypt('Hello World!')
  return encrypted
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
})
```

## Documentation
See the [Evervault Node.js SDK](https://docs.evervault.com/sdks/nodejs) for more information on the Evervault client.

## License
MIT