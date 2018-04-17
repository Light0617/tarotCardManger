var Tarots = require('../models/tarotModel');

module.exports = function(app){
        var starterTarots = [
            {
                title: 'AceWands',
                name: 'Ace of Wands',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/wands/1.jpg',
                type: 'wand',
                card_id: 1
            },
            {
                title: '2Wands',
                name: '2 of Wands',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/wands/2.jpg',
                type: 'wand',
                card_id: 2
            },
            {
                title: '3Wands',
                name: '3 of Wands',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/wands/3.jpg',
                type: 'wand',
                card_id: 3
            },
            {
                title: '4Wands',
                name: '4 of Wands',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/wands/4.jpg',
                type: 'wand',
                card_id: 4
            },
            {
                title: '5Wands',
                name: '5 of Wands',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/wands/5.jpg',
                type: 'wand',
                card_id: 5
            },
            {
                title: '6Wands',
                name: '6 of Wands',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/wands/6.jpg',
                type: 'wand',
                card_id: 6
            },
            {
                title: '7Wands',
                name: '7 of Wands',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/wands/7.jpg',
                type: 'wand',
                card_id: 7
            },
            {
                title: '8Wands',
                name: '8 of Wands',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/wands/8.jpg',
                type: 'wand',
                card_id: 8
            },
            {
                title: '9Wands',
                name: '9 of Wands',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/wands/9.jpg',
                type: 'wand',
                card_id: 9
            },
            {
                title: '10Wands',
                name: '10 of Wands',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/wands/10.jpg',
                type: 'wand',
                card_id: 10
            },
            {
                title: '11Wands',
                name: 'Page of Wands',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/wands/11.jpg',
                type: 'wand',
                card_id: 11
            },
            {
                title: '12Wands',
                name: 'Knight of Wands',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/wands/12.jpg',
                type: 'wand',
                card_id: 12
            },
            {
                title: '13Wands',
                name: 'Queen of Wands',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/wands/13.jpg',
                type: 'wand',
                card_id: 13
            },
            {
                title: '14Wands',
                name: 'King of Wands',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/wands/14.jpg',
                type: 'wand',
                card_id: 14
            }
        ];
        Tarots.create(starterTarots, function(err, results){
            console.log(results);
        });
}
