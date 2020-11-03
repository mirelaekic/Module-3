/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

function sumIntegers(x, y) {
    if (x === y) {
        return (x + y) * 3;
    } else {
        return false;
    }
}; 

console.log(sumIntegers(3, 3));
console.log(sumIntegers(5, 3));

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

function checkNumbers(x, y) {
    if ((x === 50 || y === 50) || (x + y === 50)) {
        return true
    } else {
        return "none of the given numbers are 50 or the sum is not 50"
    }
};

console.log(checkNumbers(50,5));
console.log(checkNumbers(45,5));
console.log(checkNumbers(30,5));


/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

function removeCharacter(str, num) {
    //let str1 = str.substr(0,num)
    //let str2 = str.substr(num)
    console.log(str.substr(0,num -1).concat(str.substr(num)))

    // let str = 'Im here'
    // let toArray = str.split("")//[I, m, h, e, r,e]
    // toArray.splice(1,2)
    // let toStrBack = toArray.join("")
    //console.log();

}

removeCharacter('Hello',2);
//removeCharacter("Dog")

/*
4)
 Create a function to find the largest of three given integers.
*/

function findLargest(a, b, c){
    if(a>b && a>c)
    return "A is the largest number";
    else if (b>a && b>c) {
        return "B is the largest number";
    } else if(c>a && c>b){  
        return "C is the largest number"
    }
}
console.log(findLargest(7, 10, 50))
console.log(findLargest(74543, 14350, 57870))

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function checkNum(x, y) {
    if (((x >= 40 && x <= 60) || (x >= 70 && x <= 100)) && ((y >= 40 && y <= 60) || (y >= 70 && y <= 100))){
      return "Two numbers are in range 40-60 and 70-100";
    } else {
        return "they are not in range"
    }
}

console.log(checkNum(40, 70));
console.log(checkNum(50, 100));
console.log(checkNum(65, 120));
    
/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
function stringCopy(str, num) {
    return str.repeat(num)
};

console.log(stringCopy("Richard ", 10))

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function cityName(str){
    if (((str.substr(0,3) == "New") || (str.substr(0, 3) == "Los")) && (str.length >= 3)){
        return str
    } else {
        return "this string doesn't begin with 'New' or 'Los'"
    }
}
console.log(cityName("Los Angeles"));
console.log(cityName("New York"));
console.log(cityName("Paris"));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/


/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

function arrayOfTwo(array1){
    if (array1.includes(1) || array1.includes(3)) {
        return true
    } else {
        return false
    }
}
console.log(arrayOfTwo([1, 6]));
console.log(arrayOfTwo([3, 8]));
console.log(arrayOfTwo([10, 80]))
/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
function arrayOfNone(array2) {
    if (!array2.includes(1) || !array2.includes(3)) {
        return true
    } else {

    }
}
console.log(arrayOfTwo([5, 6]));
console.log(arrayOfTwo([3, 8]));
console.log(arrayOfTwo([1, 9]))
/*
11)
Create a function to find the longest string from a given array of strings.
*/

/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
13)
Create a function to find the index of the greatest element of a given array of integers
14)
Create a function to get the largest even number from an array of integers.
16)
Create a function to check from two given integers, whether one is positive and another one is negative.
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/