let n=100; //iterate fizzbuzz function untill n value;

function calcFizzBuzz(number)
{
    for (let i=0;i<number;i++)
    {
    if(i%3===0 && i%5!==0)
        console.log("Fizz");
    else if(i%3!==0 && i%5===0)
        console.log("Buzz");
    else if(i%3===0 && i%5===0)
        console.log("FizzBuzz");
    else console.log(i);
    }
}

calcFizzBuzz(n); 