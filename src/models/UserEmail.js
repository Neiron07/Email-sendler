import mongoose from 'mongoose';

const Users = new mongoose.Schema({
	email : {type: String},
	password : {type: String, required: true},
	date: {type: Date}
});

export default mongoose.model('Users', Users);