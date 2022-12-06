import { BASE_URL } from '@constants';

const createImageUrl = (url) => {
  if (!url) return null;

  return `${BASE_URL}${url}`;
};

const mapImages = (images) => {
  if (!images || !images.length) return null;
  const item = images[0];

  return {
    imageId: item.id,
    name: item.name,
    alternativeText: item.alternativeText,
    large: item.formats && createImageUrl(item.formats.large?.url),
    small: item.formats && createImageUrl(item.formats.small?.url),
    medium: item.formats && createImageUrl(item.formats.medium?.url),
    thumbnail: item.formats && createImageUrl(item.formats.thumbnail?.url),
  };
};

export const mapMyPostsToModel = ({ results }) => {
  return results.map((item) => {
    return {
      id: item.id,
      title: item.title,
      caption: item.caption,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      publishedAt: item.publishedAt,
      images: mapImages(item.images),
      // images: {
      //   large: 'https://api.lorem.space/image/fashion?w=200&h=200',
      //   small: 'https://api.lorem.space/image/fashion?w=200&h=200',
      //   medium: 'https://api.lorem.space/image/fashion?w=200&h=200',
      //   thumbnail: 'https://api.lorem.space/image/fashion?w=200&h=200',
      // },
    };
  });
};
