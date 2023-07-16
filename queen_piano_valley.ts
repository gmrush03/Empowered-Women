class EmpowerWomen {
    constructor(public firstName: string, public lastName: string, public age: number) {}

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public getAge(): number {
        return this.age;
    }

    public getGender(): string {
        return "Female";
    }

    public getEmpowermentLevel(): string {
        return "High";
    }

    public setAge(newAge: number): void {
        this.age = newAge;
    }
}

interface IEmpoweredWomen {
    firstName: string;
    lastName: string;
    age: number;
    getFullName(): string;
    getAge(): number;
    getGender(): string;
    getEmpowermentLevel(): string;
    setAge(newAge: number): void;
}

class EmpoweredWomenService {
    public getEmpoweredWomen(firstName: string, lastName: string, age: number): IEmpoweredWomen {
        const empoweredWomen = new EmpowerWomen(firstName, lastName, age);
        return empoweredWomen;
    }
}

class EmpowermentProgram {
    private empoweredWomenList: IEmpoweredWomen[] = [];

    public addEmpoweredWomen(empoweredWomen: IEmpoweredWomen): void {
        this.empoweredWomenList.push(empoweredWomen);
    }

    public getEmpoweredWomenList(): IEmpoweredWomen[] {
        return this.empoweredWomenList;
    }

    public getEmpoweredWomenAverageAge(): number {
        let sum = 0;
        this.empoweredWomenList.forEach((empoweredWomen) => {
            sum += empoweredWomen.getAge();
        });

        return sum / this.empoweredWomenList.length;
    }
}

const empoweredWomenService = new EmpoweredWomenService();
const empowermentProgram = new EmpowermentProgram();

const lisa = empoweredWomenService.getEmpoweredWomen('Lisa', 'Simpson', 8);
const marge = empoweredWomenService.getEmpoweredWomen('Marge', 'Simpson', 36);
const maggie = empoweredWomenService.getEmpoweredWomen('Maggie', 'Simpson', 1);

empowermentProgram.addEmpoweredWomen(lisa);
empowermentProgram.addEmpoweredWomen(marge);
empowermentProgram.addEmpoweredWomen(maggie);

console.log(`Average Age of Empowered Women: ${empowermentProgram.getEmpoweredWomenAverageAge()}`);