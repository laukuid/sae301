document.addEventListener('DOMContentLoaded', function () {
    var hamburgerIcon = document.querySelector('.Hamburger_icon');
    var navMobile = document.querySelector('.nav-mobile');

    hamburgerIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        navMobile.classList.toggle('active-mobile');
    });

    document.addEventListener('click', function (event) {
        var isClickInsideNavMobile = navMobile.contains(event.target);

        if (!isClickInsideNavMobile && navMobile.classList.contains('active-mobile')) {
            navMobile.classList.remove('active-mobile');
        }
    });
});

    function togglemenuderoulant() {
    var espacesDiv = document.querySelector('.espaces');
    var expandIcon = document.getElementById('expandIcon');

    espacesDiv.classList.toggle('desactive-espaces');
    expandIcon.classList.toggle('rotate180');
}