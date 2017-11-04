/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';

class MediaListActions {
    constructor() {
        this.generateActions(
            'getMediaListSuccess',
            'getMediaListFail'
        );
    }

    getMediaList(payload) {
        let url = '';
        if (payload.mediaType == 'season') url = '/api/medias/' + payload.mediaType + '/' + payload.serieId;
        else url = '/api/medias/' + payload.mediaType;

        $.ajax({ url: url })
            .done((data) => {
                this.getMediaListSuccess(data);
            })
            .fail((jqXhr) => {
                this.getMediaListFail(jqXhr);
            });
    }
}

export default alt.createActions(MediaListActions);