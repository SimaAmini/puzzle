import { Request } from '@configs/request';
import { mapPostsToModel } from '../../mapper/map-posts-to-model';

export async function getPosts() {
  return await Request.get(
    `/posts?populate[0]=images&populate[1]=user&pagination[page]=1&pagination[pageSize]=10&sort[0]=createdAt:desc`,
  ).then(mapPostsToModel);
}
