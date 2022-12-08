import { Request } from '@core/configs/request';

import { mapMyPostsToModel } from '../../mappers/map-my-posts-to-model';

export async function getMyPosts() {
  return await Request.get(`/posts/me`).then(mapMyPostsToModel);
}
