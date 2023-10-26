class Ninja {
    constructor(nombreAtr, saludAtr){
        this.nombre = nombreAtr;
        this.salud = saludAtr;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    
    sayName(){
        console.log(this.nombre);
    }

    showStats(){
        console.log("Nombre: " + this.nombre);
        console.log("Salud: " + this.salud);
        console.log("Velocidad: " + this.velocidad);
        console.log("Fuerza: " + this.fuerza);
    }

    drinkSake(){
        this.salud = this.salud + 10;
    }
}

var ninja1 = new Ninja ("Kint",10);
console.log(ninja1);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(nombreAtr){
        super(nombreAtr);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;


    }

    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
        this.drinkSake()
    }

    
}

var sensei1 = new Sensei("Kint sensei");
console.log(sensei1);
sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();