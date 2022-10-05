interface Packing {  
    pack: () => string;  
    price: () => number;
}  

abstract class CD implements Packing{  
    public abstract pack(): string;
    public abstract price(): number;  
}  

abstract class Company extends CD{   
}  

class Sony extends Company{
    public pack(): string {
        return "Sony CD"; 
    }
    public price(): number {
        return 20;
    };    
}

class Samsung extends Company {    
    public pack(): string {
        return "Samsung CD"; 
    }
    public price(): number {
        return 15;
    };       
}

class CDType {  
    private items: Packing[]= [];  

    public addItem(packs: Packing): void {    
        this.items.push(packs);  
    } 

    public getCost(): void{  
        this.items.forEach(item => console.log(item.price()));
    }  

    public showItems(): void{  
     this.items.forEach(item => {
        console.log("CD name:" + item.pack());
        console.log("Price:" + item.price())
     })     
   }    
}

class CDBuilder {  

    public buildSonyCD(): CDType{   
       var cds: CDType = new CDType();  
       cds.addItem(new Sony());  
       return cds;  
    }  

    public buildSamsungCD(): CDType{  
        var cds: CDType = new CDType();  
        cds.addItem(new Samsung());  
        return cds;  
    }  
}

const cdBuilder: CDBuilder = new CDBuilder();  
const cdType1: CDType = cdBuilder.buildSonyCD();  
cdType1.showItems();  
  
const cdType2: CDType = cdBuilder.buildSamsungCD();  
cdType2.showItems(); 

export {}

