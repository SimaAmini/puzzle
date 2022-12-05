import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { createPost } from '@services/post/create-post';
import { screens } from '@constants';
import { useToast } from '@hooks/use-toast';

export const useCreatePost = () => {
  const navigation = useNavigation();
  const { showErrorToast } = useToast();

  const onSuccess = useCallback(async (data) => {
    const { id } = data;
    reset({
      image: '',
      caption: '',
      title: '',
    });

    return navigation.navigate(screens.POST_DETAIL, {
      postId: id,
      newPost: true,
    });
  }, []);

  const onError = useCallback((e) => {
    showErrorToast({
      title: 'Error!',
      body: e.message,
    });
  }, []);

  const { mutate: create, isLoading } = useMutation({
    mutationFn: createPost,
    onSuccess,
    onError,
  });

  const onSubmit = (state) => {
    create(state);
  };
  const { control, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      image: '',
      caption: '',
      title: '',
    },
  });

  return {
    onSubmit,
    isLoading,
    control,
    handleSubmit,
    setValue,
  };
};
