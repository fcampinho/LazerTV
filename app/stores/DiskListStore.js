/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';
import DiskListActions from '../actions/DiskListActions';

class DiskListStore {
    constructor() {
        this.bindActions(DiskListActions);
        this.disks = [];
    }

    onGetDiskListSuccess(api) {
        var {data} = api;
        this.disks = data;
    }

    onGetDiskListFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(DiskListStore);