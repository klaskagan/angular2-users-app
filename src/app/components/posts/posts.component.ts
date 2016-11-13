import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/posts/post.service";
import {Post} from "../../model/Post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {

  posts: Post[];
  isLoading: boolean;
  isLoadingComments: boolean;
  isItemSelected: boolean;
  postDetails: Post;
  comments: {}[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.isLoading = false;
    });
  }

  itemSelected(post: Post) {
    this.isLoadingComments = true;
    this.isItemSelected = true;
    this.postDetails = post;
    this.postService.getComments(post.id).subscribe( comments => {
      this.comments = comments;
      this.isLoadingComments = false;
    });
  }
}
