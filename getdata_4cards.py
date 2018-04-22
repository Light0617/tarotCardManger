from bs4 import BeautifulSoup
import requests

nums = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','page','knight', 'queen', 'king']
types = 'wands'
types1 = 'wands'
for i in range(14):
    url = "www.tarot.com/tarot/cards/"+ nums[i] +"-of-"+ types1 + "/universal-waite"

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
    if i > 0:
        print "\t\t\t title: '"+ str(i+1) + types[0].upper() + types[1:] +"',"
        print "\t\t\t name: '"+ str(i+1) + " of " + types[0].upper() + types[1:] +"',"
    else:
        print "\t\t\t title: 'Ace" + types[0].upper() + types[1:] +"',"
        print "\t\t\t name: 'Ace" + " of " + types[0].upper() + types[1:] +"',"
    print '\t\t\t general: "'+ meanings[0]+'",'
    print '\t\t\t advice: "'+ meanings[-1]+'",'
    print "\t\t\t img: '/assets/img/" + types + "/"+ str(i+1) +".jpg',"
    print "\t\t\t type: '"+ types[:-1] +"',"
    print "\t\t\t card_id: "+ str(i+1) +""
    print '\t\t},'
