const prompt = require("prompt-sync")();
let patron_status = prompt("Enter the patron status: ");
let num_of_overdue_books = prompt("Enter num_of_overdue_books: ");
let loan_duration;
if (patron_status === "student") {
    if (num_of_overdue_books === 0)
        loan_duration = 6;
    else if (num_of_overdue_books > 0 && num_of_overdue_books < 3)
        loan_duration = 4;
    else if (num_of_overdue_books > 3)
        loan_duration = 2;

} else if (patron_status === "faculity") {
    if (num_of_overdue_books === 0)
        loan_duration = 16;
    else if (num_of_overdue_books > 0 && num_of_overdue_books < 3)
        loan_duration = 12;
    else if (num_of_overdue_books > 3)
        loan_duration = 8;

} else {
    if (num_of_overdue_books === 0)
        loan_duration = 4;
    else if (num_of_overdue_books > 0 && num_of_overdue_books < 3)
        loan_duration = 3;
    else if (num_of_overdue_books > 3)
        loan_duration = 2;
}
console.log(loan_duration);