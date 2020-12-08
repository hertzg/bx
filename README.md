# bx
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jakebolam.com"><img src="https://avatars2.githubusercontent.com/u/3534236?v=4" width="100px;" alt=""/><br /><sub><b>Jake Bolam</b></sub></a><br /><a href="#infra-jakebolam" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/hertzg/node-bx/commits?author=jakebolam" title="Tests">⚠️</a> <a href="https://github.com/hertzg/node-bx/commits?author=jakebolam" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!