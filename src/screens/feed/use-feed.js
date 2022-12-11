import { useNavigation } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';

import { screens } from '@constants';

import { getPosts } from '@services/post/get-posts';

export const useFeed = () => {
  const navigation = useNavigation();

  const redirectToPostDetail = (id) => {
    return navigation.navigate(screens.POST_DETAIL, { postId: id });
  };

  const { isLoading, data, hasNextPage, fetchNextPage, refetch, isRefetching } =
    useInfiniteQuery({
      queryKey: ['posts'],
      queryFn: ({ pageParam = 1 }) => getPosts(pageParam),
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.next !== null) {
          if (lastPage === undefined) return undefined;
          else
            return allPages.length < lastPage.pageCount && allPages.length + 1;
        }
        return lastPage;
      },
    });

  const loadMore = () => {
    if (hasNextPage) fetchNextPage();
  };

  return {
    data:
      !isLoading &&
      data &&
      data.pages &&
      data.pages.map(({ data }) => data).flat(),
    isRefetching,
    redirectToPostDetail,
    loadMore,
    refetch,
  };
};
