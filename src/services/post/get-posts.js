import { Request } from '@configs/request';
import { mapPostsToModel } from '../../mapper/map-posts-to-model';

export async function getPosts() {
  return await Request.get(`/posts?populate[0]=images&populate[1]=user`).then(
    mapPostsToModel,
  );
}
