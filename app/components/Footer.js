/**
 * Created by fcampinho on 01/07/2016.
 */
import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <h3 className='lead'>Todos os direitos reservados a LazerTV</h3>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;