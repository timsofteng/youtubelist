import axios from 'axios';

const KEY = 'AIzaSyCbLpF_br4MiFGgRz6Lmsjaw2Z8qMnRBqU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})