const mapUser = ({ data }) => ({
  email: data.attributes.email,
  username: data.attributes.username,
});

const mapImages = ({ data }) => {
  if (!data || !data.length) return null;
  return data.map((item) => ({
    imageId: item.id,
    name: item.attributes.name,
    alternativeText: item.attributes.alternativeText,
    large: item.attributes.formats.large.url,
    small: item.attributes.formats.small.url,
    medium: item.attributes.formats.medium.url,
    thumbnail: item.attributes.formats.thumbnail.url,
  }));
};

export const mapPostsToModel = ({ data }) => {
  return data.map((item) => {
    const { id, attributes } = item;
    return {
      id,
      title: attributes.title,
      caption: attributes.caption,
      createdAt: attributes.createdAt,
      images: mapImages(attributes.images),
      user: mapUser(attributes.user),
    };
  });
};
