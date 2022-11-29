const mapImages = (images) => {
  if (!images || !images.length) return null;
  return images.map((item) => ({
    imageId: item.id,
    name: item.name,
    alternativeText: item.alternativeText,
    large: item.formats.large.url,
    small: item.formats.small.url,
    medium: item.formats.medium.url,
    thumbnail: item.formats.thumbnail.url,
  }));
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
    };
  });
};
