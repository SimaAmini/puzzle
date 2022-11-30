import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';

import { createPost } from '@services/post/create-post';
import { screens } from '@constants';

export const useCreatePost = () => {
  const navigation = useNavigation();

  const onSuccess = useCallback(async (data) => {
    const { id } = data;

    return navigation.navigate(screens.POST_DETAIL, {
      postId: id,
    });
  }, []);

  const onError = useCallback((e) => {
    console.log('onError', e);
    //  show error
  }, []);

  const { mutate: create, isLoading: isSaving } = useMutation({
    mutationFn: createPost,
    onSuccess,
    onError,
  });

  const onSubmit = (state) => {
    create(state);
  };

  return {
    onSubmit,
  };
};
