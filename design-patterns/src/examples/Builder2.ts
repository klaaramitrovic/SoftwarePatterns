class Car {
    constructor(
      public name: string,
      public speed?: number,
      public possibilities?: string[]
    ) {}
  
    addName(name: string) {
      this.name = name;
    }
  
    addSpeed(speed: number) {
      this.speed = speed;
      return this;
    }
  
    addPossibilities(possibilities: string[]) {
      this.possibilities = possibilities;
    }
  }
  
  const labmorgini = new Car("Lambo")
    .addSpeed(217)
    .addPossibilities(["0-60 mph time", "0-124 mph time", "1/4 Mile time"]);
  
  export {};