/**
 * Created by fcampinho on 01/07/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import BannerStore from '../stores/BannerStore';
import BannerActions from '../actions/BannerActions';

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = BannerStore.getState();
        this.onChange = this.onChange.bind(this);

        // this.handleResize = this.handleResize.bind(this);
    }

/*
    handleResize(e) {
        this.state.windowWidth = window.innerWidth;
        this.setState(this.state);
    }
*/

    componentDidMount() {
        BannerStore.listen(this.onChange);
        BannerActions.getBanner();

        // window.addEventListener('resize', this.handleResize);
        //this.state.windowWidth = window.innerWidth;
    }

    componentWillUnmount() {
        BannerStore.unlisten(this.onChange);
        // window.removeEventListener('resize', this.handleResize);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let displayBanner = this.state.banners.map((banner, index) => {
            return (
                <div key={banner.id} className={index == 2 ? 'col-lg-4 visible-lg nopadding' : index == 1 ? 'col-lg-4 col-md-6 visible-lg visible-md nopadding' : 'col-lg-4 col-md-6 col-sm-12 col-xs-12 nopadding'}>
                    <Link to={'/mediadetail/' + banner.type + "/" + banner.id + "/" + banner.title}>
                        <img className="img-responsive nopadding" src={banner.banner}
                             alt={banner.title}></img>
                    </Link>
                </div>
            );
        });
        return (
            <div className='container-fluid'>
                <div className='row-fluid no-gutter'>
                    {displayBanner}
                </div>
            </div>
        );
    }
}

export default Banner