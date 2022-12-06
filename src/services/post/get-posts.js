import { Request } from '@core/configs/request';
import { mapPostsToModel } from '../../mapper/map-posts-to-model';

export async function getPosts(pageParam) {
  return await Request.get(
    `/posts?populate[0]=images&populate[1]=user&pagination[page]=${pageParam}&pagination[pageSize]=5&sort[0]=createdAt:desc`,
  ).then(mapPostsToModel);
}
