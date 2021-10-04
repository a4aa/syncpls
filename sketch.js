var abilitiesWar = ["Fireball", "Blue_fireball"];
var bluefireball;
var abilitiesHeal = ["Healing"];
var abilitiesDefend = ["LowShield"];
var playerImage;
var sheild1, fireballImg;
var backgroundImage, battleG;
var playButton, database;
var wait;
var player;
var game;
var fireball, sheild;
var index;
var playerCount = db.ref('/playerCount')

function preload() {
    fireballImg = loadImage("imgs/fireball.png");
    sheild1 = loadImage("imgs/sheild1.png");
    playerImage = loadImage("imgs/player.png");
    backgroundImage = loadImage("imgs/bg.png");
    battleG = loadImage("imgs/WasteLand.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(backgroundImage);

    db = firebase.database();

    player_ = new Player();
    game = new Game();

    player = createSprite(windowWidth/8,windowHeight-600/2*2/2-150,50,50,50);
    player.addImage(playerImage);
    player.scale = 0.5;

    playButton = createButton("Battle");
    playButton.position(width / 2 + 500-50-50, height / 2 - 20);

    // Wait();
    // play.updatePlayerIndex();
}

function draw() {
    playButton.mousePressed(() => {
        background(battleG);
        player_.updatePlayerIndex();
        playButton.hide();

        message = `Waiting for another player.. .</br>`
        wait = createElement("h1");
        wait.position(width / 2 - 300, height / 2 - 100)
        wait.html(message);
        playerCount = 2;
    
    if (playerCount == 1) {
        playButton.mousePressed(() => {
            background(battleG);
            player_.updatePlayerIndex();
            playButton.hide();

            message = `Waiting for another player.. .</br>`
            wait = createElement("h1");
            wait.position(width / 2 - 300, height / 2 - 100)
            wait.html(message);
            playerCount = 2;
        })
    }
    if (playerCount == 2) {
        fireball = createSprite(width/8,height/8,50,50);
        // fireball
        // fireball.position();
        sheild = createSprite(windth/7,height/7,50,50);
        // sheild.position(width/7,height/7);
    }

    drawSprites();
}

