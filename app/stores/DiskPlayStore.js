/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';
import DiskPlayActions from '../actions/DiskPlayActions';

class DiskPlayStore {
    constructor() {
        this.bindActions(DiskPlayActions);
        this.disk = '';
        this.musics = [];
        this.src = ''
        this.currentPlay = -1;
        this.icons = [];
    }

    onGetDiskPlaySuccess(api) {
        var {data} = api;
        this.disk = data[0];
    }

    onGetDiskPlayFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }

    onGetDiskMusicsSuccess(api) {
        var {data} = api;

        for (var i = 0; i < data.length; i++) {
            this.icons[i] = "glyphicon glyphicon-play";
        }

        this.musics = data;
    }

    onGetDiskMusicsFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(DiskPlayStore);