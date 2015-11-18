'use strict';

const Matrix = require('ml-matrix');

module.exports = polynomialKernel;

const defaultOptions = {
    degree: 1,
    constant: 1,
    scale: 1
};

function polynomialKernel(inputs, landmarks, options) {
    options = Object.assign({}, defaultOptions, options);

    const kernel = new Matrix(inputs.length, landmarks.length);

    for (var i = 0; i < inputs.length; i++) {
        for (var j = 0; j < landmarks.length; j++) {
            kernel[i][j] = getKernel(inputs[i], landmarks[j], options.constant, options.degree, options.scale);
        }
    }

    return kernel;
}

function getKernel(x, y, constant, degree, scale) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i] * y[i];
    }
    return Math.pow(scale * sum + constant, degree);
}
