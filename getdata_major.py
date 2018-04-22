from bs4 import BeautifulSoup
import requests



nums = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant',
        'The Lovers', 'The Chariot', 'The Strength', 'The Hermit', 'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death',
        'Temperance', 'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World']

for i in range(len(nums)):
    web = 'strength' if nums[i] == 'The Strength' else nums[i].replace(' ', '-').lower()
    default_title = nums[i].split()[-1]

    url = "www.tarot.com/tarot/cards/"+ web + "/universal-waite"

    page  = requests.get("http://" +url)

    soup = BeautifulSoup(page.content, 'html.parser')
    article = soup.find('article')

    meanings = []
    strs = []

    for kid in article.children:
        if not kid.name or kid.name == 'h3' or len(kid.text) < 2: continue
        if kid.name == 'h4':
            meanings.append(''.join(strs))
            strs = []
            continue
        if 'Revelation Tarot Reading' in kid.text:
            meanings.append(''.join(strs))
            continue
        strs.append(kid.text.strip(' \t\n\r'))

    print '\t\t{'
    if nums[i] == 'The Hanged Man':
        default_title = 'HangedMan'
    elif nums[i] == 'Wheel of Fortune':
        default_title = 'Wheel_of_Fortune'
    elif nums[i] == 'The High Priestess':
        default_title = 'Priestess'
    else:
        print "\t\t\t title: '" + default_title +"',"
    print "\t\t\t name: '"+ nums[i] +"',"
    print '\t\t\t general: "'+ meanings[0]+'",'
    print '\t\t\t advice: "'+ meanings[-1]+'",'
    print "\t\t\t img: '/assets/img/Majors/"+ default_title +".jpg',"
    print "\t\t\t type: 'Major',"
    print "\t\t\t card_id: "+ str(i+1) +""
    print '\t\t},'
