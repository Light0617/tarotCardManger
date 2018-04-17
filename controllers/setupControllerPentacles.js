var Tarots = require('../models/tarotModel');

module.exports = function(app){
        var starterTarots = [
            {
                title: 'AcePentacles',
                name: 'Ace of Pentacles',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacles/1.jpg',
                type: 'pentacle',
                card_id: 1
            },
            {
                title: '2Pentacles',
                name: '2 of Pentacles',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacles/2.jpg',
                type: 'pentacle',
                card_id: 2
            },
            {
                title: '3Pentacles',
                name: '3 of Pentacles',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacles/3.jpg',
                type: 'pentacle',
                card_id: 3
            },
            {
                title: '4Pentacles',
                name: '4 of Pentacles',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacles/4.jpg',
                type: 'pentacle',
                card_id: 4
            },
            {
                title: '5Pentacles',
                name: '5 of Pentacles',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacles/5.jpg',
                type: 'pentacle',
                card_id: 5
            },
            {
                title: '6Pentacles',
                name: '6 of Pentacles',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacles/6.jpg',
                type: 'pentacle',
                card_id: 6
            },
            {
                title: '7Pentacles',
                name: '7 of Pentacles',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacles/7.jpg',
                type: 'pentacle',
                card_id: 7
            },
            {
                title: '8Pentacles',
                name: '8 of Pentacles',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacles/8.jpg',
                type: 'pentacle',
                card_id: 8
            },
            {
                title: '9Pentacles',
                name: '9 of Pentacles',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacles/9.jpg',
                type: 'pentacle',
                card_id: 9
            },
            {
                title: '10Pentacles',
                name: '10 of Pentacles',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacles/10.jpg',
                type: 'pentacle',
                card_id: 10
            },
            {
                title: '11Pentacles',
                name: 'Page of Pentacles',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacles/11.jpg',
                type: 'pentacle',
                card_id: 11
            },
            {
                title: '12Pentacles',
                name: 'Knight of Pentacles',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacles/12.jpg',
                type: 'pentacle',
                card_id: 12
            },
            {
                title: '13Pentacles',
                name: 'Queen of Pentacles',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacles/13.jpg',
                type: 'pentacle',
                card_id: 13
            },
            {
                title: '14Pentacles',
                name: 'King of Pentacles',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacles/14.jpg',
                type: 'pentacle',
                card_id: 14
            }
        ];
        Tarots.create(starterTarots, function(err, results){
            console.log(results);
        });
}
