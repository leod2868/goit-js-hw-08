import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');
const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (time) {
    localStorage.setItem(STORAGE_KEY, time.seconds);
};
player.on('timeupdate', throttle((onPlay), 1000));

function helloVideo(e) {
    const saveVideo = localStorage.getItem(STORAGE_KEY);
    if(saveVideo)  {}
}

