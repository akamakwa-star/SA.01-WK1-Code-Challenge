let marks =(prompt ("enter marks (0-100):"))

if (isNaN(marks) || marks < 0 || marks >100){
    console.log("invalid input");
}
else if (marks >79){
    console.log ("A")
}
else if (marks >= 60 && marks <70){
    console.log ("B")
}
else if (marks >=49 && marks <=59){
    console.log ("C")
}
else if (marks >=40 && marks <=49){
    console.log ("D")
}
else (marks <40)
   console.log ("E")

