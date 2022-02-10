//Emmanuel Masambu and Murari Joshua

function fibonacci(n){
    
    if(n < 3)
    {
        return 1;  //fib series starts at 1
    }

    else
    {               
        return fibonacci(n-1) + fibonacci(n-2); //the previous term plus the term before previous term
    }
}
  
module.exports = fibonacci;