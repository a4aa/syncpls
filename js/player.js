class Player {
    constructor() {
        this.name = "Player"
        this.index = 0;
    }

    static read() {
        
        console.log(this.index)
    }

    updatePlayerIndex() {
        this.info = db.ref('/');
        this.info.on("value", (data) => {
            this.index = data.val();
        })
        console.log(this.index)
        this.index += 1
        console.log(this.index)
        db.ref('/').update({
            playerCount: this.index
        })
    }
}