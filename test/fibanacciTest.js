/* eslint-disable no-undef */

//Emmanuel Masambu and Murari Joshua

const assert    = require("chai").assert;
const fibonacci = require("../fibonacci");

describe("Return the nth term n a fibonaci series", function(){   
    
    //First Test
    it("1st term in the fib series is 1", function(){
        assert.equal(fibonacci(1), 1);
    });
   
});