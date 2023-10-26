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