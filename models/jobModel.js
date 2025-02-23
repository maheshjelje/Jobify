import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../utils/constant.js";
const jobScema = new mongoose.Schema({
    company: String,
    position: String,
    jobStatus: {
        type: String,
        enum: ['interview', 'pending', 'declined'],
        default: JOB_STATUS.PENDING,
    },
    jobType: {
        type: String,
        enum: ['full-time', 'part-time', 'internship'],
        default: JOB_TYPE.FULL_TIME,
    },
    jobLocation: {
        type: String,
        default: 'my city',
    },

    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true })

export default mongoose.model('Job', jobScema)