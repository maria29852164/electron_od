import { Component, OnInit } from '@angular/core';
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

    this.adminService.getAdmins().subscribe((data: any)=> {
      this.admins = data;
      console.log(this.admins);

    })


  }


}
