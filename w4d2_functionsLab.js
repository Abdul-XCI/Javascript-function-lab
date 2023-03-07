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
  console.log(`   Oh boy, do ${string1} ${string2} ${string3} or what?`);
  
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


// Extra challeneg for PART 2
const makeSentence2 =  function (arr){
  let conSentence = ''
  for (let i = 0; i < arr.length; i++){
    conSentence += arr[i]
    if(i < arr.length -1){
      conSentence += " ";
    }
  }
  console.log(conSentence);
}

// invoking the function
makeSentence2(['Oh', 'boy', 'do', 'I', 'want', 'chimichangas', 'or', 'what', '?']);

