/**
 * Created by fcampinho on 30/06/2016.
 */
import React from 'react';
import Banner from './Banner'
import MediaList from './MediaList'

class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Banner />
                <MediaList mediaType="movies" />
            </div>
        );
    }
}

export default Home;