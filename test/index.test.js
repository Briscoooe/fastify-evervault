'use strict'

const t = require('tap')
const { test } = t
const Fastify = require('fastify')
const fastifyEvervault = require('..')

test('fastify-evervault namespace should be exposed', async (t) => {
  t.plan(1)
  const fastify = Fastify()
  await fastify.register(fastifyEvervault, {
    apiKey: 'test'
  })
  await fastify.ready()
  t.ok(fastify.evervault)
})

test('fastify-evervault does not initialize without an API key', async (t) => {
  t.plan(2)
  const fastify = Fastify()
  try {
    await fastify.register(fastifyEvervault, {
      apiKey: ''
    })
    await fastify.ready()
  } catch (err) {
    t.ok(err instanceof Error, 'should throw an error')
    t.equal(err.message, 'apiKey is required', 'should throw an "apiKey is required" error')
  }
})
test('fastify-evervault does not initialize twice', async (t) => {
  t.plan(2)
  const fastify = Fastify()
  await fastify.register(fastifyEvervault, {
    apiKey: 'test'
  })
  try {
    await fastify.register(fastifyEvervault, {
      apiKey: 'test'
    })
  } catch (err) {
    t.ok(err instanceof Error, 'should throw an error')
    t.equal(err.message, 'fastify-evervault is already registered', 'should throw an "fastify-evervault is already registered" error')
  }
})

test('fastify-evervault can perform a simple encryption', async (t) => {
  t.plan(2)
  const fastify = Fastify()
  await fastify.register(fastifyEvervault, {
    apiKey: process.env.EVERVAULT_TEST_API_KEY
  })
  await fastify.ready()
  const unencryptedStr = 'test'
  const encryptedStr = fastify.evervault.encrypt(unencryptedStr)
  t.ok(encryptedStr)
  t.not(encryptedStr, unencryptedStr)
})
