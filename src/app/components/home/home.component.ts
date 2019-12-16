import { Component, OnInit } from "@angular/core";
import { PostsService } from "src/app/posts.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  posts;
  constructor(private postService: PostsService) {}
  ngOnInit() {
    this.postService.getPosts().subscribe(data => (this.posts = data));
  }

  onNewPost(post) {
    this.posts.unshift(post);
  }
}
