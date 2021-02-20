/**
 * An employee at a grocery store must frequently place boxes of cans in stacks. 
 * Write a defining table and a program that allows him to enter the total number of boxes 
 * and the number of boxes he will place in each stack. 
 * Your program must output the number of stacks he will have to make.
 *  All of the stacks except the last one must have the exact number of boxes that the employee specifies.
 *  The last stack must have the exact number or fewer boxes. 
 * For example, if the employee enters 74 total boxes and 6 boxes in each stack your program must output
 * 
*/

// const prompt = require("prompt-sync")();
// let class_size = prompt("Enter number of size: ");
// let number_of_teams = prompt("Enter the number team");
// const minimum_team_size = Math.floor(class_size / number_of_teams);
// const number_of_team_with_extra_student = class_size % number_of_teams;
// const number_of_teams_with_minimum_team_size = number_of_teams - number_of_team_with_extra_student;
// console.log(number_of_team_with_extra_student + (minimum_team_size + 1));
// console.log(number_of_teams_with_minimum_team_size + minimum_team_size);
/**
 * The same method some how different style
*/
let prompt = require("prompt-sync")();
let totalBox = prompt("please Enter total number of box:  ");
let boxes_per_stack = prompt("please Enter total number of in each stack: ");
let remainingBox = parseInt(totalBox % boxes_per_stack);
let number_of_stack = parseInt(totalBox / boxes_per_stack);
if (remainingBox > 0) {
    console.log(number_of_stack += 1);
} else {
    console.log(number_of_stack);
}