import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@hooks/use-auth';
import { getMyPosts } from '@services/post/get-my-posts';

export const useProfile = () => {
  const { getUser } = useAuth();

  const { username, email } = getUser();

  const { data, isLoading } = useQuery({
    queryFn: getMyPosts,
    queryKey: ['my-posts'],
  });

  return {
    username,
    email,
    data: !isLoading && data,
  };
};
