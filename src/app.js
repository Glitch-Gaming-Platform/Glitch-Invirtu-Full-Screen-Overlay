let box_id = BWProperties.namespace + '-glitch-overlay-box';

let image_id = BWProperties.namespace + '-image_id';

function init() {

    var child = document.getElementById(image_id);

    if (child) {
        child.parentNode.removeChild(child);
    }

    if (BWEnvironment.overlay_image) {

        let element = document.createElement('img');

        element.setAttribute('src', BWEnvironment.overlay_image);
        element.setAttribute('class', 'img-fluid');
        element.setAttribute('id', image_id);

        document.getElementById(box_id).append(element);

    }
}

init();
