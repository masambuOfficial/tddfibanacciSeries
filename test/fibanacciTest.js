/* eslint-disable no-undef */

//Emmanuel Masambu and Murari Joshua

const assert    = require("chai").assert;
const fibonacci = require("../app");

describe("Return the nth term n a fibonaci series", function(){   
    
    //First Test
    it("1st term in the fib series is 1", function(){
        assert.equal(fibonacci(1), 1);
    });
     //Second Test
     it("2nd term in the fib series is 1", function(){
        assert.equal(fibonacci(2), 1);
    });
    //Third Test
    it("3rd term in the fib series is 2", function(){
        assert.equal(fibonacci(3), 2);
    });
   //Fourth Test
   it("4th term in the fib series is 3", function(){
    assert.equal(fibonacci(4), 3);
});
//Fifth Test
it("5th term in the fib series is 5", function(){
    assert.equal(fibonacci(5), 5);
});
//Sixth Test
it("7th term in the fib series is 13", function(){
    assert.equal(fibonacci(7), 13);
});
//Seventh Test
it("10th term in the fib series is 55", function(){
    assert.equal(fibonacci(10), 55);
});

});