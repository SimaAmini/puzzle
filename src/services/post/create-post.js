import { authStore } from '@hooks/auth-store';
import axios from 'axios';

export async function createPost(model) {
  console.log('model-------->', model);

  const data = new FormData();

  // data.append(
  //   'data',
  //   JSON.stringify({
  //     title: model.title,
  //     caption: model.caption,
  //   }),
  // );

  data.append('files', model.image);

  await axios('https://powerful-dusk-84737.herokuapp.com/api/upload', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authStore.getState().getToken()}`,
      'Content-Type': 'multipart/form-data',
    },
    body: data,
  })
    .then((res) => {
      console.log('response::::::::::::', res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });

  // axios
  //   .post(`https://powerful-dusk-84737.herokuapp.com/api/posts`, data, {
  //     headers: {
  //       Authorization: `Bearer ${authStore.getState().getToken()}`,
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err.response.data.error.details.errors);
  //   });

  // data.append('files.images', {
  //   uri: model.image.uri,
  //   type: 'image/jpeg',
  //   name: 'imagename.jpg',
  // });

  // const config = {
  //   method: 'post',
  //   url: 'https://powerful-dusk-84737.herokuapp.com/api/posts',
  //   headers: {
  //     Authorization: `Bearer ${authStore.getState().getToken()}`,
  //     // Accept: 'application/json',
  //     'Content-Type': 'multipart/form-data',
  //   },
  //   data: data,
  // };

  // axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // return await Request.post(`/posts`, body);
}
