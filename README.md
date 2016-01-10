# Classnames

造轮子系列 -- 一个简单的 className 处理工具，参考 Jed Watson 的 https://github.com/JedWatson/classnames

[![Linux Build][travis-image]][travis-url] [![Windows Build][appveyor-image]][appveyor-url] [![Coverage Status][coveralls-image]][coveralls-url]

## 安装

```sh
npm install 52cik/classnames
```

## 使用

```js
var classNames = require('classnames');
classNames('foo', 'bar'); // => 'foo bar'
```

详情请参考 https://github.com/JedWatson/classnames


[travis-url]: https://travis-ci.org/52cik/classnames
[travis-image]: https://img.shields.io/travis/52cik/classnames/master.svg?label=linux

[appveyor-url]: https://ci.appveyor.com/project/52cik/classnames
[appveyor-image]: https://img.shields.io/appveyor/ci/52cik/classnames/master.svg?label=windows

[coveralls-url]:https://coveralls.io/github/52cik/classnames?branch=master
[coveralls-image]:https://coveralls.io/repos/52cik/classnames/badge.svg?branch=master&service=github
