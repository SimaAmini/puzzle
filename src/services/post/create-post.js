import { Request } from '@core/configs/request';

import { mapNewPostToModel } from '../../mapper/map-new-post-to-model';

export async function createPost(model) {
  const data = {
    title: model.title,
    caption: model.caption,
  };

  const payload = new FormData();

  payload.append('data', JSON.stringify(data));

  payload.append('files.images', {
    name: model.image.fileName,
    type: model.image.type,
    uri: model.image.uri,
  });

  return await Request.postFormData(`/posts`, payload).then(mapNewPostToModel);
}
