interface Observer {
    sendEmail(): void;
}

//observer
class Client implements Observer {
    name: string
    email: string
  
    constructor(name: string, email: string) {
      this.name = name
      this.email = email
    }
  
    sendEmail(): void {
      // Code to send a mail for the client, informing there's a sale going on
      console.log(`Sending a mail to ${this.name}`)
    }
  
  }

class Sale {
    private observers: Observer[];
  
    constructor() {
      this.observers = [];
    }
  
    addObserver(ob: Observer) {
      this.observers.push(ob);
    }
  
    notifyObservers() {
      console.log('Notifying clients:');
      this.observers.map(observer => observer.sendEmail());
    }
    
    announceSale(){
        console.log("Preparing an event...");
        this.notifyObservers();
    }
}

const blackFriday = new Sale()

// Creates observers
const clientA = new Client('John', 'john@email.com');
const clientB = new Client('Jessica', 'jessica@email.com');
const clientC = new Client('George', 'george@email.com');

// Add clients to the observers list
blackFriday.addObserver(clientA);
blackFriday.addObserver(clientB);
blackFriday.addObserver(clientC);

// Notify all of clients about Black Friday
blackFriday.announceSale();

export {};