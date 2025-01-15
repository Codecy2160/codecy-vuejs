function scrollToAbout() {
    const aboutElement = document.querySelector('#about');
    const offsetTop = aboutElement.offsetTop;
    window.scrollTo({ top: offsetTop - 20, behavior: 'smooth' }); // Adjust the 20 to the desired offset
}