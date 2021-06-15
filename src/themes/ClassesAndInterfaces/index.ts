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
