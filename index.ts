#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*10 + 5);
const answer = await inquirer.prompt([
  
    {
      name: "userGuessNumber",
      type: "number",
      message: "please guess a number between 5-10:",
    },
  ],
);

if (answer.userGuessNumber === randomNumber){
    console.log("Congratulation! you guess a right number");
}
else {(console.log("you guess a wrong number.Please Try Again"))};
