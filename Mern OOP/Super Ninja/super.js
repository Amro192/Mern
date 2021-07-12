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
        console.log(`Ninja's Name: ${this.name}`, `Ninja's Strength: ${this.strength}`,
        `Ninja's Speed: ${this.speed}`, `Ninja's Health: ${this.health}`);
    }
    drinkSake(){
        this.health=this.health+10;
    }
}
class superSensei extends Ninja{
    constructor(name){
        super(name,200);
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        const wisdom = super.drinkSake();
        console.log(wisdom);    
    }
}

const Sensei = new superSensei("Master Splinter");
Sensei.speakWisdom();
Sensei.showStats();
Sensei.showStats();