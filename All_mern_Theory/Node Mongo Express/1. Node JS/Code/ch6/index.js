// File System - Promise API
import * as fs from 'fs/promises';

// Creating Directory - Path should be there
try {
 await fs.mkdir('c:\\nodejs\\ch6\\geek');
 console.log("Directory Created....");
} catch (error) {
 console.log(error);
}

// Creating Directory - Path is not required to be there
// try {
//  await fs.mkdir('c:\\nodejs\\ch6\\test\\demo', { recursive: true });
//  console.log("Directory Created....");
// } catch (error) {
//  console.log(error);
// }

// Read Content of Directory
// try {
//  const files = await fs.readdir('c:\\nodejs\\ch6\\test');
//  for (const file of files)
//   console.log(file);
// } catch (error) {
//  console.log(error);
// }

// Remove Directory - Directory should be empty
// try {
//  await fs.rmdir('c:\\nodejs\\ch6\\test\\demo');
//  console.log("Directory Removed....");
// } catch (error) {
//  console.log(error);
// }

// Create and Write File
// try {
//  await fs.writeFile('readme.txt', 'Hello Node JS ');
// } catch (error) {
//  console.log(error);
// }

// Read File
// try {
//  const data = await fs.readFile('readme.txt');
//  console.log(data);
// } catch (error) {
//  console.log(error);
// }

// try {
//  const data = await fs.readFile('readme.txt', 'utf-8');
//  console.log(data);
// } catch (error) {
//  console.log(error);
// }

// Append Data into File
// try {
//  await fs.appendFile('readme.txt', ' Hello GeekyShows');
// } catch (error) {
//  console.log(error);
// }

// Copy File
// try {
//  await fs.copyFile('readme.txt', 'c:\\nodejs\\ch6\\geek\\info.txt');
//  console.log("File Copied...");
// } catch (error) {
//  console.log(error);
// }

// Get File Information
// try {
//  const stats = await fs.stat('c:\\nodejs\\ch6\\test\\emp.js');
//  console.log(stats.isDirectory());
//  console.log(stats.isFile());
//  console.log(stats);
// } catch (error) {
//  console.log(error);
// }