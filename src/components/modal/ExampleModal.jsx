import Button from '@components/buttons/Button';
import Typography from '@components/Typography';
import * as React from 'react';

import Modal from './Modal';

export function ExampleModal({ children }) {
  const [open, setOpen] = React.useState(false);
  const modalReturn = {
    openModal: () => setOpen(true),
  };

  return (
    <>
      {children(modalReturn)}
      <Modal open={open} setOpen={setOpen} title='Modal Title'>
        <Modal.Section>
          <Typography variant='b2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex cumque
            assumenda! Nesciunt reiciendis dolores sit atque incidunt debitis repudiandae.
          </Typography>
        </Modal.Section>
        <Modal.Section>
          <div className='flex justify-end gap-2'>
            <Button variant='outline'>Label</Button>
            <Button>Label</Button>
          </div>
        </Modal.Section>
      </Modal>
    </>
  );
}
