class ApiError extends Error{
    constructor(message="Something went wrong",stack="",error=[],statusCode){
        super(message)
        this.message=message;
        this.error=error;
        this.statusCode=statusCode;
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
module.exports ={ApiError}