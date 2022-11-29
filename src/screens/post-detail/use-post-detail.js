import { useQuery } from '@tanstack/react-query';
import { useRoute } from '@react-navigation/native';

import { getPost } from '@services/post/get-post';

export const usePostDetail = () => {
  const { params } = useRoute();

  const { data, isLoading } = useQuery({
    queryKey: ['post'],
    queryFn: () => getPost(params?.postId),
  });

  return {
    data: !isLoading && data,
    isLoading,
  };
};
