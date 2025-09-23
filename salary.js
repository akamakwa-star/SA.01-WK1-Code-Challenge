// Sample input
let basicSalary = 50000;
let benefits = 10000;

// Function to calculate gross salary
function grossSalary(basic, benefits) {
  return basic + benefits;
}

// Function to calculate PAYE (Tax)
function calculatePayee(grossSalary) {
  if (grossSalary <= 24000) {
    return grossSalary * 0.10;
  } else if (grossSalary <= 32333) {
    return grossSalary * 0.25;
  } else if (grossSalary <= 500000) {
    return grossSalary * 0.30;
  } else {
    return grossSalary * 0.35;
  }
}

// Function to calculate NHIF (assuming 5% capped at 2400)
function calculateNHIF(grossSalary) {
  let nhif = grossSalary * 0.05;
  return nhif > 2400 ? 2400 : nhif;
}

// Function to calculate NSSF (assuming 6% capped at 800 from Feb 2025)
function calculateNSSF(grossSalary) {
  let nssf = grossSalary * 0.06;
  return nssf > 800 ? 800 : nssf;
}

// Function to calculate net salary
function calculateNetSalary(basic, benefits) {
  let gross = grossSalary(basic, benefits);
  let payee = calculatePayee(gross);
  let nhif = calculateNHIF(gross);
  let nssf = calculateNSSF(gross);
  let net = gross - payee - nhif - nssf;

  // Log each component
  console.log("Gross Salary:", gross);
  console.log("PAYE (Tax):", payee);
  console.log("NHIF:", nhif);
  console.log("NSSF:", nssf);
  console.log("Net Salary:", net);
}

// Run the calculator
calculateNetSalary(basicSalary, benefits);