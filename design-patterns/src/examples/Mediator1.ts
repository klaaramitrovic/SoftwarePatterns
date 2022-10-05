// Mediator interface
interface DirectorResponsibility
{
    registerHairdresser: (hairdresser: Hairdresser) => void;
 
    registerClient: (client: Client) => void;
 
    isHairdresserAvailable: () => boolean;
 
    setIsHairdresserAvailable: (status: boolean) => void;
    
}

// Concrete mediator
class Director implements DirectorResponsibility
{
    private client?: Client;
    private hairdresser?: Hairdresser;
    public hairdresserAvailable?: boolean;
 
    registerHairdresser(hairdresser: Hairdresser): void
    {
        this.hairdresser = hairdresser;
    }
 
    registerClient(client: Client): void
    {
        this.client = client;
    }
 
    isHairdresserAvailable(): boolean
    {
        return this.hairdresserAvailable ? true : false;
    }

    setIsHairdresserAvailable(status: boolean): void
    {
        this.hairdresserAvailable = status;
    }
}
 
interface Communication
{
    canClientBePreparedForHaircut: () => void;
}
 
class Client implements Communication
{
    private director: DirectorResponsibility;
 
    constructor(director: DirectorResponsibility)
    {
        this.director = director;
    }
 
    public canClientBePreparedForHaircut(): void
    {
        if (this.director.isHairdresserAvailable())
        {
            console.log("Hairdresser is available.");
            this.director.setIsHairdresserAvailable(true);
        }
        else
            console.log("Hairdresser is not available.");
    }
 
    public getReady(): void
    {
        console.log("Ready for haircut.");
    }
 
}
 
class Hairdresser implements Communication
{
    private director: DirectorResponsibility;
 
    constructor(director: DirectorResponsibility)
    {
        this.director = director;
        director.setIsHairdresserAvailable(true);
    }

    public canClientBePreparedForHaircut(): void
    {
        console.log("Permission granted for haircut.");
        this.director.setIsHairdresserAvailable(true);
    }
 
}
 
const director: DirectorResponsibility = new Director();
const client: Client  = new Client(director);
const hairdresser: Hairdresser  = new Hairdresser(director);
director.registerClient(client);
director.registerHairdresser(hairdresser);
client.getReady();
hairdresser.canClientBePreparedForHaircut();
client.canClientBePreparedForHaircut();

export{}