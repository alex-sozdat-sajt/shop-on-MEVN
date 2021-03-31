[![Travis Build
Status](https://img.shields.io/travis/indatawetrust/randa.svg)](https://travis-ci.org/indatawetrust/randa)

# randa
Randomness for arrays

```
npm i randa -S
```

```js
import r from 'randa'

r.int(2, 10, 8)
// [ 8, 5, 6, 9, 3, 7, 10, 1 ]

r.float(5, 14, 9)
// [ 12, 1.22, 2.11, 14.83, 10.8, 5.13, 6.5, 9.31, 12.25 ]

r.regex(/[a-z]{2,2}/, 2, 9)
// [ 'ml', 'za', 'sb', 'wl', 'si', 'pf', 'ie', 'et', 'pi' ]
```

