// Problem 1*
// Write a function called arrayMultiply that takes two numbers, and a callback function as arguments. Return the callback function with the two numbers (those arguments) multiplied together as its argument.
// Define an array outside of this function.
// Because JS scope works differently to Ruby you will be able to use that array within the following function without passing it through as an argument. But please note that it will not be functional programming as such - but in this case if you use map a new array will be created (rather than the original being mutated).
// Define a variable and in it store the result of arrayMultiply when called with 2, 2, and also an anonymous callback function that takes the result as an argument, and then multiplies each element in the array by that result. When you console.log this variable to screen it should produce [ 4, 8, 12 ].
function arrayMultiply(num1,num2,cb){
    res = num1 * num2
    return cb (res)
}

const arr = [1, 2, 3]
const newArr = arrayMultiply(2, 2, function(res) {
    return arr.map(function(item){
        return item * res
    })
})
console.log(newArr)

console.log(calculateResult)

// *// Problem 2*
// // Write a function called arrayMultiplyAgain that takes a number and an array as arguments,
// //and returns each element in the array multiplied by the number.

// // Now write a second function called moreArrayMultiply that takes
// // three arguments: a number, an array, and a function: (eg. num, arr, funct).

// // Have this function return the result of number and array when called as arguments to arrayMultiplyAgain which you passed in as an argument.

// // Define a variable and in it store the result of the second function when called with 2, [1,2,3], and the first function you created. When you console.log this variable to screen it should produce [ 2, 4, 6 ].
function arrayMultiplyAgain(num,array){
    const newArr = []
    let i = 0
    const len = arr.length
    while(i<len){
        newArr.push(array[i]*num)
        i++
    }
    return newArr
}

function moreArrayMultiply(num, array, funct){
    return (funct(num,array))
}

const result = moreArrayMultiply(2, [1,2,3], arrayMultiplyAgain)
console.log(result)

// *// Problem 3*
// // Implement your own version of .forEach
// // Define a function that takes a callback and provides the same functionality as the .forEach function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.
function myForeach(arr,fn){
    let i = 0
    const len = arr.length
    while (i<len){
        fn(arr[i])
    i++
    }
}

myArr = [1,2,3]
myForeach(myArr, function(x){
    console.log(x*3)
})

// *// Problem 4*
// // Implement your own version of .map
// // Define a function that takes a callback and provides the same functionality as the .map function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

function myMap(arr, fn){
    const newArr = []
    let i = 0
    const len = arr.length
    while (i < len){
        newArr.push(fn(arr[i]))
        i++
    }
    return newArr
}

originalArray = [1,2,3]

console.log(myMap(originalArray, function(x){
    return x*5
}))

// *// Problem 5*
// // Implement your own version of .filter
// // Define a function that takes a callback and provides the same functionality as the .filter function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

function dotFunction(array, value, fn) {
  const newArr1 = [];
  const newArr2 = [];
  let i = 0;
  const len = array.length;
  while (i < len) {
    if (value == array[i]) {
      newArr1.push(fn(array[i]));
    } else {
      newArr2.push(fn(array[i]));
    }
    i++;
  }
  if (newArr1.includes(value)) {
    return newArr1;
  } else {
    return false;
  }
}

console.log(
  dotFunction([2, 6, 7], 2, function(x) {
    return x * 1;
  })
);

// *// Problem 6*
// // Implement your own version of .reduce
// // Define a function that takes a callback and provides the same functionality as the .reduce function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.
function dotReduce(array, fn) {
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += fn(array[i]);
  }
  return sum;
}

arr1 = [1, 2, 3];

// console.log(dotReduce(arr1))

console.log(
  dotReduce(arr1, function(x) {
    return x * 3;
  })
);

// *// Problem 7*
// // Define an object that has two keys, one called 'buy' and the other called 'sell'.
// // These will have the value of an anonymous function that takes no arguments, and that simply returns a string.
// // The function associated with 'buy' will return "I want to buy!!", and the other returns "I want to get out!!"
const functionObject = {
  buy: function() {
    return "I want to buy!!";
  },
  sell: function() {
    return "I want to get out!!";
  }
};

console.log(functionObject.buy());

// // Define a function called originalFunction that takes two arguments, a number and an object,
// // which you could call 'functionObject'.

// // If the number is divisible by 2 then the function returns the functionObject's 'buy' function,
// // and otherwise returns the 'sell' function.

// // Now call this function with a number and the object that you created as arguments, and store the result in a constant.
// // Now work out how to get the string to display to the screen.
function originalFunction(number, object) {
  if (number % 2 == 0) {
    return object.buy();
  } else {
    return object.sell();
  }
}

const result = originalFunction(3, functionObject);

console.log(result);

// *// Problem 8 (sychronicity)*
// // This will show the way JS functions when acting synchronously.
// // Here we are doing something a bit different. I will provide the code, and it will be up to you to investigate it. Tinker around with it, and look at the output until you understand it. If you don't, come and ask me for help.

console.log("Problem 8”)
console.time('problem-8’)

const looper = (cb) => {
   console.time('looper')
   for(i=0; i<1000000000; i++){
    x = Math.random()
   }
   console.log("In looper")
   console.log("After loop!")
   console.timeEnd('looper')
   console.log("..now passing through to the cb..")
   return cb()
}

looper(() => {
   console.timeEnd('problem-8’)
   return console.log("Finished 8 in the callback")
})

console.log("After looper")
console.log("..now heading off to other parts of the program!")
console.log("==================")

// *// Problem 9 (asychronicity)*
// // Now we are going to have the same situation as the code in the previous question - except this time there is an asynchronous function: setTimout. Carefully observe the difference in behaviour by comparing the output with the previous example.

console.log("Problem 9”)
console.time('problem-9’)

const timeouter = (cb) => {
   console.time('timeouter')
   setTimeout(function() {
       console.log('After setTimeout!')
       console.log("..now passing through to the cb..")
       return cb()
   }, 6000)
   console.log('In timeouter')
   console.timeEnd('timeouter')
}

timeouter(() => {
   console.timeEnd('problem-9’)
   return console.log("Finished 9 in the callback!")
})

console.log("After timeouter")
console.log("..now heading off to other parts of the program!")
console.log("==================")

// // Now contrast that with the functions that we encountered in Problem 8. You can see that while in 9 the entire program stops to wait for the loop, in 9 the program continues on, and other code would have been run before finally logging that it finally fully finished for real, it had escaped from the timeout, called the callback, and executed the callback code.
