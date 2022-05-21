import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-services';
import { User } from '../interfaces/User/user-interface';
import {AdminService} from "../services/admin-service";
import {Admin} from "../interfaces/admin/admin-interface";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public admins: Array<Admin> | undefined;

  constructor(private readonly adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAdmins().subscribe((res:  any)=> {
      this.admins = res.data.data.slice(0,10);

    })

  }

  handlerSearch(event: Event): void {
    event.preventDefault();
    console.log('hola');
  }

}
