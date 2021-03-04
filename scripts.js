var images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function showImage(imgNum) {
    document.getElementById("image0-enlarged").style.display = "none";

    var imageId = "image" + imgNum.toString() + "-enlarged";
    var x = document.getElementById(imageId);
    x.style.display = "inline-block";

    for (var i = 0; i < images.length; i++) {
        if (i !== imgNum) {
            var removeId = "image" + i.toString() + "-enlarged";
            var y = document.getElementById(removeId);
            if (y.style.display == "inline-block") {
                y.style.display = "none";
            }
        }
    }
}