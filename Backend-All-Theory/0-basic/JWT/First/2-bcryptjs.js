/*What is bcryptjs using nodejs :- 
bcryptjs is a JavaScript library used in Node.js to hash passwords and 
compare them against hashed values. It is a pure JavaScript implementation 
of bcrypt, which is a password-hashing function designed to be 
computationally expensive to resist brute-force attacks. Here's how 
you can use bcryptjs in a Node.js application

*/
//Ex :-
const bcrypt = require("bcryptjs");
// Function to hash a password
const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
};

// Function to compare a plain password with a hashed password
const comparePassword = (plainPassword, hashedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainPassword, hashedPassword, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

// Example usage
const runExample = async () => {
  const password = "mySecretPassword";

  try {
    // Hash the password
    const hashedPassword = await hashPassword(password);
    console.log("Hashed Password:", hashedPassword);

    // Compare the plain password with the hashed password
    const isMatch = await comparePassword(password, hashedPassword);
    if (isMatch) {
      console.log("Passwords match!");
    } else {
      console.log("Passwords do not match!");
    }
  } catch (error) {
    console.error(error);
  }
};

runExample();
