import React from 'react'
import { Field, Form, Formik } from 'formik';
import TextField from '../general/form/text-field';
import { ContactFormData } from './ContactInfo.types';
import TextArea from '../general/form/text-area';
import Button from '../general/form/custom-button';
import { useFormPro } from '@/hooks/useFormPro';
import { CONTACT_SCHEMA } from '@/constants/schema';


interface CustomerFormProps {
  isEdit?: boolean;
  formData: ContactFormData;
  isFetching: boolean;
  onFormChange: (field: string, value: string | string[]) => void;
}

export const ContactForm:React.FC = () => {
    
    const { contactFormData, initialContactFormData, updateContactFormData } = useFormPro()
    
  return (
    <div className=''>
      <div className='bg-surface-primary border-button-outline-stroke-active flex flex-1 flex-col gap-4 space-y-4 rounded-[8px] border p-[2rem]'>
        <div>
            <h1 className='text-[25px] font-semibold'>Send us a message</h1>
            <span className='mb-3'>
                Give us a chance to serve and bring magic to your brand.
            </span>
        </div>
        <Formik
            initialValues={initialContactFormData}
            validateOnBlur={true}
            validateOnChange={false}
            validationSchema={CONTACT_SCHEMA}
            onSubmit={()=>{}}>
            {( { errors, isValid, dirty, touched }) => {
                console.log(errors, isValid, dirty, touched )
                return(
                    <Form>
                    <Field
                        id='email'
                        name='email'
                        label='Email Address'
                        as={TextField}
                        value={contactFormData.email}
                        placeholder='testname@test.com'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            updateContactFormData('email', e.target.value);
                        }}
                        error={touched.email && errors.email ? errors.email : ''}
                    />
                    <Field
                        id='password'
                        name='password'
                        label='Password'
                        data-testid='password'
                        as={TextField}
                        placeholder='*********'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            updateContactFormData('password', e.target.value);
                        }}
                        error={touched.phone && errors.phone ? errors.phone : ''}
                    />
                    <Button text='Send us a message' />
                </Form>
                )
            }}
        </Formik> 
      </div>
    </div>
  )
}
