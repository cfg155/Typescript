var someElement = document.querySelector('.foo');
console.log('someElement', someElement);
// Adding listener
someElement.addEventListener('click', function (event) {
    var target = event.target;
    console.log('event', target);
});
