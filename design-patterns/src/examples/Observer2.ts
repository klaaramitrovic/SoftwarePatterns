import { Observable } from "rxjs";

const blackFriday = new Observable((client) => {
  console.log("Preparing for an event...");
  client.next();
  client.complete();
});

blackFriday.subscribe({
    next: () => {
        console.log("send an email to client Klara Mitrovic");
      },
    error(err) {
        console.error('something wrong occurred: ' + err);
    },
    complete: () => {
        console.log("done");
    },
});

blackFriday.subscribe({
    next: () => {
        console.log("send an email to client Mira Mircetic");
      },
    error(err) {
        console.error('something wrong occurred: ' + err);
    },
    complete: () => {
        console.log("done");
    },
});


export {}