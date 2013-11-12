/**
 * responsiveImage.js v1.0.0
 */
(function() {

    var responsiveContentImages = document.getElementsByClassName('responsive-image'),
        responsiveImages = [],
        responsiveImageslength = responsiveContentImages.length,
        responsiveSize = [320, 768, 1024, 1366, 1680, 1920],
        responsiveSizeName = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

    function changeBackground() {
        var image = null,
            i = 0,
            name = getSizeName();

        for (; i < responsiveImageslength; i++) {
            image = responsiveImages[i];
            image.src = image.dataset.path + '/' + name + '/' + image.dataset.file;

        }
    }

    function getSizeName() {
        var i = 0,
            width = window.innerWidth;

        for (; i < responsiveSize.length; i++) {
            if (width <= responsiveSize[i]) {
                return responsiveSizeName[i]
            }
        }

        return responsiveSizeName[responsiveSize.length - 1];
    }

    function createImage() {
        var content = null,
            img = null,
            i = 0,
            name = getSizeName();

        for (; i < responsiveImageslength; i++) {
            content = responsiveContentImages[i];
            img = document.createElement("img");
            img.src = content.dataset.path + '/' + name + '/' + content.dataset.file;
            img.alt = content.dataset.alt;
            img.dataset.path = content.dataset.path;
            img.dataset.file = content.dataset.file;
            content.appendChild(img);
            responsiveImages.push(img);
        }
    }

    createImage();

    window.onresize = function() {
        changeBackground();
    }

})();
