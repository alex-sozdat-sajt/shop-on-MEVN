import test from 'ava';
import r from './index';

test('#1', t => {

  let list = r.int(1,10)
  
  t.is(list.length, 10)
  t.deepEqual(list.sort((a,b) => a-b), [1,2,3,4,5,6,7,8,9,10])

})

test('#2', t => {
  
  let list = r.int(1,10,8)

  t.is(list.length, 8)

})

test('#3', t => {
  
  let list = r.float(1,100,80)

  t.is(list.length, 80)

})

test('#4', t => {
  
  let list = r.regex(/^a[a-z]{2,2}z$/, 4, 10)
  
  t.is(list.length, 10)

  for (let l of list) {
    t.deepEqual([l[0],l[3]], ['a','z'])
  }

})

test('#5', t => {
  
  t.is(r.shuffle([1,2,3,4,5,6], 4).length, 4)

})
