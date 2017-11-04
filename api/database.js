/**
 * Created by fcampinho on 08/07/2016.
 */

import promise from 'bluebird';
import config from './config';

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = config;
var db = pgp(connectionString);

module.exports = {
    getAllAdvertisements: getAllAdvertisements,
    getAllMedias: getAllMedias,
    getMedia: getMedia,
    getAllSeries: getAllSeries,
    getAllEpisodes: getAllEpisodes,
    getEpisodeDetail: getEpisodeDetail,
    getAllDisks: getAllDisks,
    getDisk: getDisk,
    getMusics: getMusics,
    postContactus: postContactus,
    getMediaType: getMediaType
};

function getAllAdvertisements(req, res, next) {
    let strQuery = req.params.advertiseType == 2 ? "select media.id, title, url, cover, banner, media.type from media inner join advertisement on media.id = advertisement.media_id where advertisement.type = 2 or advertisement.type = 3 order by advertisement.created_at desc limit 3" : "select * from advertisement where type = 1";
    db.any(strQuery)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Banners'
                });
        })
        .catch(function (err) {
            console.log(err);
            return next(err);
        });
}

var mediaTypes = [
    {key: "movies", value: 1},
    {key: "season", value: 2},
    {key: "shows", value: 3},
    {key: "animations", value: 4},
    {key: "music", value: 5},
    {key: "documentaries", value: 6}
];

function getAllMedias(req, res, next) {
    let strQuery = "Select * from media where type = $1 ";
    let mediaType = mediaTypes.filter(mediaType => mediaType.key == req.params.mediaType)[0].value;

    db.any(strQuery, mediaType)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Medias'
                });
        })
        .catch(function (err) {
            console.log(err);
            return next(err);
        });
}

function getMediaType(req, res, next) {
    let strQuery = "select type, count(type) qty from media group by type order by type";

    db.any(strQuery)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Types'
                });
        })
        .catch(function (err) {
            console.log(err);
            return next(err);
        });
}

function getAllEpisodes(req, res, next) {
    let strQuery = '';
    let serie_id = 0;

    if (req.params.media_id == 0) {
        strQuery = "Select media.* from serie inner join media on serie.id = media.serie_id where serie.serie_id = $1 order by media.id ";
        serie_id = req.params.serie_id;
    } else {
         strQuery = "Select media.* from media where serie_id = $1 order by media.id ";
         serie_id = req.params.serie_id;
    }

    db.any(strQuery, [serie_id])
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Episodes from a Season'
                });
        })
        .catch(function (err) {
            console.log(err);
            return next(err);
        });
}

function getEpisodeDetail(req, res, next) {
    let strQuery = '';
    let id = 0;

    if (req.params.media_id == 0) {
        strQuery = 'Select media.* from serie inner join media on serie.id = media.serie_id where serie.serie_id = $1 order by media.id limit 1';
        id = req.params.serie_id;
    } else {
        strQuery = 'Select * from media where media.id = $1';
        id = req.params.media_id;
    }

    db.any(strQuery, id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved All Series'
                });
        })
        .catch(function (err) {
            console.log(err);
            return next(err);
        });
}

function getAllSeries(req, res, next) {
    let strQuery = 'Select * from serie where serie_id = 0';

    db.any(strQuery)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved All Series'
                });
        })
        .catch(function (err) {
            console.log(err);
            return next(err);
        });
}

function getMedia(req, res, next) {
    let strQuery = '';
    let mediaId = req.params.id;
    strQuery = "Select * from media where id = $1 ";

    db.any(strQuery, mediaId)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Media Play'
                });
        })
        .catch(function (err) {
            console.log(err);
            return next(err);
        });
}

function getAllDisks(req, res, next) {
    let strQuery = "Select * from disk ";

    db.any(strQuery)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Disks'
                });
        })
        .catch(function (err) {
            console.log(err);
            return next(err);
        });
}

function getDisk(req, res, next) {
    let strQuery = "Select * from disk where id = $1";
    let id = req.params.id;

    db.any(strQuery, id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Disk'
                });
        })
        .catch(function (err) {
            console.log(err);
            return next(err);
        });
}

function getMusics(req, res, next) {
    let strQuery = "Select * from media where disk_id = $1 order by title";
    let id = req.params.id;

    db.any(strQuery, id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Musics'
                });
        })
        .catch(function (err) {
            console.log(err);
            return next(err);
        });
}

function postContactus(req, res, next) {
    db.none('insert into contactus (name, email, phone_number, message, created_at)' +
        'values(${name}, ${email}, ${phonenumber}, ${message}, now())',
        req.body)
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Mensagem registrada com sucesso!'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}