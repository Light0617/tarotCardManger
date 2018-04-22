var Tarots = require('../models/tarotModel');

module.exports = function(app){
        var starterTarots = [
            {
    			 title: 'AceWands',
    			 name: 'Ace of Wands',
    			 general: "This suit, most often called Wands and sometimes called Rods or Staves, represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.An Ace of this suit in this position symbolizes a pivotal act, or fateful step, that will set loose a chain of events leading toward your desired goal. It refers to a birth or new beginning, the inauguration of an endeavor, and the building of the necessary commitment to see a project or plan through. It personifies an aroused Will that is totally focused, aiming at the bulls-eye.",
    			 advice: "Be ready to act on imminent opportunity.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Ace of Wands in this position encourages energetic movement toward activity. Brace yourself and get ready to spring into action. You may need to make your move soon, so make sure you are fully prepared. Trust your instincts and spontaneity. When the opportunity comes, you may want to seize it without hesitation.So quicken your senses and raise your antenna. There's excitement in the air, and supports your immediate ambitions.",
    			 img: '/assets/img/wands/1.jpg',
    			 type: 'wand',
    			 card_id: 1
    		},
    		{
    			 title: '2Wands',
    			 name: '2 of Wands',
    			 general: "This suit, most often called Wands and sometimes called Rods or Staves, represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.The Two in this suit, often portrayed as crossed wands, imply a deadlock due to energies working at cross-purposes. This could refer to an internal split -- perhaps a duel between optimistic and pessimistic parts of your psyche, for example -- or some situation where you feel damned if you do, damned if you don't."+
                 " This could be a standoff with another person or rubbing up against limitations that are currently imposed upon you.This card points to the possibility of creeping self-doubt -- the kind that arises in a situation where one has bitten off more than one can chew. Give yourself a moment to take in the full implications of your situation. Find your bearings again before launching back into action. Deal with real concerns now -- before they become regrets!",
    			 advice: "Be patient and observant as you go through the decision making process.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Two of Wands in this position advises you to respect your own decision making process. Instead of criticizing yourself for indecisiveness, appreciate the various implications of possible choices. Avoid pushing yourself to make a commitment.Keep meditating, watching the situation and witnessing the forces at work. At some point you will have enough information to see clearly. The decision-making process will be over and the choice will be clear.",
    			 img: '/assets/img/wands/2.jpg',
    			 type: 'wand',
    			 card_id: 2
    		},
    		{
    			 title: '3Wands',
    			 name: '3 of Wands',
    			 general: "This suit, most often called Wands and sometimes called Rods or Staves, represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.A Three in this suit symbolizes an inner balance that allows you to feel more optimistic about new endeavors you are committed to, or want to commit to. In the illustrated Tarots, the human character is standing on his balcony, watching ships leave the harbor, loaded with his goods for far-off ports, dreaming of the fortune he will reap if all goes well. Summon the optimism within you.This energy must be patient and trusting, because he or she will have to wait some time to find out how the ships have fared. Meanwhile, a lot of resources are tied up until they return with the bounty. Only those truly confident in their ideas and abilities would undertake such a risk. This card represents the energy a person needs to take on great adventures and accomplish noble (and remunerative) deeds."+
                 "A detail that sometimes appears in the more esoteric Tarots is a winged wand with two snakes twining around it, called the Caduceus, which is Mercury's wand. This is an ancient symbol of the healer or shaman, one who can travel between the worlds to rescue souls from death or possession. Perhaps the feeling of empowerment this card represents points to the internal mechanisms of self-healing. Perhaps it refers to the courage it takes to be an entrepreneur or an inventor, which is in itself a magical process -- bringing not only opportunity for success, but also an awakening to higher potentials.",
    			 advice: "Go with your intuition. This is the time to make your move.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Three of Wands in this position advises you to act quickly and powerfully on an idea or desire you have been feeling. This card suggests exquisite timing, staying in the moment and responding to your instinct or intuition.Every fiber of your being may be saying this is a great opportunity, even if those around you aren't as convinced. There's nothing to lose from taking a risk; this is a great moment in your entrepreneurial growth. Make your move and sort out the details later.",
    			 img: '/assets/img/wands/3.jpg',
    			 type: 'wand',
    			 card_id: 3
    		},
    		{
    			 title: '4Wands',
    			 name: '4 of Wands',
    			 general: "This suit, most often called Wands and sometimes called Rods or Staves, represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.A Four in this suit is the teamwork card, often symbolized by two couples who have come together to create something profitable and enduring. Quite likely, they will create a gift for the future -- a business, hospital, theater or university. They represent the founding families of the future community that will grow around their inspiration. Teamwork is the key.It takes time to build a grand vision; and other people of ambition and talent must be attracted to it for it to fulfill its potential. What we see here is the start-up group, the founding visionaries committing their energies to designing the blueprints and laying the groundwork. This partnership is the prototype for society or any grouping where the whole is greater than the sum of the parts.",
    			 advice: "Exchanging ideas and proposals for addressing a universal need ensures approval and support.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Four of Wands in this position supports your good, productive, evolutionary ideas. Concentrate on networking: use your charisma and power to attract like-minded souls so you can significantly increase your sphere of influence -- the more people you can reach, the better.Your enthusiasm empowers your vision, which is thriving with possibilities. As you share more freely what is on your mind and in your heart, others will see themselves in your vision, so you naturally receive approval, support, assistance and abundance. In your own way, you are addressing a universal need.",
    			 img: '/assets/img/wands/4.jpg',
    			 type: 'wand',
    			 card_id: 4
    		},
    		{
    			 title: '5Wands',
    			 name: '5 of Wands',
    			 general: "This suit, most often called Wands and sometimes called Rods or Staves, represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.The Five of this suit symbolizes struggles caused by ambitious maneuvering and a competitive urge. This could be about someone who is pushing his or her agenda forward at the expense of others.There can be a fine line between demonstrating personal excellence and making others feel like losers. It may be necessary to ask yourself, who is it that really benefits when we all fight so hard for such small rewards? Am I serving a negative, manipulative agenda when I start applying battle metaphors to business?Even when your only motive is to be the best you can be, it is understandable to want recognition for what is fine and unique about you. However, minimize the number of egos bruised in the process or your success will be celebrated alone.",
    			 advice: "Identify your passions and build your mission around them.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Five of Wands in this position encourages you to find your natural ambition. Identify what energizes you, what you would fight for and what you are passionate about -- even when you're tired or discouraged. Strive to make that the centerpiece of your mission.This is how you find your livelihood and establish your path of service.",
    			 img: '/assets/img/wands/5.jpg',
    			 type: 'wand',
    			 card_id: 5
    		},
    		{
    			 title: '6Wands',
    			 name: '6 of Wands',
    			 general: "This suit, most often called Wands and sometimes called Rods or Staves, represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.The Six of this suit points to the respect and acknowledgment due to you for your efforts to solve the problems of your community. The image is usually of a victory parade, after the celebrated leader helped troops win a pivotal battle.It took the whole tribe to win the victory, of course, but it was the leader's heroism and clarity under pressure that inspired them to overcome. The team is thrilled that the leader led them to victory. This card points to a time to let everyone relax and celebrate -- if you are the leader, let them applaud you. They are seeing their better selves reflected in you -- a victory indeed!",
    			 advice: "Fearlessly act on your convictions and others will be inspired to support your ideals.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Six of Wands in this position advises taking action on your most burning and passionate convictions, no matter what the social consequences. Continue to articulate and define yourself in light of the torch you are carrying. This inspires others to conceive some new ideas of their own.You may find yourself becoming something of a leader. Usually the first person to break away from conventional thought is the one to define a new trend. Under the circumstances, there is a solid need for a fresh voice and vision -- so make your move. Those around you who are ready for change will support your leadership.",
    			 img: '/assets/img/wands/6.jpg',
    			 type: 'wand',
    			 card_id: 6
    		},
    		{
    			 title: '7Wands',
    			 name: '7 of Wands',
    			 general: "This suit, most often called Wands and sometimes called Rods or Staves, represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.The Seven of this suit generally shows a person who is nearly always successful in working his or her will in the world. This is a person who is truly gifted, standing head and shoulders above the rest. This person is sets standards and sets examples that exceed previous conceptions of what is possible.In historical Tarot, this person would most likely be portrayed as an admired and feared warrior who has vanquished his adversaries against all odds. Such an outstanding feat could just as easily apply to the world of the media, politics or business.Beware of conceitedness that can be hinted at by this card. Being successful does not make you invincible, and it does not protect you against errors! Enjoy your fifteen minutes of fame and then get back to your tasks, or your head will swell,"+
                 " to the detriment of your ability to succeed again.",
    			 advice: "Rouse your ambition and the competitive aspects of your nature to push beyond limits. Launch yourself.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Seven of Wands in this position tells you that the time for peak performance is now. Even if slightly unprepared, you may want to push yourself beyond your usual limits, thinking in larger terms and tweaking your competitive nature. Time and effort spent in preparation could pay off handsomely. You might be the one who vaults right over the heads of those who thought they could outdo you.Move beyond rhetoric and verbal challenges. Now could be the moment to prove what puts you head and shoulders above the rest by demonstrating it in action.",
    			 img: '/assets/img/wands/7.jpg',
    			 type: 'wand',
    			 card_id: 7
    		},
    		{
    			 title: '8Wands',
    			 name: '8 of Wands',
    			 general: "This suit, most often called Wands and sometimes called Rods or Staves, represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.The Eight of this suit often shows a flight of spears or staffs moving through the air in formation, as if a hidden group of archers had let them fly all at once. This can refer to swiftly unfolding events, whether of unintentional or intentional design. There are also versions that emphasize the agricultural cycle, paralleling the yearly crop cycle with the swift growth of children into adults with children of their own.In each case, the emphasis is on the necessity of change and the challenge of keeping up with it. With the turning of the seasons, we are constantly being forced to deal with change and there is no remedy but to live with that in mind. So, get busy -- there is no time to waste!",
    			 advice: "Recent successes provide confidence to accomplish more.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.With the Eight of Wands in this position, learn all you can from recent successful experiences. Take note of what worked before and what did not. You possess awareness as to how to effectively apply your imagination to shape the world in productive and aesthetic ways. Thus, the testament to your talents may be revealed for everyone to see and admire.Even if you had to leave it all behind, you know you could start all over among total strangers and succeed once again. This valuable self-confidence makes you free to strike out in new directions and not just cling to past successes and previous accomplishments.",
    			 img: '/assets/img/wands/8.jpg',
    			 type: 'wand',
    			 card_id: 8
    		},
    		{
    			 title: '9Wands',
    			 name: '9 of Wands',
    			 general: "This suit, most often called Wands and sometimes called Rods or Staves, represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.The Nine of this suit usually indicates a need for rest; some time out to mend wounds and savor victories. Although it may be hard to do, this card would have you leave the field to fresher teammates for now. Release any attachment you may feel to being in a leadership role for now.In the pictured Tarot decks, the protagonist is shown as too exhausted to be effective in defending his gains, yet resisting the suggestion to ask for help or step down. He or she hasn't had the chance to totally heal from past blows, and is still up there taking another beating. This is the fix that comes from making oneself irreplaceable. Fight off the maniacal thought that only you can save the day! Stop rejecting loved ones who want to help you.",
    			 advice: "There is an important place for rest and recuperation in any endeavor.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.When the Nine of Wands is in this position, you have done everything you can to bring a situation to a successful conclusion. The full range of possibilities has been exhausted and all the creative energy that is available has already been put to use. This may be a great time to lay down your concerns and enjoy a rest. There is nothing more to bring to the mission unless you regenerate and restore the energy you have put into the cause.While it is praiseworthy to give all you have for something or someone that means a lot to you, masochism and martyrdom are ill advised. Take a break. No one can fault you for it now.",
    			 img: '/assets/img/wands/9.jpg',
    			 type: 'wand',
    			 card_id: 9
    		},
    		{
    			 title: '10Wands',
    			 name: '10 of Wands',
    			 general: "This suit, most often called Wands and sometimes called Rods or Staves, represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.The Ten of this suit represents an all-out effort, an obsessive commitment to a task which demands everything you've got. The person shown in decks with pictures is in no position to rest until he makes it inside the stout walls of the well-defended castle in the distance. If he fails, he will become prey for the highway robbers after dark.It doesn't matter that he's overloaded and underfed. With this card, you have to do whatever it takes to get to completion -- nothing can be allowed to interfere.",
    			 advice: "Rediscover the idealism and optimism of your youth to reinvigorate your vision.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Ten of Wands in this position advises you to remember the true, simple heart of your youth and all the idealism it held. Now may be the time to reach deep into yourself and identify your purest, most wholesome impulses. As you do this, allow your optimistic and honorable side to see what's good about the world.Look beyond the challenges, setbacks, disappointments and frustrations you tend to see so easily. As you reawaken your high minded inner child, you will refresh your daily life with a joyful purpose.",
    			 img: '/assets/img/wands/10.jpg',
    			 type: 'wand',
    			 card_id: 10
    		},
    		{
    			 title: '11Wands',
    			 name: '11 of Wands',
    			 general: "This suit, most often called Wands and sometimes called Rods or Staves, represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.This card is traditionally entitled the Page, but in some modern decks appears as a Princess. This archetype is that of a unique individual, a nonconformist, often something of a bohemian, definitely independent by nature. He or she requires little in the way of affirmation or approval. Perhaps a mischief-maker,"+
                 " often an innovator or inventor, the energy represented by this card will only serve others until he or she figures out how to get others to serve him/her.This person's freedom is so important they would rather go as a peasant among strangers than inherit a fortune with strings attached. Don't be fooled by this humble appearance. This person is a future captain of industry or world leader, now serving an apprenticeship. These people are sometimes seen planting a staff like a flagpole into the earth in the far off wilderness (where they can start fresh without having to make any compromises). You could think of this card as a wild card.",
    			 advice: "Quietly gather information that will help you direct a situation to unity.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.This card is traditionally entitled a Page, but in some modern decks as a Princess. In this position, this card suggests that you cannot know how to facilitate communication until you have studied your environment. Your task may be to blend into your surroundings so you can gather information and get a clear sense of what is going on around you.Think of yourself as a secret agent for the greater good. In due time, others may recognize the role you play in the transformation from divisiveness to unity. However, right now you are being asked to watch quietly from the sidelines.",
    			 img: '/assets/img/wands/11.jpg',
    			 type: 'wand',
    			 card_id: 11
    		},
    		{
    			 title: '12Wands',
    			 name: '12 of Wands',
    			 general: "This suit, most often called Wands and sometimes called Rods or Staves, represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.This character is traditionally called the Knight, but in some modern decks appears as the Prince. Traditionally, this card indicates the energy of an instigator, a fire-starter, a feisty and easily provoked character who is liable to attack first and ask questions later. This energy is quick to anger and enjoys a fight -- so much so that the thought of a diplomatic solution can provoke a secret disappointment! Nevertheless, he sees himself as trying to help, rescuing the world from its madness by imposing his sense of order upon it.His vices are bossiness, paranoia and a tendency towards overkill. Nevertheless, there are times when his energy is perfectly appropriate, like when his assertively protective nature is defending threatened treasures or interfering with dark forces. "+
                 "The trick is to keep a sense of proportion when this Knight unleashes his fire, because he enjoys intense experiences and is always ready to take it to the next level. Once in awhile, this kind of intensity is called for, but on a daily basis it is exhausting.",
    			 advice: "Focused action must be taken; appropriate resources are available to draw upon, and the time is ripe.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Knight of Wands (in some decks, a Prince) in this position advises that you modify your self-image in order to get a sense of yourself as a person of action. No matter what your past patterns have been, it is fully possible to place yourself solidly on the road toward the future.Not only can you get a clear sense of the proper path, but you will also have enough instructions to be self-directing. Necessary skills and resources are available to you, and the time is right for you to act. Once you get started, you may be surprised how easy it can feel, but don't be seduced by that feeling. There will be comfortable stretches of the road and there will be distinctly uncomfortable ones. Know that any form of motion is better than no motion.",
    			 img: '/assets/img/wands/12.jpg',
    			 type: 'wand',
    			 card_id: 12
    		},
    		{
    			 title: '13Wands',
    			 name: '13 of Wands',
    			 general: "This suit, most often called Wands and sometimes called Rods or Staves, represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.Traditionally, representing the energy of a Queen, this woman represents the natural manager, whose gift is to inspire teamwork and divvy up tasks. She is the one who sees ensures everything runs smoothly. She'll be sweating in the sun along with her family or crew, inspiring everybody to keep up and supporting morale with her infectious energy."+
                 "She is the best kind of manager to have, because she is like a challenging but encouraging mother, who knows you have it in you. She believes in her charges and they work hard to please her. She is not, however, sentimental. Like a good farmer, she views her crops, her animals, even the people who work for her, as necessary resources for the achievement of the higher goal. If any aspect is no longer productive or cost-effective, she can let them go without a second thought. Do not look to her for sympathy.",
    			 advice: "Realize you are not in the leadership role right now. Concentrate on a more supportive role that promotes the overall objectives.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The Queen of Wands in this position reveals a need to hold your place in the chain of command and respect the hierarchy (at least for now). This may not be a time for you to be at the helm, even if you are motivated by a strong dedication to completing a project or overcoming a challenge.A perceived deficiency in leadership may make you want to take hold of the reins, but don't do it! Restrain yourself and remain loyal to your higher-ups. Stay focused and energetic. Enthusiastically confront the challenges directly in front of you. Perform in good faith and encourage others to do the same.",
    			 img: '/assets/img/wands/13.jpg',
    			 type: 'wand',
    			 card_id: 13
    		},
    		{
    			 title: '14Wands',
    			 name: '14 of Wands',
    			 general: "This suit, most often called Wands and sometimes called Rods or Staves, represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.Traditionally representing the energy of a dynamic King, this card represents the classic conquering hero. He's a charismatic leader, entrepreneurial and ambitious, always creating new adventures. He does this because he doesn't like to stay home or to have to mind the store -- he gets to feeling restless and bored with the predictable."+
                 " If you need a crusader, or someone to take on a big challenge, he's your man. He needs a big assignment, and would rather lead than follow.It could be said that he has a bit of an ego, as evidenced in his enjoyment of flattery and praise. A bit of a performer, he overachieves in situations where it will be noticed, but in private he wants to be served and adored like the head lion of a pride. A benevolent dictator, he makes life wonderful for those he loves and just the opposite for those who displease him.",
    			 advice: "The possibility of success is open to you. There are no substantial obstacles.The card in the Advice position suggests a course of action which will harmonize what you want with what is currently possible.The King of Wands in this position reminds us that our lives are designed to bring us eventually to a place of self-ownership. An opportunity for self-empowerment is presenting itself to you now. Recognize that through your attitude and the way you express yourself to others, you hold the power over your own experiences in life.You are the determining factor in this situation and circumstances will proceed in the direction that you steer them. Indecision or doubt are not appropriate responses when clarity and confidence are critical. As you take on a bigger role, it will begin to feel more comfortable.Seize the opportunity to influence events, because everything is waiting for you.",
    			 img: '/assets/img/wands/14.jpg',
    			 type: 'wand',
    			 card_id: 14
    		}
        ];
        Tarots.create(starterTarots, function(err, results){
            console.log(results);
        });
}
