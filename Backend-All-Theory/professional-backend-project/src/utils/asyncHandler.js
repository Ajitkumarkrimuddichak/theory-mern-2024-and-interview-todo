const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

/*(or)
//Higher order function Ex:-
//const asyncHandler = () => {}
//const asyncHandler = (func) => () => {}
//const asyncHandler = (func) => async () => {}

//reper function banane se har jagah used kar sakate hai jo niche hai
const asyncHandler = (fn)=> async (req,res,next) =>{
    try {
        await fn(req,res,next)
        
    } catch (error) {
      res.status(err.code || 5000.json({
        success:false,
        message:err.message
      }))  
    }
}*/
