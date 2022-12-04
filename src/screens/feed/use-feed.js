import { useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';

import { getPosts } from '@services/post/get-posts';
import { screens } from '@constants';

export const useFeed = () => {
  const navigation = useNavigation();

  const redirectToPostDetail = (id) => {
    return navigation.navigate(screens.POST_DETAIL, { postId: id });
  };

  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    // refetchOnWindowFocus: false,
  });

  return {
    data: !isLoading && data,
    isLoading,
    redirectToPostDetail,
  };
};
