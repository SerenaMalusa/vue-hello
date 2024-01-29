const { createApp } = Vue;

createApp ({
    data() {
        return {
            text : `Because cats!`,
            imgsUrls : [
                'https://www.breatheazy.co.uk/wp-content/uploads/2023/09/Untitled-design-35-1080x675.png',
                './img/cat-christmas-tree-lights.jpg',
                'https://mcdn.wallpapersafari.com/medium/6/0/jxu8wX.jpg',
                'https://images5.alphacoders.com/287/287909.jpg'
            ]
        }
    }
}).mount('#app')