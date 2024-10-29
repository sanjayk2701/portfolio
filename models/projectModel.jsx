import { Schema, model, models } from "mongoose";

// Define the project schema
const projectSchema = new Schema({
    image:String,
    title: String,
    description: String,
}, { toJSON: { virtuals: true } });

// Add a virtual field for a short description
projectSchema.virtual('short_description').get(function() {
    return this.description.substr(0, 300) + '...';
});

// Use models to prevent overwriting the model if it already exists
const projectModel = models.projects || model('projects', projectSchema);

export default projectModel;
