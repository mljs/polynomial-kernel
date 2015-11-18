'use strict';

var polynomialKernel = require('..');

describe('polynomial kernel', function () {
    // Test taken from https://github.com/accord-net/framework/blob/development/Unit%20Tests/Accord.Tests.Statistics/Kernels/PolynomialTest.cs
    it('like R\'s kernlab', function () {
        var data = [
            [5.1, 3.5, 1.4, 0.2],
            [5.0, 3.6, 1.4, 0.2],
            [4.9, 3.0, 1.4, 0.2],
            [5.8, 4.0, 1.2, 0.2],
            [4.7, 3.2, 1.3, 0.2]
        ];

        var expected = [
            [70240.51, 69426.53, 57022.17,  99252.85, 55002.06],
            [69426.53, 68719.48, 56181.89,  98099.75, 54353.80],
            [57022.17, 56181.89, 46694.89,  80286.11, 44701.08],
            [99252.85, 98099.75, 80286.11, 141583.69, 77635.89],
            [55002.06, 54353.80, 44701.08,  77635.89, 43095.88]
        ];

        var matrix = polynomialKernel(data, data, {degree: 3, constant: 1});
        Array.from(matrix).should.be.approximatelyDeep(expected, 1e-2);
    });
});
