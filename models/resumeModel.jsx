import { Schema, model, models } from "mongoose";

const resumeSchema = new Schema({
    name: String,
    role: String,
    domain: String
  
})

const resumeModel = models.resume || model('resume', resumeSchema);

export default resumeModel;