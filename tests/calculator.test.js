const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});

// Add your tests here
describe('Calculator Cosine Function', function() {
    const res = calculator.cosine(Math.PI);
    it('should return -1', function() {
        assert.strictEqual(res, -1);
    });
});

// Add your tests here
describe('Calculator Sine Function', function() {
    const res = calculator.sine(Math.PI);
    it('should return 0', function() {
        assert.strictEqual(res, 0);
    });
});