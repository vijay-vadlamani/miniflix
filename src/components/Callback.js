import React from 'react';
import { setIdToken, setAccessToken } from '../utilities/AuthService';

class Callback extends React.Component {
    componentDidMount() {
        setAccessToken();
        setIdToken();
        window.location.href = '/';
    }

    render() {
        return null;
    }
    
}

export default Callback;