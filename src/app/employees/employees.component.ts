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

  filterText: string= "";

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }
}
