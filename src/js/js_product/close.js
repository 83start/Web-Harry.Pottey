
window.onload = function () {
    (function () {
        [].slice.call(document.querySelectorAll('.checkout')).forEach(function (el) {
            var openCtrl = el.querySelector('.checkout__button'),
                closeCtrls = el.querySelectorAll('.checkout__cancel');

            openCtrl.addEventListener('click', function (ev) {
                ev.preventDefault();
                classie.add(el, 'checkout--active');
            });

            [].slice.call(closeCtrls).forEach(function (ctrl) {
                ctrl.addEventListener('click', function () {
                    classie.remove(el, 'checkout--active');
                });
            });
        });
    })();
}

