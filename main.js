var app = new Vue({
    el: '#root',
    data: {
        header_boxes:[
            {
                type: "link",
                icon_class: "icon-1 fas fa-home",
                h3: "",
                p: "",
            },
            {
                type: "link",
                icon_class: "icon-2 fab fa-pagelines",
                h3: "Treatments",
                p: "Face & Body",
            },
            {
                type: "link",
                icon_class: "icon-2 fas fa-male",
                h3: "About",
                p: "Our Team",
            },
            {
                type: "logo",
                img_src: "img/avada-spa-logo-new.png",
            },
            {
                type: "link",
                icon_class: "icon-2 fas fa-heart",
                h3: "Journal",
                p: "Tips & Tricks",
            },
            {
                type: "link",
                icon_class: "icon-2 fas fa-bookmark",
                h3: "Book now",
                p: "Special offers",
            },
            {
                type: "link",
                icon_class: "icon-1 fas fa-plus",
                h3: "",
                p: "",
            },

        ],
        flex_box3: [
            {
                icon_class: "icon-2 fas fa-sign-language",
                p: "Massages",
            },
            {
                icon_class: "icon-2 far fa-smile",
                p: "Therapy",
            },
            {
                icon_class: "icon-2 fas fa-heart",
                p: "Relaxing",
            },
            {
                icon_class: "icon-2 far fa-moon",
                p: "Meditation",
            },
            {
                icon_class: "icon-2 far fa-snowflake",
                p: "Natural Beauty",
            },
        ],
    },
    methods: {

    },
    mounted(){

    },
});
