var app = angular.module('myApp', []);
app.controller('MainController', ctrlFunc);
function ctrlFunc(){
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
}
