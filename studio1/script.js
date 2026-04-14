(function () {
    'use strict';

    const video = document.querySelector('#video');
    const expandBtn = document.querySelector('.fa-expand');

    expandBtn.addEventListener('click', function () {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    video.addEventListener('loadeddata', function () {
        console.log('Video is ready');
    });
})();