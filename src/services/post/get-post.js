import { Request } from '@core/configs/request';
import { mapPostToModel } from '../../mapper/map-post-to-model';

export async function getPost(id) {
  return await Request.get(`/posts/${id}?populate=%2A`).then(mapPostToModel);
}
