var Tarots = require('../models/tarotModel');

module.exports = function(app){
        var starterTarots = [
            {
                title: 'AceSwords',
                name: 'Ace of Swords',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/swords/1.jpg',
                type: 'sword',
                card_id: 1
            },
            {
                title: '2Swords',
                name: '2 of Swords',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/swords/2.jpg',
                type: 'sword',
                card_id: 2
            },
            {
                title: '3Swords',
                name: '3 of Swords',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/swords/3.jpg',
                type: 'sword',
                card_id: 3
            },
            {
                title: '4Swords',
                name: '4 of Swords',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/swords/4.jpg',
                type: 'sword',
                card_id: 4
            },
            {
                title: '5Swords',
                name: '5 of Swords',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/swords/5.jpg',
                type: 'sword',
                card_id: 5
            },
            {
                title: '6Swords',
                name: '6 of Swords',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/swords/6.jpg',
                type: 'sword',
                card_id: 6
            },
            {
                title: '7Swords',
                name: '7 of Swords',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/swords/7.jpg',
                type: 'sword',
                card_id: 7
            },
            {
                title: '8Swords',
                name: '8 of Swords',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/swords/8.jpg',
                type: 'sword',
                card_id: 8
            },
            {
                title: '9Swords',
                name: '9 of Swords',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/swords/9.jpg',
                type: 'sword',
                card_id: 9
            },
            {
                title: '10Swords',
                name: '10 of Swords',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/swords/10.jpg',
                type: 'sword',
                card_id: 10
            },
            {
                title: '11Swords',
                name: 'Page of Swords',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/swords/11.jpg',
                type: 'sword',
                card_id: 11
            },
            {
                title: '12Swords',
                name: 'Knight of Swords',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/swords/12.jpg',
                type: 'sword',
                card_id: 12
            },
            {
                title: '13Swords',
                name: 'Queen of Swords',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/swords/13.jpg',
                type: 'sword',
                card_id: 13
            },
            {
                title: '14Swords',
                name: 'King of Swords',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/swords/14.jpg',
                type: 'sword',
                card_id: 14
            }
        ];
        Tarots.create(starterTarots, function(err, results){
            console.log(results);
        });
}
