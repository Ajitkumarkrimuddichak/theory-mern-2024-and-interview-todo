//Error to Node.js me tress hote hai but request or response ye core Node.js me nahi kar rahe ho iasake liye aap Framework Express used kar rahe ho. express yesa kuchh nahi deta hai to aap khud ka class bana sakate ho
class ApiResponse {
  //kisi ko response bhejenge to isi class ke through
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
