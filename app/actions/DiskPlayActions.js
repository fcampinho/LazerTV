/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';

class DiskPlayActions {
    constructor() {
        this.generateActions(
            'getDiskPlaySuccess',
            'getDiskPlayFail',
            'getDiskMusicsSuccess',
            'getDiskMusicsFail'
        );
    }

    getDisk(payload) {
        let url = '/api/disks/' + payload.diskId;

        $.ajax({ url: url })
            .done((data) => {
                this.getDiskPlaySuccess(data);
            })
            .fail((jqXhr) => {
                this.getDiskPlayFail(jqXhr);
            });
    }

    getMusics(payload) {
        let url = '/api/disks/' + payload.diskId + '/musics';

        $.ajax({ url: url })
            .done((data) => {
                this.getDiskMusicsSuccess(data);
            })
            .fail((jqXhr) => {
                this.getDiskMusicsFail(jqXhr);
            });
    }
}

export default alt.createActions(DiskPlayActions);