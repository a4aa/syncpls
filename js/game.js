class Game {
    constructor() {
        this.p1won = false;
        this.p2won = false;
    }

    static setButtons() {
        fireball = createImg(fireballImg);
        sheild= createImg(sheild1);
        fireball.position(width/8,height/8);
        sheild.position();
    }

    start() {
        fireball = createImg(fireballImg);
        fireball.position(width/8,height/8);
        sheild = createImg(sheild1);
        sheild.position(width/7,height/7);
    }

}