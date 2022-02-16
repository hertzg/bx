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

**Warning:** This package is native [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and no
longer provides a CommonJS export. If your project uses CommonJS, you'll have
to [convert to ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) or use
the [dynamic `import()`](https://v8.dev/features/dynamic-import) function.

## Behavior

Package provides `bx` and `bxx` method thar accepts a string containing `hex` encoded buffer. The string will be
stripped of any non-hexadecimal symbols (eg: `[^0-9-a-f]`) and if the resulting string has even length then it's used as
a value for `Buffer.from(value, 'hex')` with `bxx` and as `new Uint8Array(value).buffer` with `bx` or otherwise throws
a `TypeError`.

## Example

Typescript

```typescript
import { bx } from '@hertzg/bx';

const HEADER = bx('00 ff 00 ff'); // ArrayBuffer { [Uint8Contents]: <00 ff 00 ff>, byteLength: 4 }
const SYNC1 = bx('00ff00ff_b4_01020304'); // ArrayBuffer { [Uint8Contents]: <00 ff 00 ff b4 01 02 03 04>, byteLength: 9 }
const ZEROLENGTH = bx(''); // ArrayBuffer { [Uint8Contents]: <>, byteLength: 0 }

const WRONGHEX = bx('z ff 00 00'); // throws
const MISSZERO = bx('f2-00_0_00'); // throws
const SPACES = bx('          '); // throws
```

If you want to get `Buffer` instead of `ArrayBuffer` just replace `bx` calls with `bxx`

```typescript
import { bxx } from '@hertzg/bx';

const HEADER = bxx('00 ff 00 ff'); // <Buffer 00 ff 00 ff>
const SYNC1 = bxx('00ff00ff_b4_01020304'); // <Buffer 00 ff 00 ff b4 01 02 03 04>
const ZEROLENGTH = bxx(''); // <Buffer >

const WRONGHEX = bxx('z ff 00 00'); // throws
const MISSZERO = bxx('f2-00_0_00'); // throws
const SPACES = bxx('          '); // throws
```

More examples can be seen in [**tests**](https://github.com/hertzg/node-bx/blob/master/src/__tests__/index.spec.ts)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://hertz.gg"><img src="https://avatars3.githubusercontent.com/u/1886698?v=4" width="100px;" alt=""/><br /><sub><b>George Hertz</b></sub></a><br /><a href="#maintenance-hertzg" title="Maintenance">🚧</a> <a href="#infra-hertzg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/hertzg/node-bx/commits?author=hertzg" title="Tests">⚠️</a> <a href="https://github.com/hertzg/node-bx/commits?author=hertzg" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
