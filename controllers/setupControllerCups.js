var Tarots = require('../models/tarotModel');

module.exports = function(app){
        var starterTarots = [
            {
    			 title: 'AceCups',
    			 name: 'Ace of Cups',
    			 general: "The suit in Tarot known as Cups is also referred to as Chalices or Hearts. It represents the emotional and psychic aspects of life -- fantasy, imagination, feelings, love.An Ace of this suit in this position generally shows a hand holding up an overflowing cup, which gives forth an endless stream of water, wine, blood or soma for the people's refreshment and healing.This card represents an unfailing source of balm for body, heart and soul. It suggests that you can relax into a safety net of love, support and communion.",
    			 advice: "Remembering that each person and event may possess a precious gem hidden inside. Make a conscious effort to find it.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Ace of Cups in this position advises you to challenge yourself and discover what is good about every relationship. Practice looking at the world through the eyes of the Divine. Allow your imagination to perceive the spiritual or evolutionary potential in every person and experience.Look with the eye of a loving parent or companion upon the people and things you come into contact with. Make a conscious decision to approve of and delight in even the quirky developments that make the world turn. No one can be perfect at such unconditional acceptance. Still the practice will sweeten your day to day life. Your magnetism will increase and more loving people may enter your life. The whole world will benefit as this becomes 2 natrue",
    			 img: '/assets/img/Cups/1.jpg',
    			 type: 'cup',
    			 card_id: 1
    		},
    		{
    			 title: '2Cups',
    			 name: '2 of Cups',
    			 general: "The Two in this suit signifies a union of souls. This card traditionally describes a romantic relationship, but also includes the idea that all good friendships and partnerships are based on a natural affinity and a deep mutual understanding. As a personal reflection, it can also signify that your mind and your soul are discovering each other, maybe for the first time.This card also symbolizes a karmic tie, often portrayed by a wreath or figure-eight ribbon twining around the two cups. Occasionally you see a symbol referring to the union of alchemical opposites (as in sacred sex), pictured as a long-necked flask twined with serpents, its mouth spouting flames, sometimes with wings. This image is from Alchemy, indicating the refining and mutually completing effect of a true and lasting love.",
    			 advice: "Express the caring that you feel. Reach out to those you hold in your heart, so that they know you are thinking of them.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Two of Cups in this position advises you to speak your heart. It may be likely that the person you are trying to connect with feels the same. Still the other needs to hear this more fully. So why not make it clear and why not now?The Two of Cups is the image of the heart making a vow. This card advises that you pledge yourself to this friendship and put your heart on the line. You have nothing to lose and everything to gain. Life is a relationship game. It's a great privilege to share with others who are so complementary and compatible.",
    			 img: '/assets/img/Cups/2.jpg',
    			 type: 'cup',
    			 card_id: 2
    		},
    		{
    			 title: '3Cups',
    			 name: '3 of Cups',
    			 general: "The Three of this suit is often entitled Consent, or simply Yes. This card resonates with a spirit of agreement, mutual support, encouragement and teamwork.Often pictured as three women celebrating their connectedness in a dance with lifted cups, it could also be called sisterhood, a real mutual admiration society. It points to all the benefits of harmonious relationship.",
    			 advice: "Call your family together to support you and trust that the results will be just what you need.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Three of Cups in this position advises that you tune in with your family and fully inform them about what's going on with you. Let them add substance to your ideas with their talent and imagination. Think of this occasion as a celebration, where their support helps you find success in your work. There may be something here for everyone to contribute. Put yourself in the loving hands of your family connections and your trust will be well rewarded. The synergy between you could enhance each individual's talent and creativity. You will love the results!",
    			 img: '/assets/img/Cups/3.jpg',
    			 type: 'cup',
    			 card_id: 3
    		},
    		{
    			 title: '4Cups',
    			 name: '4 of Cups',
    			 general: "The suit often named Cups is also referred to as Chalices or Hearts. It represents the emotional and psychic aspects of life -- fantasy, imagination, feelings, love.A Four in this suit refers to a restless time, where a person may have become dissatisfied with life, and emotionally uncomfortable. Feeling stagnated, longing for change, the heart ponders its options ... as it should.",
    			 advice: "Renounce the circumstances that have brought you to a standstill.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Four of Cups in this position wants you to take a clear look at how stalled or distracted you have become. You may have been bogged down by negativity, hopelessness or a sense of limitation. It is not to your advantage, however, to see the world through such a narrow lens. Cut through some of the forces that undermine you, causing you to feel incapable. Sometimes you have to define what you are for by defining what you are against. Decide that you are not as heavy as the cup of earth, not placid as is the cup of water, not turbulent as is the cup of air. Rather, now may be the time to be as aroused as is the cup of fire. This arousal may constitute liberation from the circumstances that may have brought you here.",
    			 img: '/assets/img/Cups/4.jpg',
    			 type: 'cup',
    			 card_id: 4
    		},
    		{
    			 title: '5Cups',
    			 name: '5 of Cups',
    			 general: "The Five of this suit traditionally portrays the mess that is left after an emotional upheaval, such as a tantrum or fit of rage. Consequences run the gamut from a hangover and lost wages, to abuse and ruined relationships.This card is also sometimes called Inheritance, suggesting the cross-generational legacy of such tragedies. Violent family patterns magnified to a much larger scale can become war.",
    			 advice: "Loss happens on the material plane. Yet what truly belongs to you cannot be taken away.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Five of Cups in this position advises you to tighten your belt, make do with less and show more appreciation for the things you do have. If something is truly yours, it cannot be lost. When you are experiencing feelings of loss, it may be because of an inappropriate emotional attachment. If you promise things that you cannot deliver, then you might be setting yourself up for disappointment to follow. In overestimating our abilities, we are forced to face our limits.Be grateful that as the cups fell, you lost only three of the five. Two are still intact, pristine and full of sacred energy. Do not cling to the setback. Focus on the potential.",
    			 img: '/assets/img/Cups/5.jpg',
    			 type: 'cup',
    			 card_id: 5
    		},
    		{
    			 title: '6Cups',
    			 name: '6 of Cups',
    			 general: "The Six of this suit generally represents a refreshing openness and innocence, a willingness to learn and an optimism that things will get better as we advance together in understanding. The traditional title, The Past, reminds us of our original nature, when we were young and enthusiastic, when anything was possible and the future was an open book. We are to remember that this same freshness, those new possibilities, are always available to us, even now.",
    			 advice: "Look at your past as a repository of wisdom to be applied judiciously in the present.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.When the Six of Cups is in this position, take a look at what is repetitive or cyclical in your life; what links the present situation to the last such experience. A new beginning requires new energy and concentration. Until you analyze the past, you will continue to drift with its current.Distill everything that is worthwhile from your memories and get as much value from it as you can. Then use this as motivation for change. Make the very best use of hindsight, employing new strategies and trying new angles on these recurring issues.",
    			 img: '/assets/img/Cups/6.jpg',
    			 type: 'cup',
    			 card_id: 6
    		},
    		{
    			 title: '7Cups',
    			 name: '7 of Cups',
    			 general: "The Seven of this suit typically refers to works of the imagination, the use of dream and vision to invent a future different than the life one is currently living. This card reminds us that our outcomes are not set in stone.We can raise our hopes and expectations and upgrade our results. Do not be fooled by the title Fantasy which this card is sometimes given -- this card indicates the truly magical quality of awakened imagination.",
    			 advice: "Allow yourself to daydream, for dreams give you creative ideas and solutions and produce wonderful results.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Seven of Cups in this position advises that you relax your mind and open to the dreams and imaginings your inner child loves to entertain. Allow yourself to imagine a truly positive outcome for this situation. Perform an exercise in creative visualization by relaxing your guard and letting go of your fears.As the dreamscape unfolds, your electro-magnetic chemistry is stimulated to a point of achieving greater confidence in yourself and in what you are doing. Even if it's only a temporary break from your fears, this is a helpful exercise because it gives your psyche and body a dose of unlimited thinking and optimism. Think positively -- the results could truly be amazing.",
    			 img: '/assets/img/Cups/7.jpg',
    			 type: 'cup',
    			 card_id: 7
    		},
    		{
    			 title: '8Cups',
    			 name: '8 of Cups',
    			 general: "The Eight of this suit is often used to signify a disappointment, emotional setback, betrayal or injury to the heart. Some Tarot decks illustrate this principle showing a young woman who has just been molested and then cast aside by a stranger passing through her village.His heartless act has left her vulnerable, with potentially drastic consequences. This is a difficult card, but a realistic one, insofar as it warns against misplaced trust and unguarded vulnerability.",
    			 advice: "Look deep within to understand what motivates an occasional tendency to be pessimistic or depressed.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.With the Eight of Cups in this position, look inside and recognize the part of you that still nurses an old grudge from a past injury or trauma. For the most part, your forward-looking self has gotten up and moved along. You are getting on with your life. There may still a part of you, however, that holds out and resists the healing. Are you nursing old wounds from painful losses of faith and trust? If so, now may be a good time to scrutinize your current motives.See if you are still being influenced by the part of yourself that cuts short your enthusiastic, optimistic impulses. Do not deny this pessimistic tendency. Failing to recognize the truth only causes repression that flares up in another part of our psyche.",
    			 img: '/assets/img/Cups/8.jpg',
    			 type: 'cup',
    			 card_id: 8
    		},
    		{
    			 title: '9Cups',
    			 name: '9 of Cups',
    			 general: "The Nine of this suit is sometimes titled Happiness, but it is also known as Victory. The image on several versions of this card often shows an innkeeper doing a brisk business and feeling very happy about it all.The rewards of high achievement are not all monetary, however. This happiness also refers to the feelings of fulfillment that come from good service to the community and support of one's family, as well as gratitude for all the blessings in one's life.",
    			 advice: "The best faculties to use in this situation are the intuitive ones.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Nine of Cups in this position advises that you open yourself to circumstances around you. There may be no need to manage a situation that does not require a lot of control or leadership. The tone of the moment is heartfelt and bonded. It is nurturing. Open up and choose to be receptive. Proceed from your heart, relying on your intuition. This is your truest source of information right now.Allow yourself to be attracted to what feels supportive. Avoid what feels harsh, critical and judgmental. If this requires that you change your style, so be it. The results of being intuitive are generally far superior to the results of being emotionally guarded and overly rational.",
    			 img: '/assets/img/Cups/9.jpg',
    			 type: 'cup',
    			 card_id: 9
    		},
    		{
    			 title: '10Cups',
    			 name: '10 of Cups',
    			 general: "The Ten of this suit traditionally signifies family and community, often showing a celebratory scene including many generations, crowned by a rainbow signifying the end of hard times.See this vision -- love and support extending in all directions -- a huge emotional safety net for everyone.",
    			 advice: "Share abundantly with all the levels of people who are involved in this creative endeavor.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.With the Ten of Cups in this position, prioritize teamwork over your personal goals. Everyone needs to feel they made a contribution. The crew needs to feel they are all in this together, and everyone needs to be rewarded when the ship comes in.It's essential to follow a teamwork approach in order to maximize the benefits for yourself. The good will that will emerge from such an approach will last long after the project is over. You will be generously rewarded later if you take a selfless approach at this time.",
    			 img: '/assets/img/Cups/10.jpg',
    			 type: 'cup',
    			 card_id: 10
    		},
    		{
    			 title: '11Cups',
    			 name: '11 of Cups',
    			 general: "This card is traditionally entitled the Page, but in some modern decks appears as a Princess. In this suit this card represents a poetic, mystical, emotionally open young person, still tender and idealistic, given to flights of imaginative fantasy.This energy is exquisitely refined and fine-tuned. It may be that a sense of being grounded in reality has not yet entirely set in, such that he or she is easily tossed about by external forces and events. This person must work to achieve a stronger will and a more calculating mind, to balance and protect all that wonderful sensitivity.",
    			 advice: "Make yourself fully available for whatever is needed.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Page of Cups (in some decks, a Princess) in this position advises you to study the best ways to be of service. Strive to discern what would give more pleasure, comfort and emotional security. Then, provide it. Understand that what is happening has little or nothing to do with you personally. The best you can do is to offer support and listen closely.Make sure you understand what is needed and serve the situation with loyalty. Look at individuals around you as the embodiment of the Divine, and try to fulfill each one's needs. Be unconcerned with the outcome. Later you will understand why you needed to be in this position.",
    			 img: '/assets/img/Cups/11.jpg',
    			 type: 'cup',
    			 card_id: 11
    		},
    		{
    			 title: '12Cups',
    			 name: '12 of Cups',
    			 general: "This card is traditionally entitled the Knight, but in some modern decks appears as the Prince. Traditionally, this card in this suit has pictured a homecoming -- portraying a return to his true heart's home after a long journey. Like the prodigal son, he may be returning after long estrangement from all he holds dear.His taste for adventure is exhausted -- there is no more romanticizing of battles or travel in strange lands. Now he wants to go where he will be recognized, wanted and welcome -- where he doesn't have to fight at every turn. He has the attitude of one who has become older and wiser, the prodigal son.",
    			 advice: "This is the moment to apply yourself fully.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Knight of Cups (in some decks, a Prince) in this position advises that you jump into your new situation with both feet. Get involved with what is happening in the present. Think no more about the route you had to travel to get back here. There is no need to be cavalier about what seems familiar.Look deeply at the underlying values here. You may find that they represent something you mistakenly rejected in the past. Be humble enough to look at things through new eyes. At a deep level, your heart and soul are being nourished. Don't be tempted to run away again -- this is where you belong. Your entire journey was designed to bring you home with new appreciation.",
    			 img: '/assets/img/Cups/12.jpg',
    			 type: 'cup',
    			 card_id: 12
    		},
    		{
    			 title: '13Cups',
    			 name: '13 of Cups',
    			 general: "Traditionally, representing the energy of a Queen, this card traditionally portrays a sensitive, vulnerable, omniscient woman who offers unconditional love. She is supremely empathic -- sometimes to a fault. Her caring nature exposes her to everybody else's emotions and needs.This person sometimes has difficulty identifying her own best interests in the midst of her responsiveness to others. As a result, she sometimes appears slightly unfocused or perhaps overwhelmed, filled as she is with spirits. She represents the Grail Queen, as well as the Goddess of the Family.",
    			 advice: "Exercise your empathy. Be nurturing to others in a way that allows them to understand what it is all about.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Queen of Cups in this position encourages you to be generous, kind and forgiving. Support the ability of others to get what they want. Nevertheless, remember as with anyone in a caretaking position, you have a fine line to walk. You do not want your loved ones or teammates to become complacent or dependent, as if they can take your support for granted with little or no consideration for your needs.Cultivate an awareness of love as freely giving and receiving. In the process, help clarify the important difference between receiving energy and taking it. Do not allow your willingness to give be misunderstood or abused, as if it were a weakness.",
    			 img: '/assets/img/Cups/13.jpg',
    			 type: 'cup',
    			 card_id: 13
    		},
    		{
    			 title: '14Cups',
    			 name: '14 of Cups',
    			 general: "Traditionally, representing the energy of a King, this card usually portrays a watery background, with a man seated on a throne, holding the Cup of Mystery in his hand. Occasionally, his cup is fulminating like the mouth of a volcano, emanating light, but never boiling over.The man in this card doesn't need to speak to communicate strength, passion and commitment. Sometimes he is robed like a priest or shaman. Intense and intuitive, he is a force to be reckoned with.",
    			 advice: "Support others with your strength and wisdom.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The King of Cups in this position advises that you closely examine your conscience and bring your personal mission into alignment with what is best for everyone. You can then step into your community or situation with integrity and an ability to communicate the highest wisdom.As this sweetens the environment, others will be inspired to raise their own motives and intentions to match yours. You will be providing an important kind of leadership that uses strong reassurance to help everyone work together. The most persuasive thing about you is the example of generous behavior that you exhibit -- much more powerful than preaching alone.",
    			 img: '/assets/img/Cups/14.jpg',
    			 type: 'cup',
    			 card_id: 14
    		}
        ];
        Tarots.create(starterTarots, function(err, results){
            console.log(results);
        });
}
