import { Component, OnInit } from '@angular/core';
import { IEmployees } from 'app/Models/iemployees';
import { EmployeesService } from 'app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 
  employees: IEmployees[] = [];

  viewFirst: boolean = true;
  viewSecond: boolean = false;
  viewThird: boolean = false;

  filterText: string= "";

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  viewFirstChange() {
    if (this.viewSecond == false || this.viewThird == false) {
      this.viewFirst = true;
      this.viewSecond = false;
      this.viewThird = false;
    }
  }
  viewSecondChange() {
    if (this.viewFirst == false || this.viewThird == false) {
      this.viewSecond = true;
      this.viewFirst = false;
      this.viewThird = false;
    }
  }
  viewThirdChange() {
    if (this.viewFirst == false || this.viewSecond == false) {
      this.viewThird = true;
      this.viewFirst = false;
      this.viewSecond = false;
    }
  }
}
