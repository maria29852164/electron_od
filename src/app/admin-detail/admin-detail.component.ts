import { Component, OnInit } from '@angular/core';
import {User} from "../interfaces/User/user-interface";
import {UserService} from "../services/user-services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  public id: string | undefined;
  public user:User | undefined;

  constructor(private userService:UserService, private activatedRoute : ActivatedRoute){
    activatedRoute.params.subscribe( params => {
      this.id = params['name'];
      console.log(this.id)
    })
  }

  ngOnInit(): void {

    this.userService.getUserDetailById(this.id).then((user: any)=>{
      this.user = user[0];
    });


  }

}
