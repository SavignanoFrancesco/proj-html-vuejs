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
        footer_boxes: [
            {
                type: 'logo',
                src: 'img/avada-spa-logo-new.png'
            },
            {
                type: 'credits',
                p: 'copyright 2012 - 2020 | avada theme by themefusion | all rights reserved | powered by wordpress'
            },
            {
                type: 'socials',
                icons: [
                    {
                        icon_class: 'fab fa-facebook-f'
                    },
                    {
                        icon_class: 'fab fa-twitter'
                    },
                    {
                        icon_class: 'fab fa-instagram'
                    },
                    {
                        icon_class: 'fab fa-youtube'
                    },
                ]
            }


        ]
    },
    methods: {
        //toggle per definire quale voce della navbar è attiva
        colorActive(index){
            //al click tutte le proprietà active assumono valore false
            for (var i = 0; i < this.header_boxes.length; i++) {
                this.header_boxes[i].active = false;
            }

            // la voce del menu cliccata diventa attiva
            this.header_boxes[index].active = true;
        }
    },
    mounted(){

    },
});
