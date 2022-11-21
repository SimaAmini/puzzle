import { useCallback } from 'react';

import { useRules } from './use-rules';

export const useValidate = (props) => {
  const { required, badFormatEmail } = useRules();

  return {
    validate: useCallback(
      (value) => {
        let error;
        if (props && props.required) {
          const emptyError = required({
            key: props.errorKey ? props.errorKey : props.name,
            value,
            type: props.type,
          });
          error = emptyError || error;
        }

        if (props && props.formatEmail) {
          const badFormatEmailError = badFormatEmail({
            key: props.errorKey ? props.errorKey : props.name,
            value,
          });
          error = badFormatEmailError || error;
        }

        return error;
      },
      [props],
    ),
  };
};
