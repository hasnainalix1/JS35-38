// current time only


// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// document.write("Current time: "+ theHr + ":" + theMin);



// prompt

// function fullname(){
//     let firstname = prompt("enter your name", "Hasnain Ali");
//         if (firstname != null) {
//             document.getElementById("demo").innerHTML =
//            "Hello"+  firstname  + "!";
//           }
// }



// to uppercase

// function upper(){
//     let word = prompt("Enter Something Convert toUppercase", "any thing")
//     if (word != null)   {
//         document.getElementById("name").innerHTML =
//         word.toUpperCase();
//     }
// }



// find longest word

// function findLongestWord() {
//     let sentence = prompt("Enter a sentence:", "Web Developement Tutorial");
//     let words = sentence.split(" ");
//     let longestWord = "";

    // for (let word of words) {
    //     if (word.length > longestWord.length) {
    //         longestWord = word;
    //     }
    // }

//     document.getElementById("result").innerHTML = "Longest Word: " + longestWord;
// }

// findLongestWord();





// calculate radius of circul
// function calcCircumference(radius) {
//     let circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference);
// }

// function calcArea(radius) {
//     let area = Math.PI * radius * radius;
//     console.log("The area is " + area);
// }

// calcCircumference(5);
// calcArea(5);
// output (1) : The circumference is 31.41592653589793
// output (2) : The area is 78.53981633974483




// countOccurrences

// function countOccurrences(string, letter) {
    // let count = 0;
    // for (let i = 0; i < string.length; i++) {
        // if (string[i].toLowerCase() === letter.toLowerCase()) {
            // count++;
        // }
    // }
    // return count;
// }
// let result = countOccurrences("JSResources.com", "o");
// console.log("The letter 'o' appears " + result + " times.");





// capitalizeFirstLetter 

// function capitalizeFirstLetter(string) {
//     return string
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");
// }

// let userInput = prompt("Enter a sentence:");
// let result = capitalizeFirstLetter(userInput);
// document.getElementById("result").innerHTML = result;




// area of rectangle.
// function calculateRectangleArea(width, height){
    // return width * height;
 // }

 // i. Passing arguments as values
 // const area1 = calculateRectangleArea(5, 10);
 // console.log("The area of the rectangle (using values):", area1);

 // ii. Passing arguments as variables
// const width = 7;
// const height = 12;
// const area2 = calculateRectangleArea(width, height);
// console.log("The area of the rectangle (using variables)", area2);
