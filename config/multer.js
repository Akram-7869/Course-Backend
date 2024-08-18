const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Create a path to the uploads directory relative to the current file's location
        const uploadDir = path.join(__dirname, '../uploads/');
        // Ensure the uploads directory exists
        if (!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir); // specify the destination directory
    },
    filename: function (req, file, cb) {
        // Use the current timestamp to create a unique filename with the original file extension
        cb(null, Date.now() + path.extname(file.originalname));
    }
});



const upload = multer({ storage: storage });

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)){
    fs.mkdirSync(uploadsDir);
}

module.exports = upload;
