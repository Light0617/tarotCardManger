var Tarots = require('../models/tarotModel');

module.exports = function(app){
        var starterTarots = [
            {
                title: 'AceCups',
                name: 'Ace of Cups',
                general: "The suit in Tarot known as Cups is also referred to as Chalices or Hearts. It represents the emotional and psychic aspects of life -- fantasy, imagination, feelings, love.An Ace of this suit in this position generally shows a hand holding up an overflowing cup, which gives forth an endless stream of water, wine, blood or soma for the people's refreshment and healing.This card represents an unfailing source of balm for body, heart and soul. It suggests that you can relax into a safety net of love, support and communion.",
                advice: "The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Ace of Cups in this position advises you to challenge yourself and discover what is good about every relationship. Practice looking at the world through the eyes of the Divine. Allow your imagination to perceive the spiritual or evolutionary potential in every person and experience.Look with the eye of a loving parent or companion upon the people and things you come into contact with. Make a conscious decision to approve of and delight in even the quirky developments that make the world turn. No one can be perfect at such unconditional acceptance. Still the practice will sweeten your day to day life. Your magnetism will increase and more loving people may enter your life. The whole world will benefit as this becomes second nature to you.",
                img: '/assets/img/cups/1.jpg',
                type: 'cup',
                card_id: 1
            },
            {
                title: '2Cups',
                name: '2 of Cups',
                general: "The Two in this suit signifies a union of souls. This card traditionally describes a romantic relationship, but also includes the idea that all good friendships and partnerships are based on a natural affinity and a deep mutual understanding. As a personal reflection, it can also signify that your mind and your soul are discovering each other, maybe for the first time.This card also symbolizes a karmic tie, often portrayed by a wreath or figure-eight ribbon twining around the two cups. Occasionally you see a symbol referring to the union of alchemical opposites (as in sacred sex), pictured as a long-necked flask twined with serpents, its mouth spouting flames, sometimes with wings. This image is from Alchemy, indicating the refining and mutually completing effect of a true and lasting love.",
                advice: "Express the caring that you feel. Reach out to those you hold in your heart, so that they know you are thinking of them. The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible. The Two of Cups in this position advises you to speak your heart. It may be likely that the person you are trying to connect with feels the same. Still the other needs to hear this more fully. So why not make it clear and why not now? The Two of Cups is the image of the heart making a vow. This card advises that you pledge yourself to this friendship and put your heart on the line. You have nothing to lose and everything to gain. Life is a relationship game. It's a great privilege to share with others who are so complementary and compatible.",
                img: '/assets/img/cups/2.jpg',
                type: 'cup',
                card_id: 2
            },
            {
                title: '3Cups',
                name: '3 of Cups',
                general: "The Three of this suit is often entitled Consent, or simply Yes. This card resonates with a spirit of agreement, mutual support, encouragement and teamwork. Often pictured as three women celebrating their connectedness in a dance with lifted cups, it could also be called sisterhood, a real mutual admiration society. It points to all the benefits of harmonious relationship. Call your family together to support you and trust that the results will be just what you need."+ "The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible. The Three of Cups in this position advises that you tune in with your family and fully inform them about whats going on with you. Let them add substance to your ideas with their talent and imagination. Think of this occasion as a celebration, where their support helps you find success in your work. There may be something here for everyone to"+  "contribute.",
                advice: "The",
                img: '/assets/img/cups/3.jpg',
                type: 'cup',
                card_id: 3
            },
            {
                title: '4Cups',
                name: '4 of Cups',
                general: "The suit often named Cups is also referred to as Chalices or Hearts. It represents the emotional and psychic aspects of life -- fantasy, imagination, feelings, love. A Four in this suit refers to a restless time, where a person may have become dissatisfied with life, and emotionally uncomfortable. Feeling stagnated, longing for change, the heart ponders its options ... as it should.",
                advice: "Renounce the circumstances that have brought you to a standstill. The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible. The Four of Cups in this position wants you to take a clear look at how stalled or distracted you have become. You may have been bogged down by negativity, hopelessness or a sense of limitation. It is not to your advantage, however, to see the world through such a narrow lens. Cut through some of the forces that undermine you, causing you to feel incapable. Sometimes you have to define what you are for by defining what you are against. Decide that you are not as heavy as the cup of earth, not placid as is the cup of water, not turbulent as is the cup of air. Rather, now may be the time to be as aroused as is the cup of fire. This arousal may constitute liberation from the circumstances that may have brought you here.",
                img: '/assets/img/cups/4.jpg',
                type: 'cup',
                card_id: 4
            },
            {
                title: '5Cups',
                name: '5 of Cups',
                general: "The Five of this suit traditionally portrays the mess that is left after an emotional upheaval, such as a tantrum or fit of rage. Consequences run the gamut from a hangover and lost wages, to abuse and ruined relationships. This card is also sometimes called Inheritance, suggesting the cross-generational legacy of such tragedies. Violent family patterns magnified to a much larger scale can become war.",
                advice: "Loss happens on the material plane. Yet what truly belongs to you cannot be taken away. The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible. The Five of Cups in this position advises you to tighten your belt, make do with less and show more appreciation for the things you do have. If something is truly yours, it cannot be lost. When you are experiencing feelings of loss, it may be because of an inappropriate emotional attachment. If you promise things that you cannot deliver, then you might be setting yourself up for disappointment to follow. In overestimating our abilities, we are forced to face our limits. Be grateful that as the cups fell, you lost only three of the five. Two are still intact, pristine and full of sacred energy. Do not cling to the setback. Focus on the potential.",
                img: '/assets/img/cups/5.jpg',
                type: 'cup',
                card_id: 5
            },
            {
    			 title: '6Cups',
    			 name: '6 of Cups',
    			 general: "The Seven of this suit typically refers to works of the imagination, the use of dream and vision to invent a future different than the life one is currently living. This card reminds us that our outcomes are not set in stone.We can raise our hopes and expectations and upgrade our results. Do not be fooled by the title Fantasy which this card is sometimes given -- this card indicates the truly magical quality of awakened imagination.",
    			 advice: "Allow yourself to daydream, for dreams give you creative ideas and solutions and produce wonderful results.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Seven of Cups in this position advises that you relax your mind and open to the dreams and imaginings your inner child loves to entertain. Allow yourself to imagine a truly positive outcome for this situation. Perform an exercise in creative visualization by relaxing your guard and letting go of your fears.As the dreamscape unfolds, your electro-magnetic chemistry is stimulated to a point of achieving greater confidence in yourself and in what you are doing. Even if it's only a temporary break from your fears, this is a helpful exercise because it gives your psyche and body a dose of unlimited thinking and optimism. Think positively -- the results could truly be amazing.",
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
