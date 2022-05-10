import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http:HttpClient){ }
getUsers(){
  return this.http.get("https://digimon-api.herokuapp.com/api/digimon")
}
getUserDetailById(id:string | undefined):Promise<any>{
    return this.http.get(`https://digimon-api.herokuapp.com/api/digimon/name/${id}`).toPromise().then((res)=>{
      return res;
  });
}
}
