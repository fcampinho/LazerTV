/**
 * Created by fcampinho on 01/07/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import MediaListStore from '../stores/MediaListStore';
import MediaListActions from '../actions/MediaListActions';
import { defineMedia } from './MediaType';

class MediaList extends React.Component {
    constructor(props) {
        super(props);
        this.state = MediaListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        MediaListStore.listen(this.onChange);
        if (this.props.params === undefined) {
            var payload = {mediaType: this.props.mediaType};
            MediaListActions.getMediaList(payload);
        } else {
            MediaListActions.getMediaList(this.props.params);
        }
    }

    componentWillUnmount() {
        MediaListStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params !== undefined && this.props.params !== undefined) {
            if (prevProps.params.mediaType !== this.props.params.mediaType) {
                MediaListActions.getMediaList(this.props.params);
            }
        }
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let mediaList = this.state.medias.map((media, index) => {
            return (
                <div key={media.id} className='col-lg-2 col-md-3 col-sm-4 col-xs-6 padding-botton'>
                    <Link to={'/mediadetail/' + defineMedia(media.type) + "/" + media.id + "/" + media.title}>
                        <img className="img-responsive" src={media.cover} alt={media.title}/>
                    </Link>
                </div>
            );
        });
        return (
            <div className='container-fluid'>
                <h5>{this.props.params === undefined ? 'Filmes recentes' : 'Recentes'}</h5>
                <div className='row'>
                    {mediaList}
                </div>
            </div>
        );
    }
}

export default MediaList