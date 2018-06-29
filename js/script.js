// script.js
var myApp = angular.module('webapp', ['ngRoute', 'firebase']);
var map;
//var config = {
//    apiKey: "AIzaSyC3AFp66yHrTS5OzC1KogV88iklAAcYF5Q",
//    authDomain: "loctoc-interview.firebaseapp.com",
//    databaseURL: "https://loctoc-interview.firebaseio.com",
//    projectId: "loctoc-interview",
//    storageBucket: "loctoc-interview.appspot.com",
//    messagingSenderId: "744754369626"
//};
//firebase.initializeApp(config);

//map key
//AIzaSyC3AFp66yHrTS5OzC1KogV88iklAAcYF5Q
myApp.config(function ($routeProvider, $sceDelegateProvider) {

//    $routeProvider
//        .when('/', {
//            templateUrl: 'html/godview.html',
//            controller: 'cntrl'
//        });

});

//Cavalry Master	3 attack to cavalry,  
//Terror Tactic	-1 defence for all enemy 
//Strategist	Replace 1 unit after revealing
//Warcry	1 attack to all infantry
//Longbow	2 attack to archers
//Slaver	Can take 1 unit card from stack for 1 peasent card
//Defender	2 defence to all units

myApp.controller('cntrl', function ($scope, $http, $interval, $timeout, $compile, $firebaseObject) {
    
    $scope.player1Cards = [];
    
    var traits = [
        {
            title:"Cavalry Master",
            attack:"0",
            defence:"0",
            bonus:"3 attack to cavalry"
        },
        {
            title:"Terror Tactic",
            attack:"0",
            defence:"0",
            bonus:"-1 defence for all enemy "
        },
        {
            title:"Strategist",
            attack:"0",
            defence:"0",
            bonus:"Replace 1 unit after revealing"
        },
        {
            title:"Warcry",
            attack:"0",
            defence:"0",
            bonus:"1 attack to all infantry"
        },
        {
            title:"Longbow",
            attack:"0",
            defence:"0",
            bonus:"2 attack to archers"
        },
        {
            title:"Slaver",
            attack:"0",
            defence:"0",
            bonus:"Can take 1 unit card from stack for 1 peasent card"
        },
        {
            title:"Defender",
            attack:"0",
            defence:"0",
            bonus:"2 defence to all units"
        }
    ];
    
    var units = [
        {
            title:"Spearman",
            attack:"4",
            defence:"8",
            bonus:"2 against Cavalry"
        },
        {
            title:"Archer",
            attack:"3",
            defence:"4",
            bonus:"Call other archers to fight single unit"
        },
        {
            title:"Swordman",
            attack:"6",
            defence:"5",
            bonus:"3 against Melee"
        },
        {
            title:"Knight",
            attack:"12",
            defence:"6",
            bonus:"2 against all revealed Units"
        },
        {
            title:"Scout",
            attack:"6",
            defence:"5",
            bonus:"Reveals all Units"
        },
        {
            title:"Peasent",
            attack:"1",
            defence:"2",
            bonus:"Enemy archers will target peasent first"
        },
        {
            title:"Agent",
            attack:"0",
            defence:"0",
            bonus:"Steal a Trait"
        }
    ];
    
    var allCards = units;
    allCards = allCards.concat(traits);
    
    $scope.takeCard = function(){
        
        var cardObj = {
            title:"Spearman",
            attack:"4",
            defence:"8",
            bonus:"2 against Cavalry"
        }
        
        cardObj = allCards[Math.floor(Math.random() * allCards.length)];
        var d = new Date();
        cardObj["id"] = d.getTime();
        
        $scope.player1Cards.push(cardObj);
    }
    
    
    
});

