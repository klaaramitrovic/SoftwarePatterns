interface Movable {
    // speed in MPH 
    getSpeed: () => number;
}

class BugattiVeyron implements Movable {
    public getSpeed(): number {
        return 268;
    }
}

interface MovableAdapter {
    // returns speed in KM/H 
    getSpeed: () => number;
}

class MovableAdapterImpl implements MovableAdapter {
    private luxuryCars: Movable;

    constructor(luxuryCars: Movable) {
        this.luxuryCars = luxuryCars;
    }
    
    public getSpeed(): number {
        return this.convertMPHtoKMPH(this.luxuryCars.getSpeed());
    }
    
    private convertMPHtoKMPH(mph: number): number {
        return mph * 1.60934;
    }
}

const bugattiVeyron: Movable = new BugattiVeyron();
const bugattiVeyronAdapter: MovableAdapter = new MovableAdapterImpl(bugattiVeyron);
 
console.log(bugattiVeyronAdapter.getSpeed());

export {};
  