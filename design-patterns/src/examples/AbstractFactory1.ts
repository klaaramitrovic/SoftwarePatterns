interface Car {
    onClick: () => void;
}
  
  /** ConcreteProduct */
  class LuxuriousCar implements Car {
    onClick() {
      console.log("I am luxurious car");
    }
  }
  
  /** ConcreteProduct */
  class PlainCar implements Car {
    onClick() {
      console.log("I am plain car");
    }
  }
  
  /** Creator */
  abstract class Creator {
    public abstract create(type: string): void;
  }
  
  /** ConcreteCreator */
  class CarFactory extends Creator {
    create(type: string): LuxuriousCar | PlainCar {
      if (type === "Luxurious") {
        return new LuxuriousCar();
      } else {
        return new PlainCar();
      }
    }
  }
  
  const factory = new CarFactory();
  const lamborgini = factory.create("Luxurious");
  const minivan = factory.create("Minivan");
  const plainCar = new PlainCar();
  plainCar.onClick();
  
  export {};