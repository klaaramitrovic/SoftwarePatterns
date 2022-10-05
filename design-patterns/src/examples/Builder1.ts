interface HousePlan
{
    setBasement(basement: string): void;
 
    setStructure(structure: string): void;
 
    setRoof(roof: string): void;
}

//ovo je product
class House implements HousePlan
{
 
    private basement?: string;
    private structure?: string;
    private roof?: string;
 
    setBasement(basement: string): void
    {
        this.basement = basement;
    }
 
    setStructure(structure: string): void
    {
        this.structure = structure;
    }
 
    setRoof(roof: string): void
    {
        this.roof = roof;
    }
}

//ovo je builder
interface HouseBuilder
{
    buildBasement(basement: string): void;
 
    buildStructure(structure: string): void;
 
    buildRoof(roof:string): void;
 
    getHouse(): House;
}

//ovo je concrete builder koji ima pokazivac na product
class IglooHouseBuilder implements HouseBuilder
{
    private house: House;
 
    constructor()
    {
        this.house = new House();
    }
 
    public buildBasement(basement: string): void
    {
        this.house.setBasement(basement);
    }
 
    public buildStructure(structure: string): void
    {
        this.house.setStructure(structure);
    }
 
    public buildRoof(roof: string): void
    {
        this.house.setRoof(roof);
    }
 
    public getHouse(): House
    {
        return this.house;
    }
}

// ovo je director koji ima pokazivac na konkretan builder
class CivilEngineer
{
 
    private houseBuilder: HouseBuilder;
 
    constructor(houseBuilder: HouseBuilder)
    {
        this.houseBuilder = houseBuilder;
    }
 
    public getHouse(): House
    {
        return this.houseBuilder.getHouse();
    }
 
    public constructHouse(): void
    {
        this.houseBuilder.buildBasement("Ice Bars");
        this.houseBuilder.buildStructure("Ice Blocks");
        this.houseBuilder.buildRoof("Ice Dome");
    }
}

const iglooBuilder: HouseBuilder = new IglooHouseBuilder();
const engineer: CivilEngineer = new CivilEngineer(iglooBuilder);
 
engineer.constructHouse();
 
const house: House= engineer.getHouse();

console.log("Builder constructed: " + house)

export {}