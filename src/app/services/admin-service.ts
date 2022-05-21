import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {enviroment} from "../../helper/enviroment";


@Injectable({
    providedIn: "root"
})
export class AdminService{
    constructor(private http:HttpClient){

    }
    getAdmins(){
        return this.http.get(enviroment.host+'/api/admins')
    }
}
