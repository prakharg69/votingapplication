const mongoose =require('mongoose');
const bcrypt =require('bcrypt');

const { uniq } = require('lodash');


const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    age:{
        type:Number,
        require: true
    },
    work:{
        type:String,
        require: true
    },
    PhoneNumber:{
        type:Number,
        require: true
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    salary:{
        type:Number,
        require: true
    },
    username:{
        type:String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require:true
    },
    adharnumber:{
        require: true,
        unique: true,
        type:Number
    },
    role:{
            type:String,
            enum:['Voter','Admin'],
            default:'Voter'
    },
    isVoted: {
        type:Boolean,
        default:false
    }
})

UserSchema.pre('save',async function(next){
    const user = this;
    if(!user.isModified('password')) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password,salt);
        user.password = hash;
        next();
        
    }
    catch(err){
        return next(err);
    }
})
UserSchema.methods.comparePassword = async function(candidatePassword){
    try{
        const isMatch = await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    }catch(err){
        return err;
    }
}

const User = mongoose.model('user',UserSchema);
module.exports =User;