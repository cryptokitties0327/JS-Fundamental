// JS Drills

// Sometimes you learn how to do things before you fully understand how they work. Coding is like this a lot. There are many things that I learned how to do well before I asked how they function. There are still plenty more things where that is the case for me. You merely push back that barrier slowly, but the unknown remains. In that vein, these are exercises that are designed to get you familiar with the lingo of arrays, objects, and functions, and get you repeatedly using them. It’s not a test, or even a challenge - it’s practice. Consider it like doing a forehand drill in tennis, or scales in music. You wouldn’t be upset making some mistakes while you practice, because you know that this is the thing you need to work toward being competent, and you allow yourself to fail and learn. This is exactly the same.

// Learn and fail as you need here, because the bigger tests are to come. As you get more comfortable with the basic syntax, and getting your code to work, you will have more brain space to think about what it is it all means. (And we are more than happy to keep explaining that at the same time too!)

// Follow the instructions carefully. They will be repetitive and are not designed to be interesting, but rather build up ‘muscle memory’. *Each* line of code that you write, you *must* save the file and run the code. If there are *any* errors, you fix them then and there. If in doubt, puts out the structure you have made to make sure that it is what you hoped it was. I’m looking for accuracy - I want the instructions followed precisely. It will be your choice of class and variable names (etc), but the functioning and number of attributes called for are immutable. Ideally you’ll want the work to be checked, so copy and paste this text into a file and comment it out, so that I can check it easily - put the answer directly below the question.

// 1. Make a function that takes two arguments, and returns the result of them added together.
function add(num1, num2) {
  return num1 + num2;
}

// 2. Call the above function four times with different inputs each time. Make at least some of the inputs floats.
console.log(add(1, 2));
console.log(add(1, 2.22));
console.log(add(3, 5));
console.log(add(2, 3.2));

// 3. Define two integer and two float variables, and use them as arguments to this function you have made.
const integer1 = 3;
const integer2 = 5;
const float1 = 8.2;
const float2 = 3.2;

console.log(add(integer1, float1));
// ---------------
// 4. Make an object (in ruby this would be a hash) with four keys, and have the keys be three different data types.
const newObject = {
  title: "Harry Potter",
  Price: 2,
  Color: "blue",
  people: [1, 2, 3]
};

// 5. Access two of the values in your object, and log them to the screen.
// console.log(newObject.title);
// console.log(newObject.people[0]);

// 6. Define a function that takes an object as the input, and log out the value of one of the keys of the object.
function objectInput(obj) {
  console.log(Object.keys(obj)[0])
}
objectInput(newObject)

// 7. Create an object with one key and value pair, and invoke the previous function with that object as the argument.
const fruit = {
  type: "apple"
};

objectInput(fruit)
// ---------------
// 8. Make an object with three keys and values, and assign it to a variable.
const dog = {
  name: "Alex",
  color: "brown",
  gender: "female"
};

// 9. Make four more objects with the same keys.
const bear = {
  name: "Peter",
  color: "brown",
  gender: "male"
};

const cat = {
  name: "Thomas",
  color: "blue",
  gender: "male"
};

const sheep = {
  name: "Sherin",
  color: "pink",
  gender: "female"
};

const pig = {
  name: "Amy",
  color: "bright pink",
  gender: "female"
};
// 10. Access a value from three of these objects.
console.log(pig.name)
console.log(sheep.color)
console.log(bear.gender)
// ---------------
// 11. Define a variable and assign to it an empty array.
const newArr = []
// 12. Define a function that takes an array and an object as arguments. The function will push the object into the given array.
function pushObject(array,object){
  array.push(object)
}
// 13. Using the function, the four objects, and the array that you have made in the previous steps, invoke the function four times to put those four objects into the array.
pushObject(newArr, bear)
pushObject(newArr, cat)
pushObject(newArr, sheep)
pushObject(newArr, pig)
// 14. Make sure that the array contains four hashes (maybe log to the screen).
console.log(newArr)
// 15. Access two elements of the array that you have created (via an index)
// 16. For one of these, now access one of the values of the object at that is located at that index.
// ---------------
// 17. Write a function that takes two arguments - one an object, and the other an array. Inside the function log out a value from the object, and an element from the array.
// 18. Define four objects, one with one key, one with two keys, one with three keys, and one with four.
// 19. Define two different arrays, with two different datatypes.
// 20. Call the function four times, once with each object, and use the arrays you made.
// ---------------
// 21. Write a function that takes five arguments: three strings, and two numbers.
// 22. Call that function twice.
// 23. Write a function that takes two arguments - one an object, and the other an array. Inside the function log out a value from the object, and an element from the array.
