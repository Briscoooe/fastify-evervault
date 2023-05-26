const Evervault = require('@evervault/sdk')
const fp = require('fastify-plugin')

/**
 * @param {import('fastify').FastifyInstance} fastify fastify instance
 * @param {{ apiKey: string }} options fastify plugin options
 **/

async function fastifyEvervault (fastify, options) {
  const { apiKey } = options
  if (!apiKey) {
    throw Error('apiKey is required')
  }
  const evervault = new Evervault(apiKey)

  if (!fastify.evervault) {
    fastify.decorate('evervault', evervault)
  } else {
    throw Error('fastify-evervault is already registered')
  }
}

module.exports = fp(fastifyEvervault, {
  fastify: '>=4.x',
  name: 'fastify-evervault'
})
