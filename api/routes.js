/**
 * Created by fcampinho on 14/07/2016.
 */
var express = require('express');
var router = express.Router();
var db = require('./database');

router.get('/advertisements/:advertiseType', db.getAllAdvertisements);

router.get('/disks/', db.getAllDisks);
router.get('/disks/:id', db.getDisk);
router.get('/disks/:id/musics', db.getMusics);

router.get('/medias/:mediaType', db.getAllMedias);
router.get('/medias/:mediaType/:id', db.getMedia);
router.get('/menu/', db.getMediaType);

router.get('/series/', db.getAllSeries);
router.get('/series/season/:serie_id/:media_id', db.getAllEpisodes);
router.get('/series/episode/:serie_id/:media_id', db.getEpisodeDetail);

router.post('/contactus/', db.postContactus);

module.exports = router;
