const express = require('express');
const router = express.Router();
const Video = require('./../models/video');

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
    }
  })
});

router.get('/videos/:id', (req, res) => {
  console.log('Get request for the single video');
  Video.findById(req.params.id)
  .exec( (err, videos) => {
    if (err) {
      console.log('Error retriving video');
    } else {
      res.json(videos);
    }
  })
});

router.post('/video', (req, res) => {
  console.log('Post request for new video');
  var newVideo = new Video();
  newVideo.title = req.body.title;
  newVideo.url = req.body.url;
  newVideo.description = req.body.description;
  newVideo.save( (err, insertVideo ) => {
    if (err) {
      console.log('Error create video');
    } else {
      res.json(insertVideo);
    }
  });
});

router.put('/video/:id', (req, res) => {
  console.log('Update request for new video');
  Video.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: req.body.title,
        url: req.body.url,
        description: req.body.description
      }
    },
    {
      new: true
    },
    (err, updateVideo) => {
      if (err) {
        res.send('Error update video');
      } else {
        res.json(updateVideo);
      }
    }
  )
});

router.delete('/video/:id', (req, res) => {
  console.log('Delete request for new video');
  Video.findByIdAndRemove(
    req.params.id,
    (err, deleteVideo) => {
      if (err) {
        res.send('Error update video');
      } else {
        res.json(deleteVideo);
      }
    }
  );
});

module.exports = router;
