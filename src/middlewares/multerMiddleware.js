const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '../public/img/avatar'));
  },
  filename: (req, file, cb) => {
    let fileName = Date.now() + '-' + file.originalname;
    cb(null, fileName);
  },
});

const uploadFile = multer({ storage });

module.exports = uploadFile;
