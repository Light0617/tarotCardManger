var Tarots = require('../models/tarotModel');

module.exports = function(app){
        var starterTarots = [
            {
    			 title: 'AcePentacles',
    			 name: 'Ace of Pentacles',
    			 general: "This suit, most often named Coins or Pentacles, is a symbol for a magical talisman that represented wealth or potential. This suit represents something supportive that is available to you -- whether it be health, some kind of talent, a material or financial resource.The Ace of this suit is usually pictured with a garden or agricultural backdrop, and symbolizes a seed. If this talent is planted and tended carefully, it will sprout and reward you with a good harvest. Think of it as a seed of your future fulfillment. An Ace represents the first step to a goal, and if that step is repeated, it will cover great distances. Generally, the suit of Coins are referring to the tangible realities in daily life, but in the case of the Ace, it could be symbolizing a winning idea, game plan or blueprint for eventual materialization.Occult tradition sometimes interpreted this Ace as representing the alchemist's gold -- the light within matter, the 3rd eye of the energy-body."+
                 " This recommends meditating upon the light within, and pointing oneself toward the archetype of humanity enlightened. By practicing such a meditation, one eventually gains enough control of the celestial radiance to heal the body, untangle the emotions and complete the growth of the soul.",
    			 advice: "Take small, steady steps toward your long-term goal and you will accumulate magnificent results.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Ace of Coins in this position advises that you apply nature's lesson of compound interest and develop your project gradually. A slow and steady buildup -- visible or invisible -- makes change and growth inevitable. Akin to the changing of the seasons, you do not notice this trend from day to day. As the year comes full circle, however, you cannot miss the changes.This card advises that if you work a little bit every day toward your long-term goal, at some time in the future you will discover that you have accumulated magnificent results. The secret of achieving success does not lie in inflating your dreams to grandiose levels; instead it comes about by choosing your direction wisely, while humbly and faithfully taking one step at a time.",
    			 img: '/assets/img/Pentacles/1.jpg',
    			 type: 'pentacle',
    			 card_id: 1
    		},
    		{
    			 title: '2Pentacles',
    			 name: '2 of Pentacles',
    			 general: "This suit, most often named Coins or Pentacles, is a symbol for a magical talisman that represented wealth or potential. This suit represents something supportive that is available to you -- whether it be health, some kind of talent, or a material or financial resource.The Two in this suit generally features a youth juggling, with two coins juggled in figure-eight fashion, or just the coins without the youth -- one heads up, the other tails -- both flipping in the air. It is clear that until one or the other coin drops, the final call can not be made; there is more to learn before a decision can be made about appropriate action.This card counsels patience, so do not allow yourself to be rushed. The figure-eight image is a symbol of immortality and eternity. Its message is No need to hurry. You have all the time you need to work this out, no matter how things appear right now. Implied within this scenario is the idea that changes are in the works,"+
                 " but you will do better to stay calm until you have more information. Everything is in flux at a time like this.",
    			 advice: "Do not allow yourself to be coaxed into premature decisions or actions.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Two of Coins in this position advises you not to choose anything definitive for the time being. Give yourself a little more time to sort out your feelings and any mixed messages you may be receiving from others.Ask yourself -- are all the facts in yet? Or is the coin still flipping in the air? There is no need to be goaded into premature decisions or actions. Act only when you are able to do so with a unified heart and mind.",
    			 img: '/assets/img/Pentacles/2.jpg',
    			 type: 'pentacle',
    			 card_id: 2
    		},
    		{
    			 title: '3Pentacles',
    			 name: '3 of Pentacles',
    			 general: "This suit, most often named Coins or Pentacles, is a symbol for a magical talisman that represented wealth or potential. This suit represents something supportive that is available to you -- whether it be health, some kind of talent, a material or financial resource.The Three is traditionally the card of genius. Here we usually see a master craftsman conferring with his masons on the installation of a beautiful stained-glass window in the cathedral. This designer is often likened to Leonardo da Vinci or Michelangelo, a multi-talented visionary who has no peers in talent or productivity.The masterwork is being proudly showcased for future generations, as an object of personal and collective pride. On some cards, the genius is portrayed at his studio, alone and burning the midnight oil, in a creative ferment -- driven to draw, paint, invent, or whatever work genius wants to bring into creation. As a subtext to the rewards of genius are the days and"+
                 " weeks of intense concentration it takes to solve the problems that great works entail.",
    			 advice: "Let the world see your skills and talents.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Three of Coins in this position suggests that you showcase your unique capabilities. Let the world in on who you really are. This is a good time to seek recognition. Once you receive the appreciation you deserve, accept and savor the acknowledgment.Expect new and exciting offers. When they arrive, accept them graciously. Why hide your light under a bushel? It does not become you to display false modesty. Practice saying to yourself, Thank you, I accept the compliment until you learn to fully let in this kind of affirmative grace with ease.",
    			 img: '/assets/img/Pentacles/3.jpg',
    			 type: 'pentacle',
    			 card_id: 3
    		},
    		{
    			 title: '4Pentacles',
    			 name: '4 of Pentacles',
    			 general: "This suit, most often named Coins or Pentacles, is a symbol for a magical talisman that represented wealth or potential. This suit represents something supportive that is available to you -- whether it be health, some kind of talent, a material or financial resource.A Four in this suit has been used to express the paradoxical aspect of material security -- the two-edged sword of having been well supported and protected. It sounds completely idyllic until one investigates the real demands that prosperity places upon people -- the pressure of big decisions, responsibilities toward dependents or employees, and even tougher decisions in times of insecurity.An immature person thrust into such a position would lack the perspective to sensibly assess risks and rewards, would be vulnerable to bad advice or surprise developments, and could even put the livelihoods of loyal assistants at risk. This card also can refer to the subtler dependencies that comfort encourages,"+
                 " allowing laxness and self-indulgence to quietly degrade one's reserve of will.The character this card represents needs to move slowly and deliberately if change is required, as the consequences will affect more than just her or himself.Note: In the English decks, like Rider-Waite, we see a person who is stuck in their misunderstanding of how the material plane works. He's afraid to let go of his four measly coins, because he doesn't know he has to give in order to get. When looked at this way, this is the card of poverty consciousness.",
    			 advice: "Study the responsibilities you have inherited rather than just looking at the advantages they represent.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Four of Coins in this position signifies a young person, naive and pampered, who has been left an estate. Think conscientiously about all those people whom your activities impact, including those whose work and effort went into building what you inherited and those whose welfare depends upon your right management."+
                 "What you have been given is abundant; still, it is not without limits. If you are prudent and responsible, the endowment will grow. However, if you are frivolous or foolish, your behavior could undermine both your inheritance and the well being of others who are connected to it.In many decks, we see the image of a person who is stuck in his or her misunderstanding of how the material plane works. He's afraid to let go of his four measly coins, because he doesn't know he has to give in order to get. When looked at this way, this is the card of poverty consciousness.",
    			 img: '/assets/img/Pentacles/4.jpg',
    			 type: 'pentacle',
    			 card_id: 4
    		},
    		{
    			 title: '5Pentacles',
    			 name: '5 of Pentacles',
    			 general: "This suit, most often named Coins or Pentacles, is a symbol for a magical talisman that represented wealth or potential. This suit represents something supportive that is available to you -- whether it be health, some kind of talent, a material or financial resource.The Five of this suit is the card of desire and gratification, expressed in classical tradition as flattery and false promises. This card represents both the seducer and the one seduced. There is undeniable excitement in the attraction of opposites; we have all had delightful moments of magnetism with a stranger. However, if promises are only spoken to achieve short-term gratification with no intent of follow-through, or the attraction appears as competition to more fulfilling relationships, the long-term result won't be worth the thrill of the chase.The appearance of a viable relationship does not always bear out, so don't put anything of real value at risk over an infatuation."+
                 " Since the suit here is Coins, this is as likely to be related to business as to pleasure. Try to remove the influence of glamour from your thinking.Note: In the English decks, like the Rider-Waite, the sickly poor freezing outside a well lit church warn of the painful outcomes of bad choices, rather than focusing on the dynamic tension of the choosing itself.",
    			 advice: "Pooling resources allows you to make bolder moves and larger investments in future projects.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Five of Coins in this position advises you to create contractual agreements with those around you who have similar interests. In this kind of situation, there is strength in numbers. Put your heads together and devise a bold plan for future objectives and decide how to invest in their success. This Five of Coins recommends teamwork and the mutual benefits a combined effort can yield.Note: In the English decks, like the Rider-Waite, the sickly poor freezing outside a well-lit church warn of the painful outcomes of bad choices, rather than focusing on the dynamic tension of the choosing itself.",
    			 img: '/assets/img/Pentacles/5.jpg',
    			 type: 'pentacle',
    			 card_id: 5
    		},
    		{
    			 title: '6Pentacles',
    			 name: '6 of Pentacles',
    			 general: "This suit, most often named Coins or Pentacles, is a symbol for a magical talisman that represented wealth or potential. This suit represents something supportive that is available to you -- whether it be health, some kind of talent, a material or financial resource.The Six of this suit is the card of patronage -- generosity with strings attached. The picture shows a rich man giving alms, his reputation enhanced from his giving, but without having helped anybody really better him or herself. Sometimes there is an inference that the giver will be expecting something back for his giving, perhaps sexual favors.Sometimes this card is interpreted as referring to some kind of patron or benefactor who rescues a talented person from oblivion, but then wants to dictate what the artist works on as his fame grows. Inequality of power is generally a factor in this card, and the person being helped needs to be careful not to trade off heart and soul"+
                 " for a shortcut to fame or fortune. Each player in this scenario needs to examine the possibility they are taking one side or the other in an unbalanced power struggle.",
    			 advice: "Think of yourself as someone who can assist others in refining their skills and talents and using them successfully.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Six of Coins in this position asks you to think of yourself as a cosmic talent agent, seeking individuals who show a spark or gift. You may help them refine and upgrade their skills to fit a larger context. The outcome is a peer relationship with a sense of mutual regard and admiration.This is a delicate operation. You have to constantly check your intentions so that you are not expecting something in return. Do not for a minute feel proud about doing someone a favor. In truth what you are doing is paying back an old debt to those who served as your mentors.",
    			 img: '/assets/img/Pentacles/6.jpg',
    			 type: 'pentacle',
    			 card_id: 6
    		},
    		{
    			 title: '7Pentacles',
    			 name: '7 of Pentacles',
    			 general: "The Seven of this suit is typically a paean to the humble laborer who is willing to show up every day and sweat in the sun for next season's bounty. The traditional concept is cultivation, with an attitude that slow and steady wins the race, with faith in nature's assistance. The protagonist of this card doesn't make excuses, isn't whimsical or moody, but is dedicated and sees the job through. Of course, it's no good to count your chickens before they hatch, but there's no question that the person who is vigilant over a project is more likely to get the desired result.Someone who works with nature, cooperating with her ways, will waste less energy and time than the person who works against her. As a side meaning, we sometimes see this normally humble farmer in a moment of frenzy, betting the crop on a roll of the dice. This represents a moment of dementia, addiction or desperation which hopefully will not last long enough for the farmer to lose everything!",
    			 advice: "Success is won by perseverance. Be resolute in the use of your time and energy.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Seven of Coins in this position advises you to focus on the long run. Look beyond this week or this month. This card exemplifies the magic of compound interest. You'll have much better results with a slow and steady investment of time, energy and labor than you would generate by trying to win the lottery.The path to success is paved by perseverance. Glamorous or flashy moves cannot take the place of consistent steps in the right direction. If you do not understand this, perhaps you are moving in the wrong direction or are not motivated strongly enough.",
    			 img: '/assets/img/Pentacles/7.jpg',
    			 type: 'pentacle',
    			 card_id: 7
    		},
    		{
    			 title: '8Pentacles',
    			 name: '8 of Pentacles',
    			 general: "The Eight of this suit is the card of works. We see here the successful artisan spending time at his bench, hammering out the commissions he has attracted because of his skill. This artist is the best in her or his class, so popular that it's become difficult keep up with demand. She is paid whatever she asks and accepts only the most worthy assignments.If there is a problem in this card, it has to do with the trap of workaholism, the feeling of being so indispensable that you will not ask for help or delegate anything. There is also the issue of becoming so identified as the creator of elegant works, that the personal identity of the creator becomes consumed by the works themselves. This artisan seldom gets to have a home life, time off, much time for friends. The solution lies in balancing creative energy with a personal life.",
    			 advice: "When you dedicate yourself to producing quality work, you will gain greater freedom all the way around.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Eight of Coins in this position recommends that you focus on your main project and produce as much as you can, while staying healthy. This is an important time for meeting goals. However, do not work so hard that quality suffers.You are in a position where your effort can make a big difference. Apply yourself. Do the work and you will be rewarded with flexibility and freedom.",
    			 img: '/assets/img/Pentacles/8.jpg',
    			 type: 'pentacle',
    			 card_id: 8
    		},
    		{
    			 title: '9Pentacles',
    			 name: '9 of Pentacles',
    			 general: "The Nine of this suit points to a person who is financially secure enough to live comfortably. This is about someone supported by her own business, inheritance or property. This is one person in a thousand.This fortunate individual has turned a historical accident into a personal opportunity. This is one who has the vision and strength of character to hold onto gains against all odds. Do not be fooled at the apparent ease displayed on this card -- the person pictured is at the tail end of a long and stressful process of winning the right to be taken seriously. All of this grace has been paid for several times over.",
    			 advice: "Realize you are free to create a secure, enduring, and satisfying lifestyle for yourself. Look for ways to share it with those who have helped you along the way.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Nine of Coins in this position suggests that you prepare yourself for greater resources to be flowing in your direction. If you pay attention -- and keep the faith -- you can make a smooth transition into a state of well being and peace of mind. Hard work has brought you to a place where you could earn and receive grace, comfort, and freedom -- whether that be personal, emotional or financial.Exercise your imagination and create an abundant, sustainable, and enjoyable lifestyle (or relationship) for yourself. Acknowledge the friends and others who were loyal to you during the difficult times. Gather your dreams and get ready. You deserve this happiness.",
    			 img: '/assets/img/Pentacles/9.jpg',
    			 type: 'pentacle',
    			 card_id: 9
    		},
    		{
    			 title: '10Pentacles',
    			 name: '10 of Pentacles',
    			 general: "The Ten of this suit represents the final result of cumulative efforts -- perhaps after generations of effort -- resulting in such abundance that it directly and indirectly supports a lot of people. One layer of meaning refers to the pride of supporting your own lineage of well-loved souls.Imagine a flow of abundant resources so abundant that you are filled with not only pride but self-respect and gratitude. Such bounty can impact the destiny of many families and generations. Nobility obligates is possessors, and the obligation must be passed down from generation to generation along with the abundance and freedom.",
    			 advice: "You have the potential power to be a benefactor.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Ten of Coins in this position advises that you think of yourself as one who may be of great benefit to people. No matter whether it be a service, an invention or an idea -- you know you are holding a storehouse of value. Your potential treasure is enough to take care of you and yours for a long time."+
                 " Exactly how are you going to administer the rewards of your talent?Recall the time when you began this current path or endeavor. Remember your sincerity, your innocence and your original vision. Can you reproduce success and sustain inspiration as the administrator of your present abundance? Think of every act of spending and investing and securing as the sowing of seed that will sprout and produce another money tree in somebody else's yard. How can you get really clever and inventive at throwing those seeds? This is your next assignment.",
    			 img: '/assets/img/Pentacles/10.jpg',
    			 type: 'pentacle',
    			 card_id: 10
    		},
    		{
    			 title: '11Pentacles',
    			 name: '11 of Pentacles',
    			 general: "This card is traditionally entitled The Page, but in some modern decks appears as a Princess. This card's energy has to do with learning about compound interest and abundance. Her attention is focused on learning the natural laws that pertain to natural synergies.Whether the learning is about growing vegetables, the stock market or culturing new medicines in the lab, this Page wants to understand the underlying mechanism that supports the creation of results and abundance.You may see this person in the position of the attendant or junior partner, but that is only a current appearance. That demeanor of humility or servitude will soon enough disappear, as her sense of mastery increases. By studying the example of those around her, successful and unsuccessful, she is building a game plan that will lift her from obscurity and make her successful in her own right. She just has to collect the necessary education and experience, which she is doing right now.",
    			 advice: "The open-minded novice can look at a situation with fresh eyes and get down to the essentials with confidence.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Page of Coins (in some decks, a Princess) in this position advises that you study your chosen field seriously, gaining intellectual knowledge plus whatever experiential learning you can pick up as well. Listen to the stories of others, both their successes and their failures, and let yourself be inspired by their dedicated efforts.Leave no stone unturned. See if you can figure out why their experiments went the way they did and what you might do differently that could change the outcome. Passionately hunt for the missing pieces overlooked by those who came before you. Remember that the mind of a beginner is an open channel for genius. Let that openness lead you and you will instinctively penetrate to the heart of the matter.",
    			 img: '/assets/img/Pentacles/11.jpg',
    			 type: 'pentacle',
    			 card_id: 11
    		},
    		{
    			 title: '12Pentacles',
    			 name: '12 of Pentacles',
    			 general: "This card is usually called The Knight, but in some modern decks appears as the Prince. Traditionally, this card in this suit pictures an overseer of fertility and growth. His period of ascendancy is during the quiet years between conflicts, when everybody can collaborate in raising the collective standard of living. His horse is usually huge and thickset, more suitable to pulling a plow than riding swiftly into battle. His temperament is easygoing and relaxed, he's moving at the rate of the flow, because he knows that you can't hurry time.Seeing the bigger picture, like a farmer planning for the future, he doesn't allow momentary fads or fancies to distract him, and he doesn't take seriously those who do. One can feel his stability and dedication -- he is totally responsible and even somewhat predictable when it comes to his projects. He is earthy and gentle, as simple and deep as the soil he tills and the flowers he loves.",
    			 advice: "Your resources will enhance an endeavor significantly and you can reap many blessings as a result of your participation.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.When the Knight of Coins (in some decks, The Prince) falls in this position you are being advised to offer up your services to some project or enterprise in front of you. Your willing participation can make the difference between a marginal performance and a great one.The entire endeavor will be enhanced significantly by the resources you bring to it and you will be blessed tenfold. Expect to supervise and guide the project as well as influence the outcome of events. Without you on board, this endeavor is just another good idea.",
    			 img: '/assets/img/Pentacles/12.jpg',
    			 type: 'pentacle',
    			 card_id: 12
    		},
    		{
    			 title: '13Pentacles',
    			 name: '13 of Pentacles',
    			 general: "Traditionally, representing the energy of a Queen, this feminine guardian is endowed with enormous good sense and problem solving energy, but she is not particularly entrepreneurial. She loves to advise, encourage, and empower those she gets involved with, studying their problems with them and setting them up to solve them. Traditionally, she was pictured as the Sibyl or Oracle, perhaps a Tarot reader, who made herself available to people in need, no matter what their social class or situation. In modern times, she will be found educating, healing, managing disaster aid programs or a charitable drive of some sort.In every case, she does not see the benefits that exist in her life as belonging solely to her. She feels the needs of her people and will spend freely of her time, energy, skills, money to see that nobody is left out. For this, and because she likes to work in an atmosphere of beauty, enjoyment and abundance, she is sometimes accused of being extravagant."+
                 " But she works hard, and she sees no reason to deny herself the rewards of a job well done. Everyone who comes in contact with her feels enriched by her enjoyment in living.",
    			 advice: "Be confident that if you express your truth, you will not have to worry about the consequences. You will remain safe and sound.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Queen of Coins in this position advises you to trust the forces that have taken care of you up to this point. Continue to express your truth without worrying that you are going to lose the roof over your head or the bed you sleep in. It is your destiny to be safe and sound at this time in your life.Proceed with confidence and do what you so strongly feel must be done. Since the Queen of Coins is often the person with the best intuition in the crowd, you may feel at first as if you are going against the grain, only to later find yourself becoming the leader of a new trend.",
    			 img: '/assets/img/Pentacles/13.jpg',
    			 type: 'pentacle',
    			 card_id: 13
    		},
    		{
    			 title: '14Pentacles',
    			 name: '14 of Pentacles',
    			 general: "Representing the energy of a King, this card in the suit of Coins or Pentacles displays one who has accomplished a lot in life and has arranged his or her affairs so that he has much good to show for it. Possessing a practical genius in the ways of the world, he loves to build things. Because he's so good at deal-making, this character is privy to the biggest deals in town. He has the power to make or break people financially. Although this does not always win him love, it certainly earns him respect.In previous centuries this card referred to the myth of Midas, who loved gold so much that he was cursed so that everything he touched turned to gold. One day his daughter reached out to him and was turned into a golden statue. This story illustrates the downside of letting material security take too much precedence.While the character of this card understands the value of wealth, including the burden it produces, he or she is mature enough to keep things in perspective."+
                 " Even though the suit of Coins represents the material realm, this King is not just a materialist -- his sovereignty reflects higher values, as well as general welfare and prosperity.",
    			 advice: "Project all the confidence you can muster, as if you already know your plans are working and your goal is secured.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The King of Coins in this position advises you to behave as if you already were a success. Project confidence that your plans and goals are in the process of unfolding perfectly.Make your moves with authority and trust in your actions without waiting for acknowledgment or approval. Soon enough you will receive blessing after blessing. If you can learn to feel that kind of confidence in your body and get comfortable with it as your natural state, you will attract the support you desire.",
    			 img: '/assets/img/Pentacles/14.jpg',
    			 type: 'pentacle',
    			 card_id: 14
    		}
        ];
        Tarots.create(starterTarots, function(err, results){
            console.log(results);
        });
}
