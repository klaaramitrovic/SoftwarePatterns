interface Employee {  
    getId: () => number;  
    getName: () => string | null;  
    getSalary: () => number; 
    add: (employee: Employee) => void;
}

class BankManager implements Employee {  
    private id?: number;  
    private name?: string;  
    private salary?: number;  
 
    constructor(id: number, name: string, salary: number) {  
     this.id=id;      
     this.name = name;  
     this.salary = salary;  
    }  
    employees: Employee[]  = [];  
      
    add(employee: Employee): void{  
       this.employees.push(employee);  
    }    

    public getId(): number  {  
     return this.id ? this.id : 0;  
    }  

    public getName(): string | null {  
     return this.name ? this.name : null;  
    }  

    public getSalary(): number {  
     return this.salary ? this.salary : 0;  
    }  
}

class Cashier implements Employee{  
    private id?: number;  
    private name?: string;  
    private salary?: number;  

    constructor(id: number, name: string, salary:number)  {  
        this.id=id;  
        this.name = name;  
        this.salary = salary;  
    }   
    public add(employee: Employee): void {  
        //this is leaf node so this method is not applicable to this class.  
    }  
         
    public getId(): number {   
        return this.id ? this.id : 0;  
    } 

    public getName(): string | null {  
        return this.name ? this.name : null;  
    } 

    public getSalary(): number {  
        return this.salary ? this.salary : 0;  
    }  

    public print(): void {  
        console.log("==========================");  
        console.log("Id ="+ this.getId());  
        console.log("Name ="+ this.getName());  
        console.log("Salary ="+ this.getSalary());  
        console.log("==========================");  
    }       
} 

class Accountant implements Employee{  
    private id?: number;  
    private name?: string;  
    private salary?: number;  
    private books?: number;

    constructor(id: number, name: string, salary:number, books: number)  {  
        this.id=id;  
        this.name = name;  
        this.salary = salary;  
        this.books = books;
    }   
    public add(employee: Employee): void {  
        //this is leaf node so this method is not applicable to this class.  
    }  
         
    public getId(): number {   
        return this.id ? this.id : 0;  
    } 

    public getName(): string | null {  
        return this.name ? this.name : null;  
    } 

    public getSalary(): number {  
        return this.salary ? this.salary : 0;  
    }
    
    public getBooks(): number {  
        return this.books ? this.books : 0;  
    }

    public print(): void {  
        console.log("==========================");  
        console.log("Id ="+ this.getId());  
        console.log("Name ="+ this.getName());  
        console.log("Salary ="+ this.getSalary());  
        console.log("Books ="+ this.getBooks()); 
        console.log("==========================");  
    }       
}



const emp1: Cashier = new Cashier(101,"Sohan Kumar", 20000.0);  
const emp2: Accountant = new Accountant(101,"Sohan Kumar", 20000.0, 3); 
const manager1: Employee = new BankManager(100,"Ashwani Rajput",100000.0);  
            
manager1.add(emp1);  
manager1.add(emp2);  
emp1.print(); 
emp2.print();

export {}