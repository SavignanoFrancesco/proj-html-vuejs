var app = new Vue({
    el: '#root',
    data: {
        header_boxes:[
            {
                type: "link",
                icon_class: "fas fa-home",
                h3: "",
                p: "",
                active: true,
            },
            {
                type: "link",
                icon_class: "fab fa-pagelines",
                h3: "Treatments",
                p: "Face & Body",
                active: false,
            },
            {
                type: "link",
                icon_class: "fas fa-male",
                h3: "About",
                p: "Our Team",
                active: false,
            },
            {
                type: "logo",
                img_src: "img/avada-spa-logo-new.png",
            },
            {
                type: "link",
                icon_class: "fas fa-heart",
                h3: "Journal",
                p: "Tips & Tricks",
                active: false,
            },
            {
                type: "link",
                icon_class: "fas fa-bookmark",
                h3: "Book now",
                p: "Special offers",
                active: false,
            },
            {
                type: "link",
                icon_class: "fas fa-plus",
                h3: "",
                p: "",
                active: false,
            },

        ],
        flex_box3: [
            {
                icon_class: "fas fa-sign-language",
                p: "Massages",
            },
            {
                icon_class: "far fa-smile",
                p: "Therapy",
            },
            {
                icon_class: "fas fa-heart",
                p: "Relaxing",
            },
            {
                icon_class: "far fa-moon",
                p: "Meditation",
            },
            {
                icon_class: "far fa-snowflake",
                p: "Natural Beauty",
            },
        ],
    },
    methods: {
        //toggle per definire quale voce della navbar è attiva
        colorActive(index){
            for (var i = 0; i < this.header_boxes.length; i++) {
                this.header_boxes[i].active = false;
            }
            if (this.header_boxes[index].active == false) {
                this.header_boxes[index].active = true;
            }else{
                this.header_boxes[index].active = false;
            }

        }
    },
    mounted(){

    },
});
