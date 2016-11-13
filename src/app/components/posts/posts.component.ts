import {Component, OnInit} from "@angular/core";
import {PostService} from "../../services/posts/post.service";
import {Post} from "../../model/Post";
import {UsersService} from "../../services/users/users.service";
import {User} from "../users/add-user/User";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService, UsersService]
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  users: User[] = [];
  postsLoading;
  commentsLoading;
  currentPost;

  constructor(private postService: PostService, private userService: UsersService) {
  }

  ngOnInit() {
    this.loadUsers();
    this.loadPosts();
  }

  private loadUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  private loadPosts(filter?) {
    this.postsLoading = true;
    this.postService.getPosts(filter)
      .subscribe(
        posts => this.posts = posts,
        null,
        () => this.postsLoading = false
      );
  }

  filterPosts(filter) {
    this.currentPost = null;

    this.loadPosts(filter);
  }

  itemSelected(post) {
    this.currentPost = post;

    this.commentsLoading = true;
    this.postService.getComments(post.id)
      .subscribe(
        comments => this.currentPost.comments = comments,
        null,
        () => this.commentsLoading = false
      );
  }
}
