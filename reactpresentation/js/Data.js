var dataArr = [
 "Game Development",
"Video Game Industry - 130 Billion $ Revenue",
    "It is the process of creating a Interactive Experiance for the player",
    "Indie Games - <br> Developed over a short time by an individual or a small team of developers",
    "Top Indie Games <br><br>Minecraft , Angry Birds",
    "<ul><li>Development Team</li><li>Design Team</li><li>Programming Team</li><li>Level Design </li><li>Sound Specialist Team</li><li>Tester</li><li>Marketing Team</li></ul>",
    "Unity Game Engine (C#,JS,Boo) <br> Unreal Engine (C++) <br> Phaser (JS or TS) <br> Amazon Lumberyard (C++)<br> Construct (C++, C or Java)",
    "<u>How it works?</u><br> Game Loop <br> Draw <br> Event <br> Redraw",
    "Exercise!"
]

var slideContent = [
    {
        id: 0,
        content: "Lets React!"
}, {
        id: 1,
        content: "ReactJS simplifies the overall process of scripting components"
}, {
        id: 2,
        content: "It facilitates advanced maintenance and boosts productivity"
}, {
        id: 3,
        content: "It guarantees quicker rendering"
}, {
        id: 4,
        content: "ReactJS offers a more stable code"
}, {
        id: 5,
        content: "ReactJS is SEO friendly"
}, {
        id: 6,
        content: "React JS comes with helpful developer toolset"
}, {
        id: 7,
        content: "React framework for mobile app"
}, {
        id: 8,
        content: "Backed by a robust community"
}, {
        id: 9,
        content: "Idea<br><br>Passion<br><br>Team [Incase your not a techie] <br><br> Resolve"
}, {
        id: 10,
        content: "Thank U"
}, {
        id: 11,
        content: "You’ll get to pair-program"
}, {
        id: 12,
        content: "You’ll build something by the end of the weekend"
}, {
        id: 13,
        content: "You’ll meet many interesting, motivated people"
}, {
        id: 14,
        content: "You’ll get hold of amazing prizes - this may include Cash, Licences, Travel Vouchers, Tickets to International Events or even a VC to fund your Idea"
},
    {
        id: 15,
        content: "So you decided to attend a Hackathon. How do you find one?"
},
    {
        id: 16,
        content: "Hackathon announcements are very common via Twitter, Hackathon.io, EventBrite and Challengepost websites."
}, {
        id: 17,
        content: "Now you have registered for a Hackathon as an Individual or as a Team - What's next?"
}, {
        id: 18,
        content: "Decide what you want to get out of it"
}, {
        id: 19,
        content: "Strip down the features to the bare minimum"
}, {
        id: 20,
        content: "Pick a “stretch” topic to work on"
}, {
        id: 21,
        content: "Done is better than perfect"
}, {
        id: 22,
        content: "Now you have registered for a Hackathon as an Individual or as a Team - What's next?"
} // Decide what you want to get out of it
];
var dataHere = [];

var test = [{
    type: "slide",
    heading: slideContent[0].content,
    dataX: "-1000",
    dataY: "-1500",
    dataZ: "0",
    dataRX: "0",
    dataRY: "0",
    dataRZ: "0",
    dataS: "1",
    qColor: "black"
}, {
    type: "slide",
    heading: slideContent[1].content,
    dataX: "1000",
    dataY: "-1500",
    dataZ: "0",
    dataRX: "0",
    dataRY: "0",
    dataRZ: "0",
    dataS: "1",
    qColor: "black"
}, {
    type: "over"
}];

//{
//        type: "image",
//        height: 800,
//        spread: "contain",
//        url: "http://i.kinja-img.com/gawker-media/image/upload/s--qtreRRO_--/1975j6nrf0rt1png.png",
//        heading: "A Million Dollars is at stake!!!",
//        dataX: "10000",
//        dataY: "-5000",
//        dataZ: "10000",
//        dataRX: "0",
//        dataRY: "- 360",
//        dataRZ: "180",
//        dataS: "1",
//        qColor: "white"
//}
for (var i = 0; i < dataArr.length; i++) {
    dataHere.push({
        type: "",
        heading: dataArr[i],
        dataX: "0",
        dataY: "" + ((2000 * i) + 0),
        dataZ: "0",
        dataRX: "0"+ ((45 * i) + 0),
        dataRY: "0" + ((90 * i) + 0),
        dataRZ: "0" + ((45 * i) + 0),
        dataS: "1",
        qColor: "#fff"
    });
}
//
//for (var i = 1; i < 17; i++) {
//    dataHere.push({
//        type: "image",
//        
//        dataX: ""+ ((2000 * (i)) + 0),
//        dataY: "0",
//        spread: "100%",
//        url: "./img/Img"+i+".png",
//        height:700,
//        dataZ: "0",
//        dataRX: "0",
//        dataRY: "0",
//        dataRZ: "0",
//        dataS: "1",
//        qColor: "#fff"
//    });
//}
dataHere.push({
    type: "over"
});
