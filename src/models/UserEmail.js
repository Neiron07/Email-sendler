import mongoose from 'mongoose';

const Users = new mongoose.Schema({
	email : {type: String},
	text : {type: String},
	password : {type: String,},
	date: {type: Date}
});

export default mongoose.model('Users', Users);