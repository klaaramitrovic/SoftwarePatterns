import { Observable } from "rxjs";

const ladiesHairdresser = new Observable((lady) => {
    console.log("Preparing for haircut...");
    lady.next("Wash hair");
    lady.next("Hair drying");
    lady.next("Hair styling");
    lady.complete();
  });
  
  ladiesHairdresser.subscribe({
      next: (operation) => {
          if(operation === "Wash hair")
          {
            console.log("I am satisfied");
          }
          else if (operation === "Hair drying"){
            console.log("My hair is still wet")
          }
          else if (operation === "Hair styling"){
            console.log("I like my haircut.")
          }
        },
      error(err) {
          console.error('something wrong occurred: ' + err);
      },
      complete: () => {
          console.log("I won't pay you full price.");
      },
  });

  ladiesHairdresser.subscribe({
    next: (operation) => {
        if(operation === "Wash hair")
        {
          console.log("You did not wash all soap from my hair.");
        }
        else if (operation === "Hair drying"){
          console.log("My hair is dry.")
        }
        else if (operation === "Hair styling"){
          console.log("Haircut is perfect.")
        }
      },
    error(err) {
        console.error('something wrong occurred: ' + err);
    },
    complete: () => {
        console.log("Thank you. Take the tip.");
    },
});

export {}