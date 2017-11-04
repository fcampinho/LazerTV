/**
 * Created by fcampinho on 20/08/2016.
 */

var mediaTypes = [
    {key: 1, value: "movies"},
    {key: 2, value: "season"},
    {key: 3, value: "shows"},
    {key: 4, value: "animations"},
    {key: 5, value: "music"},
    {key: 6, value: "documentaries"}
];

function defineMedia(valType) {
    let mediaType = mediaTypes.filter(mediaType => mediaType.key == valType)[0].value;
    return mediaType;
};


export {defineMedia};

