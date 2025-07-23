import * as React from 'react';
import { toast } from 'sonner';

export default function useMutationToastSonner(mutation, customMessages = {}) {
  const { data, isError, isLoading, error } = mutation;

  const toastStatus = React.useRef(data ? 'done' : 'idle');

  React.useEffect(() => {
    const toastMessage = {
      ...{
        loading: 'Loading...',
        success: 'Success!',
        error: (err) =>
          err?.response?.data?.message ? err.response.data.message : 'An error occurred',
        info: 'For your information',
      },
      ...customMessages,
    };

    // If it is not the first render
    if (toastStatus.current === 'done' && !isLoading) return;

    if (isError) {
      toast.error(
        typeof toastMessage.error === 'string' ? toastMessage.error : toastMessage.error(error),
        { id: toastStatus.current, duration: 2000 }
      );
      toastStatus.current = 'done';
    } else if (isLoading) {
      toastStatus.current = toast.loading(toastMessage.loading, {
        duration: Infinity,
      });
    } else if (data) {
      toast.success(toastMessage.success, {
        id: toastStatus.current,
        duration: 2000,
      });
      toastStatus.current = 'done';
    }
  }, [customMessages, data, error, isError, isLoading]);

  return { ...mutation };
}
