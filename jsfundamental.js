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

function moreArrayMultiply(num, array, fun){
    return (fun(num,array))
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

// Now contrast that with the functions that we encountered in Problem 8. You can see that while in 8 the entire program stops to wait for the loop, in 9 the program continues on, and other code would have been run before finally logging that it finally fully finished for real, it had escaped from the timeout, called the callback, and executed the callback code. 
// Turn your mind to the functions in the earlier callback practice that we built earlier. An example of these would be: 
// funcObj.mystery(function(x) {
// 	console.log(x)
// })
// or 
// funcObj.complexReturn('fish', 'dog', function(x) {
//     console.log("The 'complexReturn' callback")
//     console.log(x)
// })

// These are function calls, and one of the arguments is a callback that we define. You can find the source code in the node_modules, but it’s not really relevant how these functions are produced, and more that you understand how to use them. They do some work, and then hand over control to us to fiddle at the edges. In the second instance we set some of the other arguments too, and then they are used in some way - much like we provided the multiplication calculation to our callback in Problem 1. Our outer function there was trivial, but the functioning is the much same - except for being synchronous. That is, the outer function does some work and then passes that work to the callback as an argument. We then had an argument in our callback created by this outer function being run (which is synchronous code - although some of the examples in the practice file are asynchronous), and we then acted on this in the callback. 
// In problem 9 the code continues after hitting the asynchronous function, although in that case we didn't pass anything except the callback as an argument.
// How this actually works behind the scenes is a little complex, but this is a brilliant talk that gives you the flavour of this in a digestible form --
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// (It's ok if you don't follow this fully - just get the general idea and you'll be ahead of most junior JS coders.)

// This is a function call, and within it is a callback that we define. We don't know how Express provides what it does, but it does some bulk work with some http requests and dealing with XHR, and then hands over control to us to fiddle at the edges. We set the path, and then Express provides us the request and response objects - much like we provided the multiplication calculation to our callback in Problem 1. Our outer function there was trivial, but the functioning is the much same - except for being synchronous. That is, the outer function does some work and then passes that work to the callback as an argument. We then had an argument in our callback created by this outer function being run (which is synchronous code, unlike Express), and we then acted on this in the callback. In the case of Express they let you set the path when you call their function, they do some asynchronous magic behind the scenes and then they hand over control of the request and response objects to your callback function, which you then customise and deal with (within the Express spec functionality), while also doing any other logic you require. 
// In this instance (Express) it is important to note that the functionality within the main function (out of sight) is asynchronous - Express waits for input from the user and when it receives this input it runs the relevant function and does what it needs to do, but while this is happening it hands back control to the rest of the code (meaning that a user can still use the page while the function is doing its work). When their function completes it produces its req and res, and then after that our callback is run and we deal with the req and res objects as required. 
// This is a bit like in Problem 6 where the code continues after hitting the asynchronous function, although in that case we didn't pass anything to the callback as an argument.
// How this actually works in the browser is a little complex, but this is a brilliant talk that gives you the flavour of this in a digestible form --
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// (It's ok if you don't follow this fully - just get the general idea and you'll be ahead of most junior JS coders.)

// Problem 10 (promises)
// Again this is a bit more a code-along. Here I want you to simply write out the following code, and try to make sense of each line as you go through it. I would recommend adding your own comments to the code. 

// console.log("Problem 10”)
// console.time('problem-10’)

// const promiseLooper = function(cb) {
//     for(i=0; i<1000000000; i++){
//     }
//     console.log("In promise looper")
//     console.log("After promise loop!")
//     return cb()
// }

// promiseLooper(() => {
//     console.timeEnd('problem-10’)
//     return console.log("Finished 10”)
// })

// console.log("After promise looper")
// console.log("==================")

// Problem 11 (promises)

// console.log("Problem 11”)
// console.time('problem-11’)

// const promiseTimeouter = (cb) => {
//     setTimeout(function() {
//         console.log('After promise setTimeout!')
//         return cb()
//     }, 6000)
//     console.log('In promise timeouter')
// }

// console.log("After promise timeouter")

// promiseTimeouter(() => {
//     console.timeEnd('problem-11’)
//     return console.log("Finished 11”)
// })

// Now it’s your turn. In the next few problems we are going to use promises - because we can. It won’t make these functions asynchronous, and it’s not really necessary. But it’s a pattern to become familiar with, and very much worth learning. 
// You will need to follow the same pattern from the above questions. You need to define your function and have it return a promise. Then you will call that function and get at the data. I would like you to play with it a bit. Try returning different things from the resolve and reject. Tinker with the code.

// *Problem 12*
// Write a function testNum that takes a number as an argument and returns a promise that resolves if the argument is greater than 10, and errors if it is less than 10.

// *Problem 13*
//   Write a function, makeAllCaps(), that takes in an array of words and capitalizes them. If the 
//   array contains anything but strings, it should throw an error.

// *Problem 14*
// Write a function that takes an array of numbers, and returns a promise. If the array contains any strings the function should throw an error, otherwise it should resolve with the largest number in the array.

// The preceding functions were synchronous - they will run in the same way as the Ruby we have been writing does. Each line of code completes before passing on to the next line. As we have discussed, some functions in JS are asynchronous by default. setTimeout is one that we have seen. File operations can be. But we are studying web programming, and so the most common one that we will run into is fetch. It’s asynchronous for good reason: we don’t want it to block the running of the code while it reaches out over the internet to get some data. We don’t have to deal with adding the promise to the way fetch runs - a promise is returned from fetch as a default. You can then use the pattern that we have been practicing to get at the data that is returned. 

// *Problem 15*
// I want you to use this URL: 'https://randomuser.me/api/?results=10'
// Use three .then functions in your answer and console.log out a last name in your final then

// *Problem 16*
// Find a weather API. Use fetch, and console.log out the maximum and minimum for the week ahead.

// *Problem 17*
// Find two interesting APIs and use fetch to grab some data. There will be a small prize for the most interesting data found. 