from bs4 import BeautifulSoup
import requests

nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','page','knight', 'queen', 'king']
types = 'cups'
i = 6
url = "www.tarot.com/tarot/cards/"+ nums[i] +"-of-"+ types + "/universal-waite"

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
print "\t\t\t title: '"+ str(i) + types[0].upper() + types[1:] +"',"
print "\t\t\t name: '"+ str(i) + " of " + types[0].upper() + types[1:] +"',"
print '\t\t\t general: "'+ meanings[0]+'",'
print '\t\t\t advice: "'+ meanings[-1]+'",'
print "\t\t\t img: '/assets/img/" + types + "/"+ str(i) +".jpg',"
print "\t\t\t type: '"+ types[:-1] +"',"
print "\t\t\t card_id: "+ str(i) +""
print '\t\t},'
