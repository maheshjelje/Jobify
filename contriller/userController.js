import { StatusCodes } from "http-status-codes";
import User from "../models/userModels.js"
import Job from "../models/jobModel.js"
import cloudinary from 'cloudinary'
import { promises as fs } from 'fs'
import { formatImage } from '../middleware/multerMiddleware.js'




export const getCurrentUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId })
    const userwithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({ user: userwithoutPassword })
}

export const getApplicationStats = async (req, res) => {
    const users = await User.countDocuments();
    const jobs = await Job.countDocuments()
    res.status(StatusCodes.OK).json({ users, jobs })
}

export const updateUser = async (req, res) => {

    const newUser = { ...req.body };
    delete newUser.password
    delete newUser.role;
    if (req.file) {
        const file = formatImage(req.file)
        const response = await cloudinary.v2.uploader.upload(file)

        newUser.avatar = response.secure_url
        newUser.avatarPublicId = response.public_id
    }
    const updateUser = await User.findByIdAndUpdate(req.user.userId, newUser)
    if (req.file && updateUser.avatarPublicId) {
        await cloudinary.v2.uploader.destroy(updateUser.avatarPublicId)
    }
    res.status(StatusCodes.OK).json({ msg: 'update user' })
}