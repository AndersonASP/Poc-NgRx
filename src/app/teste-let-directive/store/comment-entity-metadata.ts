import {EntityMetadataMap} from "@ngrx/data";
import {Comments} from "./comments";

export const commentEntityMetadata: EntityMetadataMap = {
  Comments: {
    selectId: (comments: Comments) => comments.id
  }
}
