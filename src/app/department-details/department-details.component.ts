import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  departments = [
    {id:1, name:"Angular"},
    {id:2, name:"Node"},
    {id:3, name:"MongoDB"},
    {id:4, name:"Ruby"},
    {id:5, name:"Bootstrap"}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
