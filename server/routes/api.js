const express = require('express');
const router = express.Router();
const Video = require('./../models/video');

// var mongoClient = require('mongodb').MongoClient;
// mongoClient.connect(
//     db,
//     { useNewUrlParser: true },
//     (err, db) => {
//       //neu ket noi khong thanh cong thi in ra loi
//       if (err) throw err;
//       //neu thanh cong thi log ra thong bao
//       console.log('Ket noi thanh cong');
//       // db.close();
//       console.log('close thanh cong');
//     }
// );

const mongoose = require('mongoose');
const db = 'mongodb://127.0.0.1:27017/task';

mongoose.Promise = global.Promise;
mongoose.connect(
  db,
  { useNewUrlParser: true },
  (err, db) => {
    if (err) throw err;
    console.log('Ket noi thanh cong');
    // db.close();
  }
);

// router.get('/', (req, res) => {
//   res.send('api works');
// });

router.get('/videos', (req, res) => {
  console.log('Get request for all videos');
  Video.find({})
  .exec( (err, videos) => {
    if (err) {
      console.log('Error retriving videos');
    } else {
      res.json(videos);
      // res.send('api video')
    }
  })
});

module.exports = router;
