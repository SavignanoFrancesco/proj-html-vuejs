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
        icons_container: [
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
        add_treatments_box: [
            {
                add_icon: '+',
                remove_icon: '-',
                h2: 'Oil Massage',
                p: '$62 For 2 Hours',
                span: ' - Lorem ipsum dolor sit amet',
                active: true,
            },
            {
                add_icon: '+',
                remove_icon: '-',
                h2: 'Manicure',
                p: '$62 For 2 Hours',
                span: ' - Lorem ipsum dolor sit amet',
                active: false,
            },
            {
                add_icon: '+',
                remove_icon: '-',
                h2: 'Aromatherapy',
                p: '$62 For 2 Hours',
                span: ' - Lorem ipsum dolor sit amet',
                active: false,
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


        ],
        cards: [
            {
            h2: 'Hydrotherapy',
            p:  'Vestibulum nec velit ante.Praesent dignissim interdum est, in lacinia elit pretium nec.Aliquam erat volutpat.Fusce laoreet mi leo.',
            },
            {
            h2: 'Massage',
            p:  'Vestibulum nec velit ante.Praesent dignissim interdum est, in lacinia elit pretium nec.Aliquam erat volutpat.Fusce laoreet mi leo.',
            },
            {
            h2: 'Aromatherapy',
            p:  'Vestibulum nec velit ante.Praesent dignissim interdum est, in lacinia elit pretium nec.Aliquam erat volutpat.Fusce laoreet mi leo.',
            },
            {
            h2: 'Heat Therapy',
            p:  'Vestibulum nec velit ante.Praesent dignissim interdum est, in lacinia elit pretium nec.Aliquam erat volutpat.Fusce laoreet mi leo.',
            },
            {
            h2: 'Skin Care',
            p:  'Vestibulum nec velit ante.Praesent dignissim interdum est, in lacinia elit pretium nec.Aliquam erat volutpat.Fusce laoreet mi leo.',
            },
            {
            h2: 'Spa Days',
            p:  'Vestibulum nec velit ante.Praesent dignissim interdum est, in lacinia elit pretium nec.Aliquam erat volutpat.Fusce laoreet mi leo.',
            },
            {
            h2: 'Beauty treatments',
            p:  'Vestibulum nec velit ante.Praesent dignissim interdum est, in lacinia elit pretium nec.Aliquam erat volutpat.Fusce laoreet mi leo.',
            },
            {
            h2: 'Residential',
            p:  'Vestibulum nec velit ante.Praesent dignissim interdum est, in lacinia elit pretium nec.Aliquam erat volutpat.Fusce laoreet mi leo.',
            },
        ],
        hamburger_menu: false,
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
        },
        //toggle per definire quale trattamento è stato aggiunto/rimosso
        treatmentToggle(index){
            //disattiva tutti i treatments tranne quello cliccato
            for (var i = 0; i < this.add_treatments_box.length; i++) {
                if (i != index) {
                    this.add_treatments_box[i].active = false;
                }
            }

            //toggle
            if (this.add_treatments_box[index].active == false) {
                this.add_treatments_box[index].active = true;
            }else{
                this.add_treatments_box[index].active = false;
            }

            // console.log(this.add_treatments_box[index].active);

        },
        //ricava le url per le immagini delle cards
        getCardImgUrl(index){
            let img_url = 'card_imgs/Layer-' + (index + 1) + '-new.jpg';
            return img_url;
        },
        //
        hamburgerMenuActive(){
            if (this.hamburger_menu == false) {
                this.hamburger_menu = true;
            }else {
                this.hamburger_menu = false;
            }
            console.log(this.hamburger_menu);
        },
    },
    mounted(){

    },
});
