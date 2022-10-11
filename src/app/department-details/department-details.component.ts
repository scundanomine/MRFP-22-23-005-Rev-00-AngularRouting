import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  // b:string="";
  userId = "";
  detail = "";
  flags = false;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') || ""
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

  //   getUserById(uid:number) {
  //     console.log(uid)
  //     let flag=false;
  //     for(let i=0;i<this.departments.length;i++){
  //         if(this.departments[i].id==uid) {
  //             // res.send("UserName:"+userData[i].userName)
  //             flag=true;
  //             break;
  //         }
  //     }
  //     if(flag==false)
  //         this.b ='Requested Data not found';
  // }

}
