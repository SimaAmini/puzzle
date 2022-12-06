import Toast from 'react-native-toast-message';

export const useToast = () => {
  const showErrorToast = ({
    title = 'Error!',
    body = 'Something went wrong!',
  }) => {
    Toast.show({
      type: 'error',
      text1: title,
      text2: body,
    });
  };

  const showSuccessToast = ({ title = '', body = '' }) => {
    Toast.show({
      type: 'success',
      text1: title,
      text2: body,
    });
  };

  return {
    showErrorToast,
    showSuccessToast,
  };
};
