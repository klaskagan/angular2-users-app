import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class PostService {

  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url).map(res => res.json());
  }

  getComments(postId) {
    return this.http.get(this.buildCommentsUrl(postId)).map(res => res.json());
  }

  private buildCommentsUrl(postId) {
    return this.url + "/" + postId + "/comments"
  }

}
