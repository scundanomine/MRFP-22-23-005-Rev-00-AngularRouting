import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public uid = "";
  departments = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Node" },
    { id: 3, name: "MongoDB" },
    { id: 4, name: "Ruby" },
    { id: 5, name: "Bootstrap" }
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.uid = param.get('id') || ""
    })
  }

  onClick(depart: { id: number, name: string }) {
    this.router.navigate(['/departments', depart.id])
  }

  isSelected(department:number) {
    return department === parseInt(this.uid)
  }

}