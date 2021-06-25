const separationLineVert = document.querySelector('.separation-line_direction_vertical');
const separationLineHor = document.querySelector('.separation-line_direction_horizontal');
const image = document.querySelector('.image');
const imageSummer = document.querySelector('.image_season_summer');
const imageWinter = document.querySelector('.image_season_winter');
const imageSpring = document.querySelector('.image_season_spring');
const imageAutumn = document.querySelector('.image_season_autumn');

separationLineVert.onmousedown = function (event) {
    event.preventDefault();

    let shiftX = event.clientX - separationLineVert.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - image.getBoundingClientRect().left;
        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = image.offsetWidth - separationLineVert.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }
        imageSpring.style.width = newLeft + 'px';
        imageWinter.style.width = image.offsetWidth - newLeft + 'px';
        imageAutumn.style.width = newLeft + 'px';
        imageSummer.style.width = image.offsetWidth - newLeft + 'px';
        separationLineVert.style.left = newLeft + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

};
separationLineHor.onmousedown = function (event) {
    event.preventDefault();

    let shiftY = event.clientY - separationLineHor.getBoundingClientRect().top;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newTop = event.clientY - shiftY - image.getBoundingClientRect().top;
        if (newTop < 0) {
            newTop = 0;
        }
        let rightEdge = image.clientHeight - separationLineHor.clientHeight;
        if (newTop > rightEdge) {
            newTop = rightEdge;
        }

        imageAutumn.style.height = newTop + 'px';
        imageSpring.style.height = image.clientHeight - newTop + 'px';
        imageSummer.style.height = newTop + 'px';
        imageWinter.style.height = image.clientHeight - newTop + 'px';
        separationLineHor.style.top = newTop + 'px';
    }
    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

};