"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    showEmployees() {
        console.log(...this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
accounting.addEmployee('driver');
accounting.addEmployee('cleaner');
accounting.showEmployees();
//# sourceMappingURL=index.js.map