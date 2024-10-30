import { Schema, model, models } from "mongoose";

// Define the skill schema
const skillSchema = new Schema({
    skillType: { type: String, required: true },
    skills: { type: [String], required: true }
});

// Define the experience schema
const experienceSchema = new Schema({
    type: { type: String, required: true },
    heading: { type: String, required: true },
    data: { type: [String], required: true }
});

// Define the project schema
const projectSchema = new Schema({
    project: { type: String, required: true },
    description: { type: [String], required: true }
});

// Define the content schema
const contentSchema = new Schema({
    type: { type: String, required: true },
    heading: { type: String, required: true },
    data: {
        type: [skillSchema], // For skills
        type: [String], // For experience
        type: [projectSchema] // For projects
    }
});

// Define the address schema
const addressSchema = new Schema({
    email: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    zip: { type: String, required: true }
});

// Define the main resume schema
const resumeSchema = new Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    address: addressSchema,
    content: [contentSchema] // Array of content items
});

// Create the model
const resumeModel = models.resume || model('resume', resumeSchema);

export default resumeModel;
