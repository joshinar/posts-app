import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  sendPost(title, body) {
    this.newPost.emit({ title, body });
  }
}
