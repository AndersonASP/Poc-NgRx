import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteLetDirectiveRoutingModule } from './teste-let-directive-routing.module';
import {LetModule} from "@ngrx/component";
import {EntityDefinitionService} from "@ngrx/data";
import { CommentsComponent } from './comments/comments.component';
import {FormsModule} from "@angular/forms";
import { AddPostsComponent } from './add-posts/add-posts.component';
import {commentEntityMetadata} from "./store/comment-entity-metadata";

@NgModule({
  declarations: [
    CommentsComponent,
    AddPostsComponent
  ],
  imports: [
    CommonModule,
    TesteLetDirectiveRoutingModule,
    LetModule,
    FormsModule
  ]
})
export class TesteLetDirectiveModule {
  constructor(entityDefinitionService: EntityDefinitionService) {
    entityDefinitionService.registerMetadataMap(commentEntityMetadata);
  }
}
