/**
 * Created by fcampinho on 01/07/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import Navbar from './Navbar';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar />
            </header>
        );
    }
}

export default Header;