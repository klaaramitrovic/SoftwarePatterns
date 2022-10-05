interface Department {
    printDepartmentName(): void;
}

class FinancialDepartment implements Department {
    private id?: number;
    private name?: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

    public printDepartmentName(): void {
        console.log("Financial department")
    }
}

class SalesDepartment implements Department {
    private id?: number;
    private name?: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

    public printDepartmentName(): void {
        console.log("Sales department")
    }
}

class HeadDepartment implements Department {
    private id: number;
    private name: string;

    private childDepartments: Department[];

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        this.childDepartments = []
    }

    public printDepartmentName(): void {
        console.log("Head department")
    }

    public addDepartment(department: Department): void {
        this.childDepartments.push(department);
    }
}

const salesDepartment: Department = new SalesDepartment(1, "Sales department");
const financialDepartment: Department = new FinancialDepartment(2, "Financial department");

const headDepartment: HeadDepartment = new HeadDepartment(3, "Head department");

headDepartment.addDepartment(salesDepartment);
headDepartment.addDepartment(financialDepartment);

headDepartment.printDepartmentName();

export {}