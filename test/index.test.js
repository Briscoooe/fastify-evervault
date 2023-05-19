'use strict'

const t = require('tap')
const { test } = t
const Fastify = require('fastify')
const fastifyEvervault = require('..')

test('fastify-evervault namespace should be exposed', t => {
  t.plan(2)
  const fastify = Fastify()
  fastify.register(fastifyEvervault, {
    apiKey: 'test'
  })
  fastify.ready(err => {
    t.error(err)
    t.ok(fastify.evervault)
  })
})

test('fastify-evervault can encrypt', t => {
  t.plan(3)
  const fastify = Fastify()
  fastify.register(fastifyEvervault, {
    apiKey: process.env.EVERVAULT_TEST_API_KEY
  })
  fastify.ready(err => {
    t.error(err)
    t.ok(fastify.evervault)
    const encrypted = fastify.evervault.encrypt('test')
    t.ok(encrypted)
  })
})

test('fastify-evervault does not initialize without an API key', t => {
  t.plan(2)
  const fastify = Fastify()
  fastify.register(fastifyEvervault, {
    apiKey: ''
  })
  fastify.ready(err => {
    t.ok(err instanceof Error, 'should throw an error')
    t.equal(err.message, 'apiKey is required', 'should throw an "apiKey is required" error')
    t.end()
  })
})
