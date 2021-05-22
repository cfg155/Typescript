var header = document.querySelector('.acc-1 .header');
var body = document.querySelector('.acc-1 .body');
var isCollapsed = header.getAttribute('data-collapsed') === 'true';
var bodyScrollHeight = body.scrollHeight;
var py = 15;
var accordionTransition = function (scrollHeight, py) {
    // Set body height
    body.style.maxHeight = scrollHeight + (py * 2) + "px";
    body.style.padding = py + "px 10px";
};
accordionTransition(bodyScrollHeight, py);
header.addEventListener('click', function (e) {
    var target = e.target;
    var isCollapsed = header.getAttribute('data-collapsed') === 'true';
    if (isCollapsed) {
        target.setAttribute('data-collapsed', 'false');
        accordionTransition(0, 0);
    }
    else {
        target.setAttribute('data-collapsed', 'true');
        accordionTransition(bodyScrollHeight, py);
    }
});
