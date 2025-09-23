let marks = parseInt(prompt("Enter your marks:"));
let grade;

if (marks >= 79 && marks <= 100) {
    grade = "A";
} else if (marks >= 60 && marks < 79) {
    grade = "B";
} else if (marks >= 49 && marks < 60) {
    grade = "C";
} else if (marks >= 40 && marks < 49) {
    grade = "D";
} else {
    grade = "E";
}

console.log("Your grade is:", grade);
