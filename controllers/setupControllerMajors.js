var Tarots = require('../models/tarotModel');

module.exports = function(app){
        var starterTarots = [
            {
                title: 'Fool',
                name: 'The Fool',
                general: "Pamela Coleman-Smith's artful rendition of The Fool in the Rider-Waite Tarot deck is often used to represent Tarot in general. Early classical versions of The Fool card, however, portray quite a different character -- a person driven by base needs and urges, who has fallen into a state of poverty and deprivation."
                         + "In some earlier instances, The Fool is made out to be a carnival entertainer or a huckster. In others, he is portrayed as decrepit and vulnerable -- as the cumulative result of his delusions and failures. Not until the 20th century do you see the popular Rider-Waite image of The Fool arise -- that of an innocent soul before its fall into matter, untainted by contact with society and all its ills."
                         +"Modern decks usually borrow from the Rider-Waite imagery. Most Fool cards copy the bucolic mountainside scene, the butterfly, and the potential misplaced step that will send The Fool tumbling into the unknown. Don't forget, though, that the earlier versions of this card represented already-fallen humanity, over-identified with the material plane of existence, and beginning a pilgrimage toward self-knowledge and, eventually, wisdom. The Fool reminds us to recognize the"+ "path of personal development within ourselves -- and the stage upon that path where we find ourselves -- in order to energize our movement toward deeper self-realization.",
                advice: "The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible."
                        +"The Fool advises that you lighten up. Let yourself be spontaneous enough to stretch beyond the realm of logic. There is no advantage to be gained by thinking you possess the knowledge, power, or control to direct reality. Open and receive without question, instead of trying to manage what's happening right now. The Fool has no ambition to manipulate a specific outcome. Just be happy to be part of the whole."
                        +"Release any demands or expectations. Give your complete attention to events as they are occurring in the present moment.",
                img: '/assets/img/Fool.jpg',
                type: 'Major',
                card_id: 1
            },
            {
                title: 'Magician',
                name: 'The Magician',
                general: '../data/card_meaning/Magician_genral',
                advice: '../data/card_meaning/Magician_advice',
                img: '/assets/img/Magician.jpg',
                type: 'Major',
                card_id: 2
            },
            {
                title: 'Priestess',
                name: 'The High Priestess',
                general: '../data/card_meaning/Priestess_genral',
                advice: '../data/card_meaning/Priestess_advice',
                img: '/assets/img/Priestess.jpg',
                type: 'Major',
                card_id: 3
            },
            {
                title: 'Empress',
                name: 'The Empress',
                general: '../data/card_meaning/Empress_genral',
                advice: '../data/card_meaning/Empress_advice',
                img: '/assets/img/Empress.jpg',
                type: 'Major',
                card_id: 4
            },
            {
                title: 'Emperor',
                name: 'The Emperor',
                general: '../data/card_meaning/Emperor_genral',
                advice: '../data/card_meaning/Emperor_advice',
                img: '/assets/img/EmperorEmperor.jpg',
                type: 'Major',
                card_id: 5
            },
            {
                title: 'Hierophant',
                name: 'The Hierophant',
                general: '../data/card_meaning/Hierophant_genral',
                advice: '../data/card_meaning/Hierophant_advice',
                img: '/assets/img/Hierophant.jpg',
                type: 'Major',
                card_id: 6
            },
            {
                title: 'Lovers',
                name: 'The Lovers',
                general: '../data/card_meaning/Lovers_genral',
                advice: '../data/card_meaning/Lovers_advice',
                img: '/assets/img/Lovers.jpg',
                type: 'Major',
                card_id: 7
            },
            {
                title: 'Chariot',
                name: 'The Chariot',
                general: '../data/card_meaning/Chariot_genral',
                advice: '../data/card_meaning/Chariot_advice',
                img: '/assets/img/ChariotChariot.jpg',
                type: 'Major',
                card_id: 8
            },
            {
                title: 'Strength',
                name: 'The Strength',
                general: '../data/card_meaning/Strength_genral',
                advice: '../data/card_meaning/Strength_advice',
                img: '/assets/img/StrengthStrength.jpg',
                type: 'Major',
                card_id: 9
            },
            {
                title: 'Hermit',
                name: 'The Hermit',
                general: '../data/card_meaning/Hermit_genral',
                advice: '../data/card_meaning/Hermit_advice',
                img: '/assets/img/Hermit.jpg',
                type: 'Major',
                card_id: 10
            },
            {
                title: 'Wheel_of_Fortune',
                name: 'Wheel of Fortune',
                general: '../data/card_meaning/Wheel_of_Fortune_genral',
                advice: '../data/card_meaning/Wheel_of_Fortune_advice',
                img: '/assets/img/Wheel_of_Fortune.jpg',
                type: 'Major',
                card_id: 11
            },
            {
                title: 'Justice',
                name: 'Justice',
                general: '../data/card_meaning/Justice_genral',
                advice: '../data/card_meaning/Justice_advice',
                img: '/assets/img/Justice.jpg',
                type: 'Major',
                card_id: 12
            },
            {
                title: 'HangedMan',
                name: 'The Hanged Man',
                general: '../data/card_meaning/HangedMan_genral',
                advice: '../data/card_meaning/HangedMan_advice',
                img: '/assets/img/HangedMan.jpg',
                type: 'Major',
                card_id: 13
            },
            {
                title: 'Death',
                name: 'Death',
                general: '../data/card_meaning/Death_genral',
                advice: '../data/card_meaning/Death_advice',
                img: '/assets/img/Death.jpg',
                type: 'Major',
                card_id: 14
            },
            {
                title: 'Temperance',
                name: 'Temperance',
                general: '../data/card_meaning/Temperance_genral',
                advice: '../data/card_meaning/Temperance_advice',
                img: '/assets/img/Temperance.jpg',
                type: 'Major',
                card_id: 15
            },
            {
                title: 'Devil',
                name: 'The Devil',
                general: '../data/card_meaning/Devil_genral',
                advice: '../data/card_meaning/Devil_advice',
                img: '/assets/img/Devil.jpg',
                type: 'Major',
                card_id: 16
            },
            {
                title: 'Tower',
                name: 'The Tower',
                general: '../data/card_meaning/Tower_genral',
                advice: '../data/card_meaning/Tower_advice',
                img: '/assets/img/Tower.jpg',
                type: 'Major',
                card_id: 17
            },
            {
                title: 'Star',
                name: 'The Star',
                general: '../data/card_meaning/Star_genral',
                advice: '../data/card_meaning/Star_advice',
                img: '/assets/img/Star.jpg',
                type: 'Major',
                card_id: 18
            },
            {
                title: 'Moon',
                name: 'The Moon',
                general: '../data/card_meaning/Moon_genral',
                advice: '../data/card_meaning/Moon_advice',
                img: '/assets/img/Moon.jpg',
                type: 'Major',
                card_id: 19
            },
            {
                title: 'Sun',
                name: 'The Sun',
                general: '../data/card_meaning/Sun_genral',
                advice: '../data/card_meaning/Sun_advice',
                img: '/assets/img/Sun.jpg',
                type: 'Major',
                card_id: 20
            },
            {
                title: 'Judgement',
                name: 'Judgement',
                general: '../data/card_meaning/Judgement_genral',
                advice: '../data/card_meaning/Judgement_advice',
                img: '/assets/img/Judgement.jpg',
                type: 'Major',
                card_id: 21
            },
            {
                title: 'World',
                name: 'The World',
                general: '../data/card_meaning/World_genral',
                advice: '../data/card_meaning/World_advice',
                img: '/assets/img/World.jpg',
                type: 'Major',
                card_id: 22
            }

        ];
        Tarots.create(starterTarots, function(err, results){
            console.log(results);
        });
}
