(function () {
    'use strict';

    const poem = document.querySelector('#poem');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const myVideo = document.querySelector('#myVideo');
    const fs = document.querySelector('.fa-expand');

    setInterval(checkTime, 1000);

    function checkTime() {
        if (1 < myVideo.currentTime && myVideo.currentTime < 3) {
            line1.className = 'showing';
        } else {
            line1.className = 'hidden';
        }

        if (4 < myVideo.currentTime && myVideo.currentTime < 6) {
            line2.className = 'showing';
        } else {
            line2.className = 'hidden';
        }

        if (7 < myVideo.currentTime && myVideo.currentTime < 9) {
            line3.className = 'showing';
        } else {
            line3.className = 'hidden';
        }

        if (10 < myVideo.currentTime && myVideo.currentTime < 12) {
            line4.className = 'showing';
        } else {
            line4.className = 'hidden';
        }
    }

    fs.addEventListener('click', function () {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });
})();