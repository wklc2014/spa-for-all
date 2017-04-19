import axios from 'axios';
import api from './api.js';

const __URL__ = api.increment.url;
const __METHOD__ = api.increment.method;

export default function ServiceIncrement(data, cb) {
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
