//Error to Node.js me tress hote hai but request or response ye core Node.js me nahi kar rahe ho iasake liye aap Framework Express used kar rahe ho. express yesa kuchh nahi deta hai to aap khud ka class bana sakate ho
class ApiError extends Error {
  //ApiError extend karegi Error class ko
  constructor( //khud ka constructor banaya hai
    statusCode, //jo constructor ko used karega to vah statusCode,message, dega jo ki jaruri hai
    message = "Something went wrong", //agar koi message nahi dega to defoult message print hoga
    errors = [],
    stack = ""
  ) {
    super(message); //constructor me overwrite kar dete hai
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      //stack vala likh bhi sakate hai or nahi bhi
      //stack trace ki proper error mil jaye ki yaha yaha file me dikat hai
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
