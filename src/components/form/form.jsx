import { useForm, FormProvider } from 'react-hook-form';

export const Form = ({ children }) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};
