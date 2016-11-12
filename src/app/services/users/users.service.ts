import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {User} from "../../components/users/add-user/User";

@Injectable()
export class UsersService {

  private url = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get(this.url).map((res: Response) => res.json());
  }

  getUser(id) {
    return this.http.get(this.getUserUrl(id))
      .map(res => res.json());
  }

  addUser(user: User) {
    return this.http.post(this.url, JSON.stringify(user)).map(res => res.json());
  }

  updateUser(user){
    console.log(user);
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user)).map(res => res.json());
  }

  private getUserUrl(userId){
    return this.url + "/" + userId;
  }

}
