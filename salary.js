function calculateNetsalary (basicSalary,benefits){
   let grossSalary = basicSalary + benefits;
   let tax = grossSalary * 0.26; // 25% taxe rate
   let nhif = grossSalary * 0.025; // 2.5% NHIF rate
   let nssf = basicSalary * 0.06; // 6% NSSF rate

   let netSalary = grossSalary - tax - nhif - nssf;

   console.log("Gross Salary:", grossSalary);
   console.log("Tax:", tax);
   console.log("NHIF:", nssf);
   console.log("Net Salary:", netSalary);


}