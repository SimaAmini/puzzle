import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigation, useRoute } from '@react-navigation/native';

import { getPost } from '@services/post/get-post';
import { Button, Icon } from '@components';
import { screens } from '@constants';

export const usePostDetail = () => {
  const { params } = useRoute();
  const navigation = useNavigation();

  const { data, isLoading } = useQuery({
    queryKey: ['post'],
    queryFn: () => getPost(params?.postId),
  });

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () =>
        params.newPost ? (
          <Button
            onPress={() => navigation.navigate(screens.ME)}
            style={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              marginRight: 10,
            }}
          >
            <Icon name="arrow-left" size={25} />
          </Button>
        ) : null,
    });
  });

  return {
    data: !isLoading && data,
    isLoading,
  };
};
