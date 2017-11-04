/**
 * Created by fcampinho on 01/07/2016.
 */
/**
 * Created by fcampinho on 01/07/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import DiskListStore from '../stores/DiskListStore';
import DiskListActions from '../actions/DiskListActions';

class DiskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = DiskListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        DiskListStore.listen(this.onChange);
        DiskListActions.getDisks();
    }

    componentWillUnmount() {
        DiskListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let diskList = this.state.disks.map((disk, index) => {
            return (
                <div key={disk.id}>
                    <div className='col-lg-2 col-md-3 col-sm-4 col-xs-6 padding-botton'>
                        <Link to={'/diskplay/' + disk.id}>
                            <img className="img-responsive" src={disk.cover} alt={disk.title} />
                        </Link>
                    </div>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='list-group'>
                    {diskList}
                </div>
            </div>
        );
    }
}

export default DiskList