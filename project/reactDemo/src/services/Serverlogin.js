import axios from 'axios';
import api from './api.js';

const __URL__ = api.login.url;
const __METHOD__ = api.login.method;

export default function ServiceLogin(data, cb) {
    axios({
        url: __URL__,
        method: __METHOD__,
        params: data
    }).then(response => {
        cb(response.data);
    }).catch((e) => {
        console.log('ServiceLogin is error', e);
    });
}
