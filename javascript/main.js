'use strict';
const zone = document.querySelector(".zone");
const video = document.getElementById("video");


zone.addEventListener('dragenter', e => {
    console.log('enter',e);
})

zone.addEventListener('dragover',e => {
    e.preventDefault();
    console.log('over',e);
})

zone.addEventListener('drop',e => console.log('drop',e));

zone.addEventListener('dragleave',e => console.log('leave',e));
