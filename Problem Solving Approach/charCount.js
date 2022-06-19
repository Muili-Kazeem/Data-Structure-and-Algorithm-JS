// Write a function which takes in a string and returns counts of each character in the string.

//Evaluating possible inputs and outputs
// charCount("haaaa");  #{a: 4}
// charCount("hello");  #{ h:1, e:1, l:2, o:1 }


// // Breaking it down and Generating possible workimg steps to solve the problem
// function charCount(str) {
//     //make object to return at the end
//     //loop over passed string, for each character
//         //if character is a number/letter and exists/is a key in the object, increase the count else create new key-value pairs and set its value to one
//         //if character is something else (space, symbol etc), don't do anything
//     // retrun object at end
// }

// Solve / Simplify
function charCount(str) {
    //make object to return at the end
    var count = {};
    //loop over passed string, for each character
    for (i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase()
        //if character is a number/letter and exists/is a key in the object, increase the count else create new key-value pairs and set its value to one
        if (/[a-z0-9]/.test(char)) {
            if (count[char] > 0) {
                count[char] += 1
            } else {
                count[char] = 1
            };
        }
        //if character is something else (space, symbol etc), don't do anything
    }
    // return object at end
    return count
}

console.log(charCount("hello Halloween"))