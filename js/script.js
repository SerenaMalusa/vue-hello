const { createApp } = Vue;

createApp ({
    data() {
        return {
            text : 'ciao da me',
            imgUrl : 'https://www.breatheazy.co.uk/wp-content/uploads/2023/09/Untitled-design-35-1080x675.png'
        }
    }
}).mount('#app')