/**
 * Created by fcampinho on 01/07/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import MediaDetailStore from '../stores/MediaDetailStore';
import MediaDetailActions from '../actions/MediaDetailActions';
import MediaList from './MediaList'

class MediaDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = MediaDetailStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        MediaDetailStore.listen(this.onChange);
        MediaDetailActions.getMediaDetail(this.props.params);
    }

    componentWillUnmount() {
        MediaDetailStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.mediaId !== this.props.params.mediaId) {
            this.setState({media: []});
            MediaDetailActions.getMediaDetail(this.props.params);
        }
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let MediaBanner = (
            <div key="banner{this.state.media.id}" className="video-thumbnail">
                <Link
                    to={'/mediaplay/' + this.state.media.type + "/" + this.state.media.id + "/" + this.state.media.title}>
                    <i className="glyphicon glyphicon-play-circle"></i>
                    <img className="img-responsive" src={this.state.media.banner} alt={this.state.media.title}></img>
                </Link>
            </div>
        );

        let MediaDetail = (
            <div key={this.state.media.id}>
                <h4>{this.state.media.title}</h4>
                <div className="text-justify padding-botton" dangerouslySetInnerHTML={{__html: this.state.media.storyline}} />
                <div className="text-left padding-botton"
                     dangerouslySetInnerHTML={{__html: this.state.media.detail}}/>
            </div>
        );

        return (
            <div className='container-fluid'>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="panel panel-default nopadding painel-text col-lg-6 col-md-4 col-sm-3 col-xs-12">
                            <div className="panel-body scrollable">
                                {MediaDetail}
                            </div>
                        </div>
                        <div className='nopadding col-lg-6 col-md-8 col-sm-9 col-xs-12'>
                            {MediaBanner}
                        </div>
                    </div>
                </div>
                <div className="container-fluid row">
                    <MediaList mediaType={this.props.params.mediaType} />
                </div>
            </div>
        );
    }
}

export default MediaDetail