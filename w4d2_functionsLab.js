console.log('Part 1 - minusOne() \n');

// this function returns the parameter passed - 1
const minusOne = function (num){
    if (isNaN(num) ){
        console.log(`  '${num}' is not a number.`);
    }
    else {
        console.log(`   ${num} - 1 is ${num-1}.`);
    }
}

//invoking the function minusOne()
minusOne(55);
minusOne('Yes');


console.log("\n");
console.log('Part 2 - makeSentence()\n');

// the following function concatenates the parameters into a sentence.
const makeSentence = function (string1, string2, string3){
  //console.log(`   Oh boy, do ${string1} ${string2} ${string3} or what?`);
  console.log("Oh boy..., do " + string1 + " " + string2 + " " + string3 + " or what?");
  
}

// invoking the function makeSentence()
makeSentence('I', 'want', 'chimichangas');


console.log("\n");
console.log('Part 2 - getLastElement()\n');
// the following takes an array and prints its last element
function getLastElement(arr){
   console.log(`Last element of [${arr}] is ${arr[arr.length - 1]}.`);
}


getLastElement([1, 2, 3, 4, 5, 6]);       // 6
getLastElement(['a', 'b', 'c']);          // 'c'
getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]


// Extra challenge for PART 2
//Trying Part 2 where num of arguments is unknown
console.log("\n");
console.log("Part 3 - makeSentence() - Extra challnege.\n");
const makeSentence3 =  function (...arr){
    let conSentence2 = ''
    for (let i = 0; i < arr.length; i++){
      conSentence2 += arr[i]
      if(i < arr.length -1){
        conSentence2 += " ";
      }
    }
   console.log(conSentence2);
  }
  
  // invoking the function
makeSentence3('Oh', 'boy', 'do', 'I', 'want', 'chimichangas', 'or', 'YES', '?');