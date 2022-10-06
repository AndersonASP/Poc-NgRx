import { Component, OnInit } from '@angular/core';
import {EntityCollectionService, EntityCollectionServiceFactory} from "@ngrx/data";
import {Comments} from "../store/comments";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  commentsService: EntityCollectionService<Comments>;
  constructor(
    serviceFactory: EntityCollectionServiceFactory,
    private router: Router
  ) {
    this.commentsService = serviceFactory.create<Comments>('Comments');
  }

  commentsForm: any = {
    userId: 1,
    title: '',
    body: '',
  };

  ngOnInit(): void {}

  save() {
    this.commentsService.add(this.commentsForm).subscribe(() => {
      this.router.navigate(['/ngRxLet']);
    });
  }

}
