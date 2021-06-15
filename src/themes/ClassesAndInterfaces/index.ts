// Module Classes and Interfaces (50-73) - 1h30m
// 52
// Creating a first Class

/*class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}
const accounting = new Department('Accounting');
console.log(accounting);*/


// 53
// Compiling to JavaScript
// some examples shows how code was compiled for old and new browsers (es5, es6)


// 54
// Constructor Functions & the "this" keyword
/*
class Department {
    name: string;
    employees: string[] = [];

    //build-in method
    constructor(n: string) {
        this.name = n;
    }

    //custom method
    describe(this: Department) {
        //method body
        console.log('Department: ' + this.name);
        // "this" refers to a concrete class was created
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    showEmployees(this: Department) {
        console.log(...this.employees)
    }
}
const accounting = new Department('Accounting');
accounting.describe();
accounting.addEmployee('driver');
accounting.addEmployee('cleaner');
accounting.showEmployees();
*/


// 55
// private and public access modifiers
/*
class Department {
    public name: string;
    private employees: string[] = [];
    constructor(n: string) {
        this.name = n;
    }
    describe(this: Department) {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    showEployee() {
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.addEmployee('worker');
accounting.employees[2] = 'Ban';
accounting.showEployee();
*/


// 56
// shorthand initialization
/*
class Department {
    employee: string[] = [];

    constructor(private id: string, public name: string) {};

    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
}

const accounting = new Department('d1', 'Accounting')
accounting.describe();
 */


// 57
// readonly


// 58
// Inheritance
/*
class Department {
    employee: string[] = [];
    constructor(private id: string, public name: string) {};
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
}
class ITDepartment extends Department {
    admins: string[];
    // Using own constructor in a class that inherits from another class presumes using super keyword to
    // to send forward properties to the constructor of base class.
    // super() here calls the constructor of the base class. It also takes parameters of the parent class.
    constructor(id: string, admins: string[]){
        super(id, 'IT');
        // You have to call super first in your constructor before you do anything with the "this" keyword
        this.admins = admins;
    }
}
const itDepartment = new ITDepartment('d2', ['Till', 'Peter']);
itDepartment.describe();
// Let's add Accounting class
class Accounting extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }
    addReport(text: string) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new Accounting('d3', []);
accounting.addReport('Some text...')
accounting.describe();
accounting.printReports();
*/


// 59
// Overriding Properties & the "protected" modifier
// If we use "private" for field if a base class - we won't override property.
// If we need override prop, we should change modifier to "protected".


// 60
// Getters & Setters

