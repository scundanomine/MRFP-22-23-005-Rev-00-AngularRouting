import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {id:1, name:"Angular"},
    {id:2, name:"Node"},
    {id:3, name:"MongoDB"},
    {id:4, name:"Ruby"},
    {id:5, name:"Bootstrap"}
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(depart:{id:number,name:string}) {
    this.router.navigate(['/departments', depart.id])
  }

}