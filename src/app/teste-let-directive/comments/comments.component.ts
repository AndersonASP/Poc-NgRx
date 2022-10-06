import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Comments} from "../store/comments";
import {EntityCollectionService, EntityCollectionServiceFactory} from "@ngrx/data";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  allComments$: Observable<Comments[]>;
  commentService: EntityCollectionService<Comments>;

  constructor(serviceFactory: EntityCollectionServiceFactory) {
    this.commentService = serviceFactory.create<Comments>('Comments');
    this.allComments$ = this.commentService.entities$;
  }


  ngOnInit(): void {
    this.commentService.getAll();
  }

}
