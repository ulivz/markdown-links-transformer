# markdown-links-transformer

[![NPM version](https://img.shields.io/npm/v/markdown-links-transformer.svg?style=flat)](https://npmjs.com/package/markdown-links-transformer) [![NPM downloads](https://img.shields.io/npm/dm/markdown-links-transformer.svg?style=flat)](https://npmjs.com/package/markdown-links-transformer) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/ULIVZ/donate) [![Greenkeeper badge](https://badges.greenkeeper.io/ulivz/markdown-links-transformer.svg)](https://greenkeeper.io/)

## Install

```bash
npm i markdown-links-transformer
```

## Usage

```js
const markdownLinksTransformer = require('markdown-links-transformer')
```


## API

- `markdownLinksTransformer.inlineToSeperate(input)`

  - input:
  
  ```markdown
  - **koa** | [Github](https://github.com/koajs/koa)  · [Documentation](http://koajs.com/)  · [文档](http://www.koacn.com/)
  ```
  
  - output:
  
  ```markdown
  - **koa** | [Github][1]  · [Documentation][2]  · [文档][3]
    
  [1]: https://github.com/koajs/koa
  [2]: http://koajs.com/
  [3]: http://www.koacn.com/
  ```

- `markdownLinksTransformer.inlineToSeperate(input)`

  - input: 
  
  ```markdown
  - **koa** | [Github][1]  · [Documentation][2]  · [文档][3]
  
  [1]: https://github.com/koajs/koa
  [2]: http://koajs.com/
  [3]: http://www.koacn.com/
  ```
  
  - output:
  
  ```markdown
  - **koa** | [Github](https://github.com/koajs/koa)  · [Documentation](http://koajs.com/)  · [文档](http://www.koacn.com/)
  ```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**markdown-links-transformer** © [ulivz](https://github.com/ULIVZ), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by ulivz with help from contributors ([list](https://github.com/ULIVZ/markdown-links-transformer/contributors)).

> [github.com/ulivz](https://github.com/ulivz) · GitHub [@ulivz](https://github.com/ULIVZ)
