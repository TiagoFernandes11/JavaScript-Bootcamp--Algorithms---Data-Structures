function fizzBuzz(number){
    for(let num = 1; num <= number; num++){
        if(num % 5 === 0 && num % 3 === 0 && num !== 0){
            console.log("fizzbuzz")
            continue
        }
        if(num % 3 === 0 && num !== 0){
            console.log("fizz")
            continue
        }
        if(num % 5 === 0 && num !== 0){
            console.log("buzz")
            continue
        }
        else{
            console.log(num)
        }
    }
}

fizzBuzz(15)