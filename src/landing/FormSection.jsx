import Checkbox from '@components/form/Checkbox';
import CurrencyInput from '@components/form/CurrencyInput';
import DatePicker from '@components/form/Datepicker';
import DropzoneInput from '@components/form/DropzoneInput';
import FileUploadCard from '@components/form/FileUploadCard';
import Input from '@components/form/Input';
import PasswordInput from '@components/form/PasswordInput';
import SearchableSelectInput from '@components/form/React-Select';
import TagsInput from '@components/form/TagsInput';
import TextArea from '@components/form/TextArea';
import Typography from '@components/Typography';
import { FormProvider, useForm } from 'react-hook-form';

export default function FormSection() {
  const methods = useForm({
    defaultValues: {
      institution: 'Institut Teknologi Sepuluh Nopember',
    },
  });
  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className='border-t-2 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <h2 className='mb-4 text-2xl font-extrabold text-gray-900 dark:text-white'>Form Section</h2>
        <p className='mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          This is a form section where you can add your form elements.
        </p>
        {/* Add your form elements here */}
        <FormProvider {...methods}>
          <form className='w-fit space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <Input
              id='name'
              label='Name'
              type='text'
              placeholder='Masukkan nama lengkap'
              helperText='This is a hint text to help the user'
              required
            />
            <Input
              id='institution'
              label='Institusi'
              type='text'
              placeholder='Masukkan nama institusi'
              required
              disabled={true}
            />
            <PasswordInput
              id='password'
              label='Password'
              placeholder='Masukkan password'
              required
            />
            <DatePicker
              id={'birthdate'}
              label='Tanggal Lahir'
              placeholder='Pilih tanggal lahir'
              defaultYear={2000}
              defaultMonth={1}
            />
            <TextArea id='alamat' label='Alamat' placeholder='Masukkan alamat' required />
            <SearchableSelectInput
              id='select'
              label='Select'
              placeholder='Pilih salah satu'
              options={[
                {
                  value: 'option1',
                  label: 'Option 1',
                },
                {
                  value: 'option2',
                  label: 'Option 2',
                },
                {
                  value: 'option3',
                  label: 'Option 3',
                },
              ]}
            />
            <DropzoneInput
              id='photo'
              label='Activity Photo'
              validation={{ required: 'Photo must be filled' }}
              accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
              helperText='You can upload file with .png, .jpg, atau .jpeg extension.'
            />
            <FileUploadCard id='card-1' fileName='Dokumen 1' progress={100} isDone={false} />
            <FileUploadCard id='card-2' fileName='Dokumen 2' progress={100} isDone={false} />
            <CurrencyInput id='price' label='Price' placeholder='Masukkan harga' />
            <TagsInput
              id='tags'
              label='Tags'
              placeholder='Add tags'
              validation={{ required: 'Tags must be filled' }}
              helperText='You can add multiple tags'
              maxTags={5}
            />

            <div className='space-y-2'>
              <Typography variant='b1'>Pilih Beberapa</Typography>
              <Checkbox
                name='fruits'
                label='Apple'
                value='apple'
                // hideError on every checkbox except the last one, or use ErrorMessage
                hideError
              />
              <Checkbox
                name='fruits'
                label='Mangga'
                value='mangga'
                // hideError on every checkbox except the last one, or use ErrorMessage
                hideError
              />
              <Checkbox
                name='fruits'
                label='Jeruk'
                value='jeruk'
                // validation only on the last element, or you can use <ErrorMessage />
                validation={{ required: 'Fruits must be checked' }}
              />
              <Checkbox
                name='fruits'
                label='Melon'
                value='melon'
                // validation only on the last element, or you can use <ErrorMessage />
                validation={{ required: 'Fruits must be checked' }}
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
}
