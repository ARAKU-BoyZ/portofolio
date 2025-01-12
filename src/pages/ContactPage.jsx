import React from 'react';
import Layout from '../../src/pages/layout/Layout';
import { Button, Input, Textarea } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const formSchema = z.object({
  email: z.string().email(),
  phoneNumber: z.string().regex(/^\d+$/),
  description: z.string().max(250)
})

const ContactPage = () => {

  const form = useForm({
    defaultValues: {
      email: "",
      phoneNumber: "",
      description: ""
    },
    resolver: zodResolver(formSchema)
  })

  const sendForm = (data) => {
    console.log(data)
  }


  return (
    <Layout pageName="Contact">
      <div className="flex-1 bg-white p-6 shadow-md rounded-lg lg:ml-6">
        <section className="text-gray-700 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Me
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
              </p>
          </div>
          <form onSubmit={form.handleSubmit(sendForm)}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <Controller
                 name='email'
                 control={form.control}
                 render={({ field, fieldState }) => {
                   return (
                    <Input
                     {...field}
                     type='email'
                     label='Email'
                     labelPlacement='outside'
                     placeholder='Enter your email'
                     isInvalid={Boolean(fieldState.error)}
                     errorMessage={fieldState.error?.message}
                     />
                    )}} />
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <Controller
                  name='phoneNumber'
                  control={form.control}
                  render={({ field, fieldState }) => {
                    return (
                      <Input
                      {...field}
                      label='Phone Number'
                      labelPlacement='outside'
                      placeholder='Enter your phone number'
                      isInvalid={Boolean(fieldState.error)}
                      errorMessage={fieldState.error?.message}
                      />
                      )}} />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <Controller
                   name='description'
                   control={form.control}
                   render={({ field, fieldState }) => {
                    return (
                      <Textarea
                       {...field}
                       className='max-w-xl'
                       label='Description'
                       labelPlacement='outside'
                       placeholder='Enter your description'
                       isInvalid={Boolean(fieldState.error)}
                       errorMessage={fieldState.error?.message}
                       />
                    )
                   }} />
                </div>
              </div>
              <div className="p-2 w-full">
                <Button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg">
                  Send
                </Button>
              </div>
            </div>
          </div>
          </form>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default ContactPage;
