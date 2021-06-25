const separationLine = document.querySelector('.separation-line');
const image = document.querySelector('.image');
const imageUnder = document.querySelector('.image_location_over');

separationLine.onmousedown = function (event) {
    event.preventDefault();

    let shiftX = event.clientX - separationLine.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - image.getBoundingClientRect().left;
        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = image.offsetWidth - separationLine.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }
        imageUnder.style.width = newLeft + 'px';
        separationLine.style.left = newLeft + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

};

// separationLine.ondragstart = function () {
//     return false;
// };