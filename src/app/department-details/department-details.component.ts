import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  departments = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Node" },
    { id: 3, name: "MongoDB" },
    { id: 4, name: "Ruby" },
    { id: 5, name: "Bootstrap" }
  ]

  userId = "";
  detail = "";
  flags = false;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.userId = this.route.snapshot.paramMap.get('id') || ""
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.userId=param.get("id") || ""
    })
    let uid = parseInt(this.userId);

    let flag = false
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id == uid) {
        this.detail=this.departments[i].name;
        flag = true;
        this.flags=flag;
        break;
      }
    }
    if (flag == false)
      this.flags = false;
  }

  clickPrevious() {
    let uid = parseInt(this.userId)-1;
    this.router.navigate(['/departments', uid])

    let flag = false
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id == uid) {
        this.detail=this.departments[i].name;
        flag = true;
        this.flags=flag;
        break;
      }
    }
    if (flag == false)
      this.flags = false;
  }

  clickNext(){
    let uid = parseInt(this.userId)+1;
    this.router.navigate(['/departments', uid])
    let flag = false
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id == uid) {
        this.detail=this.departments[i].name;
        flag = true;
        this.flags=flag;
        break;
      }
    }
    if (flag == false)
      this.flags = false;
  }

  clickBack(){
    this.router.navigate(['/departments', {id:this.userId}])
  }
}
