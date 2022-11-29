// import { forwardRef, memo, useImperativeHandle } from 'react';
// import { useForm, FormProvider } from 'react-hook-form';

// export const Form = memo(
//   forwardRef((props, ref) => {
//     const {
//       onSubmit,
//       onCancel,
//       title,
//       defaultValues,
//       isSubmitting = false,
//       isWrappedInCard = true,
//       isScrollable = false,
//       renderActions,
//       children,
//       actionsPlacement = 'top',
//       isDataLoading = false,
//       showTextIndicator = false,
//       autoComplete = true,
//     } = props;

//     const {
//       handleSubmit,
//       control,
//       setValue,
//       clearErrors,
//       setError,
//       reset,
//       register,
//       unregister,
//       trigger,
//       formState: { dirtyFields },
//     } = useForm({ defaultValues });
//     // const methods = useForm();

//     useImperativeHandle(ref, () => ({
//       handleSubmit,
//       control,
//       setValue,
//       clearErrors,
//       setError,
//       reset,
//       register,
//       unregister,
//       trigger,
//     }));

//     const formProps = {
//       title,
//       children,
//       handleSubmit,
//       onSubmit,
//       onCancel,
//       control,
//       setValue,
//       clearErrors,
//       setError,
//       reset,
//       register,
//       unregister,
//       defaultValues,
//       isSubmitting,
//       renderActions,
//       isScrollable,
//       actionsPlacement,
//       autoComplete,
//     };

//     return <FormProvider {...formProps}>{children}</FormProvider>;
//   }),
// );
