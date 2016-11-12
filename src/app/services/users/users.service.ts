import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map"
import {UrlRepository} from "../../utils/url-repository";

@Injectable()
export class UsersService {

  private url: string = UrlRepository.USERS_URL;

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get(this.url).map((res: Response) => res.json());
  }

  saveUser(user) {
    // save user
  }

}
