function toggleMobileNav() {
    var mobileNav = document.querySelector('.mobnav');
    var hamburgerBtn = document.querySelector('.hamburger');
    var closeBtn = document.querySelector('.close-btn');

    if (mobileNav.style.display === 'block') {
        mobileNav.style.display = 'none';
        hamburgerBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    } else {
        mobileNav.style.display = 'block';
        hamburgerBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    }
}