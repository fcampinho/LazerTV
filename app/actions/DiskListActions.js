/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';

class DiskListActions {
    constructor() {
        this.generateActions(
            'getDiskListSuccess',
            'getDiskListFail'
        );
    }

    getDisks() {
        let url = '/api/disks/';

        $.ajax({ url: url })
            .done((data) => {
                this.getDiskListSuccess(data);
            })
            .fail((jqXhr) => {
                this.getDiskListFail(jqXhr);
            });
    }
}

export default alt.createActions(DiskListActions);