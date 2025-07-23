import { X } from 'lucide-react';
import * as React from 'react';
import { toast, ToastBar, Toaster } from 'react-hot-toast';

function DismissableToast() {
  /**
   * ? This allows to show a toast via query params
   * * toast_type success, error, or none: default
   * * toast_message (required) the message to show
   */
  React.useEffect(() => {
    const toast_type = 'success';
    const toast_message = 'This is a success message';

    if (typeof toast_message === 'string') {
      if (toast_type === 'success') {
        toast.success(toast_message);
      } else if (toast_type === 'error') {
        toast.error(toast_message);
      } else {
        toast(toast_message);
      }
    }
  }, []);

  return (
    <div>
      <Toaster
        reverseOrder={false}
        position='top-center'
        toastOptions={{
          className: 'font-medium rounded-lg',
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button
                    className='ring-primary-400 hover:bg-light rounded-full p-1 transition focus:outline-none focus-visible:ring'
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <X />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
}

export { DismissableToast };
