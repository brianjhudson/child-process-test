import test from 'ava'
import request from 'supertest' 
import app from './index'

// test('slow-query', async t => {
//   console.log('Slow Query sent')
//   console.time('slow-query')
//   const res = await request(app).get('/slow-query')
//   console.timeEnd('slow-query')
//   t.is(res.status, 200)
// })
test('slow-query', async t => {
  console.log('Slow Query sent to child process')
  console.time('slow-query-with-child')
  const res = await request(app).get('/slow-query-with-child')
  console.timeEnd('slow-query-with-child')
  t.is(res.status, 200)
})
test('fast-query', async t => {
  console.log('Fast query sent')
  console.time('fast-query')
  const res = await request(app).get('/fast-query')
  console.timeEnd('fast-query')
  t.is(res.status, 200)
})


