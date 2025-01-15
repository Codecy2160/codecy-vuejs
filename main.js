const app = new Vue({
    el: '#app',
    methods: {
        scrollToAbout() {
            const aboutElement = this.$el.querySelector('#about');
            const offsetTop = aboutElement.offsetTop;
            window.scrollTo({ top: offsetTop - 20, behavior: 'smooth' });
        }
    }
});