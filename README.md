# bx

Small tool to help create `Buffers` in `NodeJS`

## Install

```
yarn add @hertzg/bx
npm i --save @hertzg/bx
```

## Behavior

Package provides `bx` method thar accepts a string containing `hex` encoded buffer. The string will be stripped of
any non hexadecimal symbols (eg: `[^0-9-a-f]`) and if the resulting string has even length then it's used as a value
for `Buffer.from(value, 'hex')` otherwise throws a `TypeError`.

## Example

Typescript

```typescript
import { bx } from '@hertzg/bx';

const HEADER = bx('00 ff 00 ff'); // <Buffer 00 ff 00 ff>
const SYNC1 = bx('00ff00ff_b4_01020304'); // <Buffer 00 ff 00 ff b4 01 02 03 04>
const ZEROLENGTH = bx(''); // <Buffer >

const WRONGHEX = bx('z ff 00 00'); // throws
const MISSZERO = bx('f2-00_0_00'); // throws
const SPACES = bx('          '); // throws
```

More examples can be seen in [**tests**](https://github.com/hertzg/node-bx/blob/master/src/__tests__/index.spec.ts)
