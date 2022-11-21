import { useCallback } from 'react';

const useRules = () => {
  const isEmpty = useCallback((value) => {
    if (typeof value == 'object') {
      if (value == null) {
        return !value;
      }
      return !(value.length && value.length > 0);
    }
    return value == undefined || value == null || value == '' ? true : false;
  }, []);

  const validEmailFormat = useCallback((value) => {
    if (
      !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        value,
      )
    )
      return true;
    return false;
  }, []);

  return {
    required: useCallback(({ type, key, value }) => {
      if (isEmpty(value)) return `The ${key} is required.`;
      return '';
    }, []),

    badFormatEmail: useCallback(({ key, value }) => {
      if (value && validEmailFormat(value))
        return `The email is incorrect, e.g. example@mail.com.`;
      return '';
    }, []),
  };
};

export { useRules };
