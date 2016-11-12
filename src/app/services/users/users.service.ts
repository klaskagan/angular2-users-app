import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

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

  saveUser(user) {
    // save user
  }

  private getUserUrl(userId){
    return this.url + "/" + userId;
  }

}
