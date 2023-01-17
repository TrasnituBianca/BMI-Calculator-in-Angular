import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../bmi/models/Person';

@Component({
  selector: 'app-bmi-details',
  templateUrl: './bmi-details.component.html',
  styleUrls: ['./bmi-details.component.css']
})
export class BmiDetailsComponent {
  person: Person;

  constructor(){
    this.person = history.state.person;
  }

  onWeightChange(event: any) {
    this.person.weight = event.target.value;
  }

  getPersonBmi(): number {
    return this.person.weight / (this.person.height * this.person.height);
  }

}
