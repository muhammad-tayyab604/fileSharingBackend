import File from "../models/file.js";
import dotenv from "dotenv";
dotenv.config();

export const uploadImage = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const file = await File.create(fileObj);
    console.log(file);
    res
      .status(200)
      .json({ path: `http://localhost:${process.env.PORT}/file/${file._id}` });
  } catch (error) {
    console.error("Error", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const downloadImage = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);

    file.downloadContent++;

    await file.save();

    res.download(file.path, file.name);
  } catch (error) {
    console.log(error.message);
    return res.satus(500).json({ error: error.message });
  }
};
