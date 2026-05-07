import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from 'sonner';

export default function App() {
  // Trigger Vite HMR
  return (
    <>
      <RouterProvider router={router} />
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: { width: '316px' },
          classNames: {
            toast: 'flex items-center justify-center text-center',
            title: 'text-center text-[15px] font-medium font-["Nunito",_sans-serif]',
            icon: 'mr-2',
            content: 'flex items-center justify-center'
          }
        }} 
      />
    </>
  );
}