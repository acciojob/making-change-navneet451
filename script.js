const makeChange = (c) => {
  let cents = Number(c); // Convert the input to a number in case it is passed as a string
  
  let q = Math.floor(cents / 25); // Calculate the number of quarters
  cents %= 25; // Update cents after accounting for quarters
  
  let d = Math.floor(cents / 10); // Calculate the number of dimes
  cents %= 10; // Update cents after accounting for dimes
  
  let n = Math.floor(cents / 5); // Calculate the number of nickels
  cents %= 5; // Update cents after accounting for nickels
  
  let p = cents; // Remaining cents are pennies
  
  // Return the breakdown as an object
  return { q, d, n, p };
};

// Example usage
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

