document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");

    window.addEventListener("beforeunload", function () {
        loader.style.display = "block";
    });

    window.addEventListener("load", function () {
        loader.style.display = "none";
    });
});

