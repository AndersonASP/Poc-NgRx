import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentsComponent} from "./comments/comments.component";
import {AddPostsComponent} from "./add-posts/add-posts.component";

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: CommentsComponent
  },
  {
    path: 'add',
    component: AddPostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteLetDirectiveRoutingModule { }
