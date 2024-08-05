import multer from "multer";

const storage = multer.diskStorage({
  //'cb':- call-back
  destination: function (req, file, cb) {
    //req jo user se aata hai // file jo ki multer ke pass hi hota hai //Express se json data to configuration kar diya but file nahi hoti hai isi liye multer used hota hai taki file bich me or ye options used kar saku
    cb(null, "./public/temp"); //cb(first oarameter null hai, konsi folder dena hai jisame sari file rakhana hai)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); //jo user file diya hai usi name se save rakha lenge
  },
});

export const upload = multer({
  storage,
});
