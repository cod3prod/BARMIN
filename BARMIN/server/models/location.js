import mongoose from "mongoose";
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    title : String,
    image : String,
    description: String,
    location: String
});

export default mongoose.model('Location', LocationSchema);