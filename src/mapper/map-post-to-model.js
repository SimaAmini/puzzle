import { BASE_URL } from '@constants';

const mapUser = ({ data }) => ({
  email: data.attributes.email,
  username: data.attributes.username,
});

const createImageUrl = (url) => {
  if (!url) return null;

  return `${BASE_URL}${url}`;
};

const mapImages = ({ data }) => {
  // if (!data || !data.length) return null;
  return data.map((item) => ({
    imageId: item.id,
    name: item.attributes.name,
    alternativeText: item.attributes.alternativeText,
    large:
      item.attributes.formats &&
      createImageUrl(item.attributes.formats.large?.url),
    small:
      item.attributes.formats &&
      createImageUrl(item.attributes.formats.small?.url),
    medium:
      item.attributes.formats &&
      createImageUrl(item.attributes.formats.medium?.url),
    thumbnail:
      item.attributes.formats &&
      createImageUrl(item.attributes.formats.thumbnail?.url),
  }));
};

export const mapPostToModel = ({ data }) => ({
  id: data.id,
  title: data.attributes.title,
  caption: data.attributes.caption,
  user: mapUser(data.attributes.user),
  publishedAt: data.attributes.publishedAt,
  createdAt: data.attributes.createdAt,
  updatedAt: data.attributes.updatedAt,
  // TODO:
  images: {
    large: 'https://api.lorem.space/image/fashion?w=400&h=400',
    small: 'https://api.lorem.space/image/fashion?w=400&h=400',
    medium: 'https://api.lorem.space/image/fashion?w=400&h=400',
    thumbnail: 'https://api.lorem.space/image/fashion?w=400&h=400',
  },
});
