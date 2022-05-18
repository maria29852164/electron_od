import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class AdminService{
    constructor(private http:HttpClient){

    }
    getAdmins(){
        return this.http.get("https://digimon-api.herokuapp.com/api/digimon")
    }
}
