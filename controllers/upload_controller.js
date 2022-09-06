var app = require('../app');

exports.uploadImage = async (req, res, next) => {
  const file = req.files.file;

  file.mv(`${app.basePath}/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `http://localhost:3001/uploads/${file.name}` });
  });
};

exports.displayImage = async (req,res,next) => {

}
