// vleu nd vrble
// console.log('DELE')
// console.log('200')

// let fristName = 'cirom';
// let lastName = "Adekule"
// console.log(fristName, lastName)
// console.log(lastName)

// let formerJob = "programing";
// console.log(formerJob)

// let massciroma = 78;
// let heightciroma = 1.69;
// let ciromaFristBMI= massciroma/(heightciroma * heightciroma);
// console.log(ciromaFristBMI, 'this is ciroma s BMI')

// let Dumebi = 92;
// let heightDumebi = 1.69;
// let dumebiFristBMI= massciroma/(heightciroma * heightciroma);
// console.log(dumebiFristBMI, 'this is dumebi s BMI')

// let ciromaHightBMI = ciromaFristBMI >= dumebiFristBMI;
// console.log(ciromaHightBMI )

// const fristName = 'ciroma';
// const lastName = 'Adekunde';
// console.log("My fristname is " +fristName + "and my lastname is" +lastName)

// templete Literals
// console.log(`My fristname is ${fristName} and my lastname is ${lastName}`)

// const age =17;
// if(age>18){
//   console.log("You are old enought");
//   prompt('come collect your money')

// }
// else if(age == 17){
//   console.log("congratulation !!")
// }

// else{
//   console.log("You are old enought");
// }
// Type conversion(manual conversion)
// const person = "Husain";
// console.log(typeof Number(person))

// // type corection (Automatic conversion)
// const word1  = 5;
// const word2  = `egg`;
// const stringedword = word1+word2
// console.log(stringedword)

// concats
// console.log("23"-"10"+"13")

// 8 -18-2022
// const fvNumber= prompt("enter your number");
// if (fvNumber===20){
//   console.log("yee")
// }else if(fvNumber===50){
//   console.log("50")
// }

// BOOLEAN LOGIC
// const isDarkskined =true;
// const isHausa = true;
// const isEducated = true;
// console.log(isDarkskined && isHausa)
// console.log(isDarkskined || isHausa)
// console.log(isDarkskined && isHausa || isEducated)
// console.log(!isDarkskined && isHausa && isEducated)
// console.log(isDarkskined && isHausa)
// console.log(isDarkskined && isHausa)

// Swich statement
// const day = prompt("What is your Favorite day?")
// switch (day) {
//   case "monday":
//     console.log("structure my course contents");
//     console.log("Today is Monday");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "Wednesday":
//     console.log("Today is Wednesday");
//     break;
//   case "Thursday":
//   case "Friday":
//     console.log("Today is Favourite day");
//     break;
//   case "Saturday":
//     console.log("Owanbe");
//     break;
//   case "Sunday":
//     console.log("Rest");
//     break;
//   default:
//      console.log("invilid");
// }

// STATEMENT AND EXPRESSION



// let massciroma = 78;
// let heightciroma = 1.69;
// let Dumebi = 92;
// let heightDumebi = 1.69;
// let ciromaFristBMI= massciroma/(heightciroma * heightciroma);
// let dumebiFristBMI= massciroma/(heightciroma * heightciroma);
// console.log(ciromaFristBMI, 'this is ciroma s BMI')
// console.log(dumebiFristBMI, 'this is dumebi s BMI')
// if(ciromaFristBMI<dumebiFristBMI){
//   console.log("ciroma BMI IS  HIGTH THAN Dumebi BMI" )
// }else{
//   console.log()
// }


// ASSIGNMENT
const dumebiFrisScore = 96;
const dumebiScondScore = 108;
const dumebiThridScore = 89;
const dumebiAveragescore = (dumebiFrisScore +dumebiScondScore + dumebiThridScore)/3;
console.log("Dumebi Team average score is" + " " + dumebiAveragescore)

const ciromaFrisScore = 88;
const ciromaScondScore = 91;
const ciromaThridScore = 110;
const ciromaAveragescore = (ciromaFrisScore +ciromaScondScore + ciromaThridScore)/3;
console.log("Ciroma Team average score is" + " " +ciromaAveragescore)
// console.log(dumebiFineRound+ciromaFineRound);
if(ciromaAveragescore > dumebiAveragescore){
  console.log("Ciroma Team's is the winner");
}else if(dumebiAveragescore >ciromaAveragescore ){
   console.log("Dumbi Team's is the winner");
}else{
  console.log("The team's are draw");
}
 /* *********DATA1************  */


const dumebiFritScoreBonus1 = 97;
const dumebiSecondScoreBonus1 = 112;
const dumebiThirdScoreBonus1 = 101;
const dumebiAverageScoreBonus1 = (dumebiFritScoreBonus1 +dumebiSecondScoreBonus1 + dumebiThirdScoreBonus1)/3;
console.log(`DumebiAverageScore For bonus 1 is ${dumebiAverageScoreBonus1}`)


const ciromaFristScoreBonus1 = 109;
const ciromaScondScoreBonus1 = 95;
const ciromaThirdScoreBonus1 = 123;
const ciromaAverageScoreBonus1 = (ciromaFristScoreBonus1 + ciromaScondScoreBonus1 + ciromaThirdScoreBonus1)/3;
console.log(`CiromaAverageScore For bonus 1 is ${ciromaAverageScoreBonus1}`)
if(ciromaAverageScoreBonus1 >= 100 &&  ciromaAverageScoreBonus1 > dumebiAverageScoreBonus1){
  console.log(`Ciroma Team's is winner ${ciromaAverageScoreBonus1}`);
}else if(dumebiAverageScoreBonus1  >= 100 && dumebiAverageScoreBonus1 > ciromaAverageScoreBonus1){
   console.log(`Dumbi Team's is winner${dumebiAverageScoreBonus1}`);
}else{
  console.log("The team's are draw");
}
 /* *********DATA2************  */


const dumebiFristScoreBonus2 = 97;
const dumebiSecondScoreBonus2 = 112;
const dumebiThirdScoreBonus2 = 101;
const dumebiAverageBonusScore = (dumebiFristScoreBonus2 +dumebiSecondScoreBonus2 + dumebiThirdScoreBonus2)/3;
console.log(`DumebiAverageScore For bonus 2 is ${dumebiAverageBonusScore}`)

const ciromaFristScoreBonus2 = 109;
const ciromaSecondScoreBonus2 = 95;
const ciromaThirdScoreBonus2 = 106;
const ciromaAverageBonusScore = (ciromaFristScoreBonus2 +ciromaSecondScoreBonus2 +ciromaThirdScoreBonus2 )/3;
console.log(`C iromaAverageScore For bonus 2 is ${ciromaAverageBonusScore}`)
if(ciromaAverageBonusScore >= 100 &&  ciromaAverageBonusScore > dumebiAverageBonusScore){
  console.log(`Ciroma Team's is winner ${ciromaAverageBonusScore}`)
}else if(dumebiAverageBonusScore  >= 100 && dumebiAverageBonusScore > ciromaAverageBonusScore){
   console.log(`Dumbi Team's is winner ${dumebiAverageBonusScore}`);
}else{
  console.log(`The team's are draw `);
}
