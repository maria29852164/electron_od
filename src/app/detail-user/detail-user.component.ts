import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user-services";
import {ActivatedRoute} from "@angular/router";
import {User} from "../interfaces/User/user-interface";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
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
