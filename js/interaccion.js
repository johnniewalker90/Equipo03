var scrollToTop = (function() {
    var scrollButton = document.getElementById("scrollToTop")
    showButton = scrollButton.dataset.upshow || 600,
        scrollSpeed = scrollButton.dataset.upspeed || 1000;

    function scrollTop(b) {
        function a(d) {
            c += Math.PI / (b / (d - e));
            c >= Math.PI && window.scrollTo(0, 0);
            0 !== window.scrollY && (window.scrollTo(0, Math.round(scrollTime + scrollTime * Math.cos(c))), e = d, window.requestAnimationFrame(a))
        }
        var scrollTime = window.scrollY / 2,
            c = 0,
            e = performance.now();
        window.requestAnimationFrame(a)
    }
    var scrollPosition = window.scrollY;
    window.addEventListener("scroll", function() {
        scrollPosition = window.scrollY;
        showButton < scrollPosition ? scrollButton.classList.add("visible") : scrollButton.classList.remove("visible")
    });
    scrollButton.onclick = function() {
        scrollTop(scrollSpeed)
    }
})();


/*  

var scrollToTop = function() {

    function o(o) {
        function n(t) { e += Math.PI / (o / (t - l)), e >= Math.PI && window.scrollTo(0, 0), 0 !== window.scrollY && (window.scrollTo(0, Math.round(s + s * Math.cos(e))), l = t, window.requestAnimationFrame(n)) }
        var s = window.scrollY / 2,
            e = 0,
            l = performance.now();
        window.requestAnimationFrame(n)
    }
    var n = document.getElementById("scrollToTop");
    showButton = n.dataset.upshow || 600, scrollSpeed = n.dataset.upspeed || 1e3;
    var s = window.scrollY;
    window.addEventListener("scroll", function() { s = window.scrollY, showButton < s ? n.classList.add("visible") : n.classList.remove("visible") }), n.onclick = function() { o(scrollSpeed) }
}();  

*/

/* desplazamiento suave dentro de la pagina*/