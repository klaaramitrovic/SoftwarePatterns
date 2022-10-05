interface Director {
    notify(event: string): void;
}

class SchoolDirector implements Director {
    private professor1: Professor1;

    private professor2: Professor2;

    constructor(p1: Professor1, p2: Professor2) {
        this.professor1 = p1;
        this.professor1.setDirector(this);
        this.professor2 = p2;
        this.professor2.setDirector(this);
    }

    public notify(event: string): void {
        if (event === 'Director should notify professor2 that room is not available') {
            this.professor2.doConversationWithDirectorInHawaiRoom();
        }

        if (event === 'Professor2 have exam so theater is unavailable.') {
            this.professor1.findAnotherAppointment();
        }
    }
}

class Professor {
    protected director: Director;

    constructor(director?: Director) {
        this.director = director!;
    }

    public setDirector(director: Director): void {
        this.director = director;
    }
}

class Professor1 extends Professor {
    public doConversation(): void {
        console.log('Professor 1 have a conversation in Conference Room.');
        this.director.notify('Director should notify professor2 that room is not available');
    }

    public findAnotherAppointment(): void {
        console.log('Proffesor1 should find another appointment for exam.');
    }
}

class Professor2 extends Professor {
    public doConversationWithDirectorInHawaiRoom(): void {
        console.log('Professor 2 have conversation with director in Hawai Room.');
    }

    public haveExam(): void {
        this.director.notify('Professor2 have exam so theater is unavailable. ');
    }
}


const p1 = new Professor1();
const p2 = new Professor2();
const director = new SchoolDirector(p1, p2);

p1.doConversation();
p2.haveExam();
export {}