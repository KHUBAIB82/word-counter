#! /usr/bin/env node

import inquirer from "inquirer"

const answers : {
    Sentence: string 
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count word:"
    
    }
])

const words = answers.Sentence.trim().split(" ")

console.log(words);
console.log(`your sentence to count word ${words.length}`)

