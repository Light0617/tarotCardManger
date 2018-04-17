var Tarots = require('../models/tarotModel');

module.exports = function(app){
        var starterTarots = [
            {
                title: 'AceCups',
                name: 'Ace of Cups',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/cups/1.jpg',
                type: 'cup',
                card_id: 1
            },
            {
                title: '2Cups',
                name: '2 of Cups',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/cups/2.jpg',
                type: 'cup',
                card_id: 2
            },
            {
                title: '3Cups',
                name: '3 of Cups',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/cups/3.jpg',
                type: 'cup',
                card_id: 3
            },
            {
                title: '4Cups',
                name: '4 of Cups',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/cups/4.jpg',
                type: 'cup',
                card_id: 4
            },
            {
                title: '5Cups',
                name: '5 of Cups',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/cups/5.jpg',
                type: 'cup',
                card_id: 5
            },
            {
                title: '6Cups',
                name: '6 of Cups',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/cups/6.jpg',
                type: 'cup',
                card_id: 6
            },
            {
                title: '7Cups',
                name: '7 of Cups',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/cups/7.jpg',
                type: 'cup',
                card_id: 7
            },
            {
                title: '8Cups',
                name: '8 of Cups',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/cups/8.jpg',
                type: 'cup',
                card_id: 8
            },
            {
                title: '9Cups',
                name: '9 of Cups',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/cups/9.jpg',
                type: 'cup',
                card_id: 9
            },
            {
                title: '10Cups',
                name: '10 of Cups',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/cups/10.jpg',
                type: 'cup',
                card_id: 10
            },
            {
                title: '11Cups',
                name: 'Page of Cups',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/cups/11.jpg',
                type: 'cup',
                card_id: 11
            },
            {
                title: '12Cups',
                name: 'Knight of Cups',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/cups/12.jpg',
                type: 'cup',
                card_id: 12
            },
            {
                title: '13Cups',
                name: 'Queen of Cups',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/cups/13.jpg',
                type: 'cup',
                card_id: 13
            },
            {
                title: '14Cups',
                name: 'King of Cups',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/cups/14.jpg',
                type: 'cup',
                card_id: 14
            }
        ];
        Tarots.create(starterTarots, function(err, results){
            console.log(results);
        });
}
