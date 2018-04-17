var app = angular.module('myApp', []);

app.controller('MainController', ctrlFunc);
function ctrlFunc(){
    this.positiveCards = [];
    this.negativeCards = [];
    this.cards = clientCards;
    this.range = function(n) {
        return new Array(n);
    };
    this.go_href = function(type){
        console.log(type);
        window.location = '#section-' + type;
    }
    this.get_rows = function(cards){
        return Math.ceil(cards.length / 4);
    }
    this.incrementSelectCount = function(selectCount, card){
        selectCount = (selectCount+1) % 3;
        if(selectCount == 1){
            this.positiveCards.push(card);
        }else if(selectCount == 2){
            var index = this.positiveCards.indexOf(card);
            if(index > -1){
                this.positiveCards.splice(index, 1);
            }
            this.negativeCards.push(card);
        }else{
            var index = this.negativeCards.indexOf(card);
            if(index > -1){
                this.negativeCards.splice(index, 1);
            }
        }
        return selectCount;
    }
}
