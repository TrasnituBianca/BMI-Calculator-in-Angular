import { Component } from '@angular/core';
import { Person } from './models/Person';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {

  persones: Person[] = [
    { name: 'John Doe', age: 25, weight: 90, height: 1.77 },
    { name: 'Mary Anne', age: 30, weight: 60, height: 1.65 },
    { name: 'George Smith', age: 35, weight: 150, height: 1.97 },
    { name: 'Helen Hilton', age: 27, weight: 30, height: 1.60 }
  ]


  getPersonBmi = (person: Person): number => {
    return person.weight / (person.height * person.height);
  }

  decideWeightStatus(getPersonBmi: number): string {
    let bmiStatus: string;
    if (getPersonBmi < 18.5) {
      bmiStatus = "Underweight";
    }
    else if (getPersonBmi < 25) {
      bmiStatus = "Normal Weight";
    }
    else if (getPersonBmi < 30) {
      bmiStatus = "OverWeight";
    }
    else {
      bmiStatus = "Obese";
    }
    return bmiStatus;
  }


  getColor(status: string): string {
    switch (status) {
      case 'Underweight':
        return 'red';
      case 'Normal Weight':
        return 'green';
      case 'OverWeight':
        return 'orange';
      case 'Obese':
        return 'purple';
      default:
        return 'black'
    }
  }

}
