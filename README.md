# ml-polynomial-kernel

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![David deps][david-image]][david-url]
  [![npm download][download-image]][download-url]

The polynomial kernel

## Installation

`$ npm install ml-polynomial-kernel`

## Usage

### new PolynomialKernel(options)

__Options__

* `degree` - degree of the polynomial (default: 1).
* `constant` - polynomial constant (default: 1).
* `scale` - polynomial scale (default: 1).

### kernel.compute(x, y)

Returns the dot product between `x` and `y` in feature space.

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-polynomial-kernel.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ml-polynomial-kernel
[travis-image]: https://img.shields.io/travis/mljs/polynomial-kernel/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/mljs/polynomial-kernel
[david-image]: https://img.shields.io/david/mljs/polynomial-kernel.svg?style=flat-square
[david-url]: https://david-dm.org/mljs/polynomial-kernel
[download-image]: https://img.shields.io/npm/dm/ml-polynomial-kernel.svg?style=flat-square
[download-url]: https://npmjs.org/package/ml-polynomial-kernel
