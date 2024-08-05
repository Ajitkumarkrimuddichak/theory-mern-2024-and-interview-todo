//What is public or private cryptography using nodejs

/* Answer :- Public-key cryptography (also known as asymmetric cryptography) 
and private-key cryptography (also known as symmetric cryptography) are
fundamental techniques used in cryptography. Here’s an overview of both, 
and how they can be implemented in Node.js 


=> Public-Key Cryptography (Asymmetric Cryptography)
Public-key cryptography uses a pair of keys: a public key and a private key. 
The public key is shared openly, while the private key is kept secret. Data 
encrypted with the public key can only be decrypted with the corresponding 
private key and vice versa.

Use Cases:-
Secure data transmission , Digital signatures , Certificate authorities.
*/

//EX :-
/*const crypto = require("crypto");
// Generate key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});
// Data to be encrypted
const data = "Hello, this is a secret message!";
// Encrypt data using public key
const encryptedData = crypto.publicEncrypt(publicKey, Buffer.from(data));
console.log("Encrypted Data:", encryptedData.toString("base64"));
// Decrypt data using private key
const decryptedData = crypto.privateDecrypt(privateKey, encryptedData);
console.log("Decrypted Data:", decryptedData.toString());*/

/*Private-Key Cryptography (Symmetric Cryptography):- 
Private-key cryptography uses a single key for both encryption and decryption. 
Both the sender and receiver must have the same key, which must be kept secret.

Use Cases:-
Secure data storage,
Fast encryption/decryption for large data sets
*/

//EX :-
const crypto = require("crypto");

// Secret key (must be kept secret)
const secretKey = crypto.randomBytes(32);

// Data to be encrypted
const data = "Hello, this is a secret message!";

// Encryption
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv("aes-256-cbc", secretKey, iv);
let encryptedData = cipher.update(data, "utf8", "hex");
encryptedData += cipher.final("hex");

console.log("Encrypted Data:", encryptedData);

// Decryption
const decipher = crypto.createDecipheriv("aes-256-cbc", secretKey, iv);
let decryptedData = decipher.update(encryptedData, "hex", "utf8");
decryptedData += decipher.final("utf8");
console.log("Decrypted Data:", decryptedData);
