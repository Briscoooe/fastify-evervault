const Evervault = require('@evervault/sdk')
const fp = require('fastify-plugin')

/**
 * @param {import('fastify').FastifyInstance} fastify fastify instance
 * @param {{ apiKey: string }} options fastify plugin options
 * @param {import('fastify').DoneFuncWithErrOrRes} done fastify done function
 * */
function evervault (fastify, options, done) {
  const { apiKey } = options
  if (!apiKey) {
    return done(new Error('apiKey is required'))
  }
  const evervault = new Evervault(apiKey)
  fastify.decorate('evervault', evervault)
  done()
}

module.exports = fp(evervault, {
  fastify: '>=4.x',
  name: 'fastify-evervault'
})
