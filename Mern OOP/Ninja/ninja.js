class Ninja{
    constructor(name,health){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(`Ninja's Name: ${this.name}`);
    }
    showStats(){
        console.log(this.name, this.strength, this.speed, this.health);
    }
    drinkSake(){
        this.health=this.health+10;
    }
}
const ninja1 = new Ninja("Hyabusa",10);
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats(); 