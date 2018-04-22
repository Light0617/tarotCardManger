var Tarots = require('../models/tarotModel');

module.exports = function(app){
        var starterTarots = [
            {
    			 title: 'AceSwords',
    			 name: 'Ace of Swords',
    			 general: "This suit represents the rational mind and its ability to discriminate. Swords cut through things in order to pierce illusion, to differentiate between fantasy and reality.In the image of this Ace, a single upraised sword represents your prime motive or guiding ideal -- the vision that guides you through life's changing fortunes with single-minded clarity.The sword is sometimes shown piercing a silver and/or laurel crown, a symbol of optimism implying evolution, progress, a sense of hope and victory. It is occasionally shown pointed downwards -- a darker message, which refers to sacrifice, challenges and a critical environment.",
    			 advice: "Stay focused and resolute, for you are about to reach your objective.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Ace of Swords in this position advises you to be steady--you are about to reach your objective. There may be no need to hesitate. Just concentrate on making your impact. This could be your moment. The arrow is pointed straight at the target. Your eye is keen, your grip is firm. Let that arrow fly! If you set aside distractions and hit your mark, you will be rewarded with insight and clarity.Remember that this is not the time to hold back, worrying about the consequences. When you access this level of truth, you are very likely to cut through all illusion and nonsense.",
    			 img: '/assets/img/Swords/1.jpg',
    			 type: 'sword',
    			 card_id: 1
    		},
    		{
    			 title: '2Swords',
    			 name: '2 of Swords',
    			 general: "The Two in this suit usually represents conflicting ideas or visions. These must be reconciled by communication in order to arrive in a harmonious place or to complete strategic negotiations. Mixed signals prevail.While they may be appearing to try to communicate, opposite sides are missing each other entirely, with possibly drastic consequences. In the best case, a frank discussion would clear the air and serve both sides, but one cannot expect that in every instance where this card appears.",
    			 advice: "Wait until the timing is right and all the facts are clear before taking action.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Two of Swords in this position advises that this may not be a good time to make a decision. Neither allow others to push you beyond your boundaries, nor permit yourself to act impulsively. You need to fully assimilate the situation before making any moves -- even if not having a solution as soon as you want causes tension.Have patience. There are circumstances in which action is better than non-action. This, however, is not one of them. Remain silent as much as possible and allow things to settle. A little meditation can help you achieve greater objectivity. You do not have enough information, as all the evidence hasn't come in yet.",
    			 img: '/assets/img/Swords/2.jpg',
    			 type: 'sword',
    			 card_id: 2
    		},
    		{
    			 title: '3Swords',
    			 name: '3 of Swords',
    			 general: "Traditionally, the Three of Swords signified separation or the breakup of a significant relationship, including the tragic emotions that come along with such an event. Some cards show the horizon filled with storm clouds and flashing lightning.The positive side of this card would be the ending of draining or frustrating associations, to become free again. One message this card brings is to cut some things loose. In spite of sentimental memories and emotional attachments, we need to let go of relationships that either cannot live up to their promise or have outlived the pleasure and support we once found in them.",
    			 advice: "It might be healthier to disentangle yourself and start fresh.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Three of Swords in this position advises you to strike out on your own. Become more independent. Separate yourself from people and forces you do not feel compatible with. Grow a thicker skin.Use your creativity and imagination and seek out situations where the way you see things makes sense to those around you. Move towards those who can embrace and appreciate your talents and all you have to contribute.",
    			 img: '/assets/img/Swords/3.jpg',
    			 type: 'sword',
    			 card_id: 3
    		},
    		{
    			 title: '4Swords',
    			 name: '4 of Swords',
    			 general: "A Four in this suit sends a message to take some time out, surrendering worldly concerns and retreating to a sheltered place of serenity away from the hustle and bustle. The oldest Tarot card images suggest a visit to the tombs of our ancestors, a place to contemplate your mortality and breathe in the dust of those who brought you here.A vision quest or pilgrimage to one's own center allows us to contemplate our roots, values and goals. Here you will see your place in the flow of time ... and unfolding generations.",
    			 advice: "Concentrate less on the opinions and biases of others. Be open to intuition and insight from a deeper source.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Four of Swords in this position strongly urges that you keep your own counsel in this situation. There may be too much fear and hostility in the environment for you to be heard. It might be that your ideas are not ripe enough or that you are not ready to listen to feedback from others.If you spend more time in contemplation, you may successfully disregard the emotional occupations and biases of others. For now, closely observe inner events. The time for sharing will come later.",
    			 img: '/assets/img/Swords/4.jpg',
    			 type: 'sword',
    			 card_id: 4
    		},
    		{
    			 title: '5Swords',
    			 name: '5 of Swords',
    			 general: "Traditionally, the Five of this suit references the grim and sobering process of cleaning up the battlefield after a conflict. The war as a whole has not been won or lost yet, but in this skirmish there were grievous casualties. This card admonishes the loser to study carefully what went wrong, so that a new strategy can be devised and more setbacks forestalled. There is a need to regroup and rethink the game plan, discover your blind spots and weak links, and take corrective measures before getting back into the field for another round.In these modern times, when the battle is more often being waged with words, laws and contracts instead of weapons, we have even more reason to examine our approach, our style, strengths and weaknesses. If we have underdeveloped communication skills or lose our objectivity in tense moments, our ability to reach our goals and dreams will decline. But, if we avoid letting ourselves be haunted by the misfortunes and detours",
    			 advice: "Challenge the pessimism of others around you by evoking their higher nature.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Five of Swords in this position advises you to prepare yourself for disappointment over how your fellow humans are setting their priorities. It seems that the lower end of human nature may be eroding good will in the current situation. Due to a strong cultural trend toward scarcity thinking, a me first outlook prevails. If this means that you need to develop a thick skin or carry your sword of truth closer, then do so.Try not to be too quick to anger or jump to conclusions. Just because others may have a pessimistic sense of the world, their reality does not have to undermine yours. There is certainly no point in struggling or competing with them. Your challenge now is to learn how to sidestep confrontation and evoke a more evolved response from people.",
    			 img: '/assets/img/Swords/5.jpg',
    			 type: 'sword',
    			 card_id: 5
    		},
    		{
    			 title: '6Swords',
    			 name: '6 of Swords',
    			 general: "The Six of this suit has generally been associated with the objectivity of scientific method, employed through the generations to sift fact from superstition, build facts into theories, and theories into laws which we can trust and use to improve our lives. One early title for this card was The Navigator -- one who has learned enough about the relation between the Earth and the heavens to be able to set a course across trackless oceans and arrive at a chosen spot on distant shores.At the time of the first Tarot decks, this skill was considered akin to magic, so few were the individuals who understood the principles involved. So the person who draws this card is being typified as a person with special knowledge, an insight into sophisticated techniques that may be powerful enough to effect a rescue in a dangerous time. Other related titles that are common to this card are The Path (out of danger) and The Way Through.",
    			 advice: "Others will be grateful that you responded quickly to the need for immediate action.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Six of Swords in this position reminds you that time is of the essence. You've seen the big picture, and good ideas have occurred to you about what needs to be done. Now it is necessary to take action. There may be no more time for debate.If the game plan has become clear, your next step could be to commit yourself to pursue changes that will lead to improvement. Overcome the tendency to get distracted. You do not have time for approval seeking. Once you initiate action, others will be grateful for your clear thinking and quick reflexes. It's a special gift to be able to navigate in times of rapidly changing and unpredictable circumstances, when a cool head and right timing are most essential.",
    			 img: '/assets/img/Swords/6.jpg',
    			 type: 'sword',
    			 card_id: 6
    		},
    		{
    			 title: '7Swords',
    			 name: '7 of Swords',
    			 general: "The Seven of this suit typically refers to mental preparedness, acquired through the use of imagination, including the rehearsing and visualizing of desired results. This card represents the positive mental habits of a natural winner. The image most often associated with this card is that of a canny warrior who has infiltrated into the enemy camp on the eve of a fateful battle, checking out their preparations and stealing their swords. Such a move is guaranteed to demoralize the enemy and undermine their performance in the upcoming confrontation.Putting it in modern terms, one who draws this card needs to work smarter, not harder. Think long and deep, study all the angles and put yourself in the shoes of your competition. As a result, you will have such a thorough grasp of the whole situation that there will be no surprises -- and no excuses for anything but success. Skillful preparation justifies the optimism of the natural winner.",
    			 advice: "Discipline yourself to stay focused on the desired outcome and you will make your way past all competing circumstances.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Seven of Swords in this position suggests that deep within you already know exactly what has to happen. You know what steps to take and what order to take them in to bring about a desirable outcome in this situation.You may have enough of an overview to see how to advance through the maze and achieve your goal. Continue to envision unobstructed success. Even as the path you are walking changes and the circumstances around you obscure your view, keep the desired outcome clear and sharp in your mind. You will quite likely reach your goal and gain tremendous self esteem in the process.",
    			 img: '/assets/img/Swords/7.jpg',
    			 type: 'sword',
    			 card_id: 7
    		},
    		{
    			 title: '8Swords',
    			 name: '8 of Swords',
    			 general: "Often called The Test, the Eight of this suit usually pictures a warrior running the gauntlet, subjected to harsh examination, who finds out just how tough he or she is (or isn't) in the process. Life provides us with plenty of experiences that put us in situations of close scrutiny -- whether it's an entrance exam, a decisive job interview or even the tough conversations that follow upon a breach of trust in a close relationship.Sometimes the challenge or obstacle course has nothing to do with other people, as when an inventor has to face the question Does it really work? or when the aspirant has to decide how badly he desires to go through some sort of initiation. This card shows what happens to that great idea in real time, where the rubber meets the road. The Test represents your chance to vindicate the time and energy spent in getting ready for a big moment. In most cases, you will either pass or fail, with little in the way of available middle ground.",
    			 advice: "Rise to the occasion with confidence in your talent and ability.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.With the Eight of Swords in this position, you are being reminded that every setback you experience is a teacher awakening you to renewed effort. This is a learn-by-doing situation; there is no formula that guarantees outcome. You can be sure, however, that an open-minded and optimistic attitude will serve you better in the face of surprising developments.Be willing to make the rigorous effort that is being called for now. Perform wholeheartedly, with good faith and hopefulness. As such, you'll forestall bickering and criticism, prevail against negative forces and overcome the demons of doubt and resistance. Get excited about your challenges; be confident that you have what it takes to improve the situation. If you do your internal homework, the outer situation will open up to u",
    			 img: '/assets/img/Swords/8.jpg',
    			 type: 'sword',
    			 card_id: 8
    		},
    		{
    			 title: '9Swords',
    			 name: '9 of Swords',
    			 general: "The Nine of this suit has a special resonance with the Middle Ages, because it figures the plight of a woman who is alone in the world, during the centuries when women had no personal rights, no ability to inherit property or use the law in their own defense. We generally see her sitting up in bed weeping, grieving and in fear of abandonment because of her vulnerability, wondering what will happen to her now that her protector (father, brother, husband, or son) is gone.The swords above her head may indicate that the loss has come through some cruel conflict, the outcome of which has left her behind as chattel, the spoils of war. Really what we are looking at is the price of pride, which creates losers as a side effect of glorifying winners. The woman in the picture represents the concerns of the heart, the damage to the soul and to vulnerable ones, when the ego-mind becomes so invested in control and domination that it does not count the human costs",
    			 advice: "Honestly admit to yourself that you have sacrificed time and energy on a situation that simply does not work.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Nine of Swords in this position advises you to confront your fear of being alone and acknowledge the different limits you may have put on yourself because of that fear. In the name of being safe, you may have adhered to lower standards than you are capable of achieving. If so, then you may have resisted striking out on your own. Perhaps you have bargained away creativity and joy in order to avoid being challenged. These kinds of tradeoffs never work.This could be a time to cut your losses. If so, recognize how much time and energy you have sacrificed to a way of being that's not right for you. If you can do this you will look back at this time in your life as a turning point. This may be an opportunity to heal",
    			 img: '/assets/img/Swords/9.jpg',
    			 type: 'sword',
    			 card_id: 9
    		},
    		{
    			 title: '10Swords',
    			 name: '10 of Swords',
    			 general: "The Ten of this suit represents finality, the end of something. As is easy to grasp from the picture in many decks, there is no hope for revival here. A limit has been reached, a line has been crossed and there is no turning back. In some situations this may be felt as a tragic loss, but it often brings with it a paradoxical sense of release and closure. The waiting and wondering are over. There is no more ambiguity. You can rightly let go and move on, as there is no more progress to be made here.Emotionally and psychologically, this card appears when one is exhausted and used up, burnt out by the effort of caring and responding and trying to make a difference. When a person feels this way, they have reached burnout and can no longer be held responsible for anything, and therefore can be forgiven for caving in or ceding the fight. The simple instructions are: Go no further along these lines!",
    			 advice: "Protect yourself while the storm rages and focus on rebuilding after it passes.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Ten of Swords in this position advises that you lay low for a while. Don't make a move. Keep yourself as safe as possible until the drama, even the possible trauma, plays itself out. Once the turmoil dies down, then you can assess the damage and start to make repairs. The situation can be compared to a hurricane moving through the neighborhood. You can't be sure whether it is going to pass over a corner of the field or whether it is going to slam into your house.In the face of such unpredictability, protect yourself, hope for the best and wait it out. Sometimes, an extreme turn of events serves as a pressure relief valve for all the unexpressed and unresolved energy that had been building up. Trust the process even though things may seem pretty drastic right now",
    			 img: '/assets/img/Swords/10.jpg',
    			 type: 'sword',
    			 card_id: 10
    		},
    		{
    			 title: '11Swords',
    			 name: '11 of Swords',
    			 general: "This card is traditionally entitled The Page, but in some modern decks appears as a Princess. The traditional interpretation is about a messenger, an emissary or liaison between separate camps, charged with faithfully representing one side's communications to the other. Because of this role, we do not think of this person as a servant, but rather as a diplomat, facilitating sensitive negotiations, often under difficult conditions.This person is acting as the eyes and ears of her patron, and so she is sometimes referred to as The Watchman. Even kings are powerless if this messenger chooses to use her access to sensitive information for her own gain, as is implied by her other name, The Spy.She could even be working as a double agent, playing both sides against each other to serve her own agenda. Her title is really camouflage in itself, serving as protective coloration so she can move among the people unrecognized, collecting information anonymously."+
                 "Her vigilance often conceals an ulterior motive. She is a watcher who must herself be watched, because she dreams of someday taking matters into her own hands, preempting the plans of her employers.",
    			 advice: "Circumstances call for anonymous action even if you would prefer to receive credit.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.When the Page of Swords (in some decks, a Princess) is in this position, the situation requires subtle change in order for it to be brought to the highest good for all concerned. In contrast to times when one can best serve the greater good by being visible and heroic, this is a time when you must keep your own counsel, cover your tracks and stealthily accomplish what would be impossible to complete without privacy.Reduce your profile and increase your anonymity, no matter how your self-image might suffer. Although it would be gratifying to accomplish what needs to be done and be aboveboard about it, that cannot be a priority at present.",
    			 img: '/assets/img/Swords/11.jpg',
    			 type: 'sword',
    			 card_id: 11
    		},
    		{
    			 title: '12Swords',
    			 name: '12 of Swords',
    			 general: "This card is traditionally entitled The Knight, but in some modern decks appears as The Prince. Traditionally, this card portrays the restless mind, aroused by thoughts of offense and defense, storming around searching for a target to pounce on. He often feels slighted, has a chip on his shoulder and bristles with a hostile attitude. His usual method is to look for someone to blame for his irritation.Furthermore, in an attitude of righteousness, he may assign himself the job of correcting the offender."+
                 "Jumping easily to conclusions, he shoots first, asks questions later and is therefore often guilty of overkill. This is not to say that he does not have his heroic side; a single-minded combativeness can have its value. However, even when he is doing the right thing, he is likely to be doing it for the wrong reasons. Apt advice for this card is to deeply question your motives for what you are thinking about doing. Forethought will assist you in discriminating between righteous and unrighteous causes."+
                 "Control any traces of impulsive judgement!Occasionally you will notice in the detail on the card, that the person can be a woman rather than the expected man. There is some evidence that the tradition of knighthood included a certain number of anonymous knights who took mythic names and veiled their true identities. Living on the road with few or no servants, they served as freelance defenders of travelers, champions of the little people against the exploitation of both highway robbers and the wealthy classes. Odds are that some of these knights-errant were camouflaged women, and that idea is preserved with the traditional representation of the Sword Knight.",
    			 advice: "Refine your communication and negotiation skills so you are at peak effectiveness.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Knight of Swords in this position advises you to remain open to conflicting ideas instead of surrounding yourself exclusively with people who agree with you. This Knight is most effective when testing his ideas in a debate. Emulate his ability to communicate successfully by keeping your conversations impersonal and humorous so no hurt feelings are provoked.Practice your negotiation skills so you will be in shape for imminent diplomatic challenges as they arise. A sparring partner could help you learn to control impulsive comments and stem your urge to be right at the expense of others being wrong.",
    			 img: '/assets/img/Swords/12.jpg',
    			 type: 'sword',
    			 card_id: 12
    		},
    		{
    			 title: '13Swords',
    			 name: '13 of Swords',
    			 general: "Representing the energy of a Queen, this feminine power was traditionally known as a widow, crone or divorcee. In modern times, she can be viewed as a model of self-sufficiency, independence and intelligence. She often has extremely high standards due to her subtle sensitivities, which can be perceived by those around her as being critical or hard to please. Her true motive is to refine the world, to upgrade peoples' understanding -- so that everyone can have the space they need to become fully themselves.She is not interested in conforming. She is too intelligent to be confined to the role of housewife or nursemaid, although she is perfectly competent in those areas. She chooses her associations (or her solitude), and is seldom caught up in dependent relationships -- at least not for long. Her intelligence is not always the most comfortable to be around, but she can be counted on to see through superficiality and point to the truth of a situation.",
    			 advice: "Make your own decisions. Exercise as much independence as you know you can handle.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Queen of Swords in this position advises that you refrain from remaining dependent on others at this time. Instead of placing too much confidence in the promises people have made, harbor only those ambitions you know you can accomplish yourself.The Queen of Swords does not want to wait and see what others would think, say or do. She knows what she wants and how to get it. She doesn't ask permission or even subject herself to much influence. There are times in life when no one can take care of you as well as you can. Leave sentimentality behind and take action. Make important decisions for yourself because it's up to you. You are the final judge.",
    			 img: '/assets/img/Swords/13.jpg',
    			 type: 'sword',
    			 card_id: 13
    		},
    		{
    			 title: '14Swords',
    			 name: '14 of Swords',
    			 general: "Traditionally, representing the energy of a King, this masculine energy form is The Adjudicator, the wise judge or mediator. He helps parties in conflict discover common ground and build upon it, and guides societies to see their greater good. His archetype is Solomon, ancient lawgiver and philosopher of the Old Testament. Sometimes appearing cool and detached, he can be misunderstood as not caring.But emotional displays are just not his medium, nor is he moved by appeals to sympathy or pity. With the philosophical overview that comes from long experience, he listens deeply, watches closely and speaks last. In the end, his even-handedness and objectivity earn him the respect he receives from his community, and those who cannot work out their problems come to him voluntarily for advice.Occasionally this man is subtly detailed to imply that he is a woman in male armor. If you notice this theme in your deck, it is a reference to Joan of Arc,"
                 +"the Maid of Orleans, archetype of a devout and inspired woman warrior, who was mystically led to abandon her social role to defend what she saw as the greater good. Although she was martyred young, her model crystallizes the message that sometimes the good of the whole is more important than the good of the individual, and in that case, even if you lose, you win just for being there.",
    			 advice: "Listen to the inner wisdom offered by the wise elder that dwells inside of you.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.In this position, the King of Swords advises that you research your situation and in the process question existing authorities. It may be time to examine underlying assumptions and bring greater clarity into areas that have been left in the dark. Don't wait for others to do it. Instead, draw your own conclusions.Spend time reviewing all the ramifications because this King of Swords requires a thorough, methodical examination of ideas and possibilities. Call forth the sober and wise part of yourself -- the elder father figure. Then act on the instructions given you.",
    			 img: '/assets/img/Swords/14.jpg',
    			 type: 'sword',
    			 card_id: 14
    		}
        ];
        Tarots.create(starterTarots, function(err, results){
            console.log(results);
        });
}
