import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
    title: String,
    description: String,
    button: String,
    url: String,
});

const postModel = models.Post || model('Post', postSchema);

export default postModel;
