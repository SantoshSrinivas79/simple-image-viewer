$( document ).ready(function() {
    $.get("/getImages", function(data) {
        var images = JSON.parse(data)["images"];
        for (i = 0; i < images.length; i++) {
            document.getElementById("imageList").innerHTML += "<a target='_blank' href=\"images/my-images/" + images[i] + "\"> <image src=\"images/my-images/" + images[i] + "\"/></a>";
        }
    });
});