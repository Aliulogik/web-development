// console.log("Hello World");

// console.log(isNaN("kaka"));

// var  res=0
// res = eval(5+6)
// console.log(res);

// var response 
// response = confirm("Do you wish to Continue")
// if(response == true){
//     alert("You can proceed further")
// }else{
//     alert("You cannot proceed further")
// }

function hello(){
    console.log("Hello World");
}

function add(a,b){
    console.log(a*b);
}

// fruitlist = ["Apple", "Banana", "Mango"]

// for(var i =0; i < fruitlist.length; i++){
//     console.log(fruitlist);
// }
function add(a,b){
    console.log(a*b);
}

// var Score = [56,78,63,52,71]
// var sum = 0
// var i = 0

//  function AverageScore(){
//     if (Score.length > 0){
//         for(i=0; i < Score.length; i++)
//         sum +=Score[i]
//     }
//  }

// my example XX
 var grades = [80, 87, 94, 82 ];
// var sum = 0;
// var i = 0;

//  function Average(list){
// 	if (scores.length > 0){
// 		for (i = 0; i < scores.length; i++){
// 			sum += scores[i];
// 		}
//     }

// Average(grades)

function average(scores){
    sum = 0
    for(count=0; count < scores.length; count++){
        sum += scores[count]
    }
    average = sum/scores.length
    return average

}

// var numbers = [10, 23, 12, 21];
// //  i = [];

// function even(numbers){
//     i = [];
//     for( i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 == 0)
//             even.push(numbers[i]);
//     }
//     return i
// }

// console.log(even(numbers));

function findEven(numberList){
    evenNumbers = []
    for(i=0; i < numberList.length;i++){
        if(numberList[i]%2==0){
            evenNumbers.push(numberList[i])
        }
    }
    return evenNumbers
}

numberList[2,6,5,11,47]
console.log(findEven(numberList));