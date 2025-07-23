import { Toaster } from 'sonner';

export default function SonnerToaster() {
  /**
   * ? This allows to show a toast via query params
   * * toast_type success, error, or none: default
   * * toast_message (required) the message to show
   */

  return (
    <Toaster
      position='top-center'
      closeButton
      richColors
      toastOptions={{
        classNames: {
          actionButton: '!ml-0 !mr-2 !bg-primary-500',
          closeButton: '!left-auto !top-2.5 !-right-1 !border-none !bg-transparent',
        },
      }}
    />
  );
}
