import EventEmitter from 'events';

// Creating Class
class MyEmitter extends EventEmitter { }

// Creating Object
const myEmitter = new MyEmitter();

// Example 1
// Register Event Listener
myEmitter.on('event', () => {
 console.log('An Event Occured !');
})

// Trigger Event
myEmitter.emit('event');
myEmitter.emit('event');

// // Example 2
// // Register Event Listener
// let m = 0;
// myEmitter.on('event', () => {
//  console.log(++m);
// })

// // Trigger Event
// myEmitter.emit('event');
// myEmitter.emit('event');

// // Example 3
// // Register Event Listener
// let m = 0;
// myEmitter.once('event', () => {
//  console.log(++m);
// })

// // Trigger Event
// myEmitter.emit('event');
// myEmitter.emit('event');
