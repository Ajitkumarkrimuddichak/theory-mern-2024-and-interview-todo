import mongoose, {Schema} from "mongoose";//Destructuring bhi kar liya hai jo ber ber likhana nahi pare
import jwt from "jsonwebtoken"//Token ke liye used karate hai
import bcrypt from "bcrypt"//password encrypted karata hai

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

//Direct encryption not possible
//Hame help leni parati hai mongoose ke kuchh hooks ka
userSchema.pre("save", async function (next) {//pre Hook hai middleware :- jaise hi Data save hone ja raha hoga  just usase pahale is hook ko run kara sakate ho koi bhi code dal ke//kya kar de password encryption kar de
    if(!this.isModified("password")) return next();//kon-kon event pe kara sakate ho Ex:- validate ,save,remove,updateOne,deleteOne // usake bad milata hai callback but Array function Not used
    //har bar password encript nahi karana jab mai bheju tohi change karana password me isi liye if condition lagaya
    this.password = await bcrypt.hash(this.password, 10)//this ko sare fiel pata hai usi ko hook bolate hai //bcrypt ke pas one method hai hash(kya hash karana hai , kitana round)
    next()
})

//mongoose option deta hai ki aap isake andar method injekt kar sakate hai
userSchema.methods.isPasswordCorrect = async function(password){//method banaya hai // password sahi hai ki nahi hai amane database me jo store kiya hai oh encrypt hai / but bahar jo user bhejega vah 123 bhejega ya kuchh bhi
    return await bcrypt.compare(password, this.password)//(Data do string me user jo bheja , dusara encryted password )/yaha par bhi method ke pass pura access hota hai  
}//return true or false me result deta hai

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(//jwt ke pas sign method hai jo token generate  kar deta hai sign()bahuta sara option hota hai
        {
            _id: this._id,//this ke anadar sabhi ka access hai 
            email: this.email,//ye pura peload hai jitana chahe likh sakate hai
            username: this.username,
            fullName: this.fullName//Left side vala pelosad ka name hai  or Right side vala Database se aa raha hai 
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,  
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)