import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-services';
import { User } from '../interfaces/User/user-interface';
import {AdminService} from "../services/admin-service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public admins: Array<User> | undefined;

  constructor(private readonly adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAdmins().subscribe((data:  any)=> {
      this.admins = data.slice(0,10);
      console.log(this.admins);

    })
  }

}
