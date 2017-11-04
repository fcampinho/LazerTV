/**
 * Created by fcampinho on 01/07/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import MediaPlayStore from '../stores/MediaPlayStore';
import MediaPlayActions from '../actions/MediaPlayActions';

class MediaPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = MediaPlayStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        MediaPlayStore.listen(this.onChange);
        MediaPlayActions.getMedia(this.props.params);
    }

    componentWillUnmount() {
        MediaPlayStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let MediaPlay = (
            <div key={this.state.media.id} className='embed-responsive embed-responsive-16by9'>
                <video className="embed-responsive-item" controls autoPlay>
                    <source src={this.state.media.url} type="video/mp4" />
                </video>
            </div>
        );

        return (
            <div className='container'>
                    {MediaPlay}
            </div>
        );
    }
}

export default MediaPlay