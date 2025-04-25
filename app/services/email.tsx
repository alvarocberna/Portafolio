'use client';

import { useState } from 'react';

export default function SendEmailForm() {
  const [status, setStatus] = useState('');
  const [titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      const railway = 'https://portafolio-back-production-b31d.up.railway.app/api/email';
      const res = await fetch(railway, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'cberna.alvaro@gmail.com',
          subject: titulo,
          htmlBody: `<p>${mensaje}</p>`,
        }),
      });

      const result = await res.json();
      setStatus('enviado');
    } catch (error) {
      setStatus('Error al enviar el correo');
      console.error(error);
    }
  };

  return (
    <div className='w-100'>
      <form className='d-flex flex-column' id='emailForm' onSubmit={handleSend} method='POST'>
        <label className='w-100'>Asunto</label>
        <input className='w-100 mb-2 rounded' id='Titulo' type='text' value={titulo} onChange={(e) => { setTitulo(e.target.value) }} />
        <label className='w-100'>Mensaje</label>
        <input className='w-100 mb-4 rounded' style={{ height: '100px' }}
          id='Mensaje' type='text' value={mensaje} onChange={(e) => { setMensaje(e.target.value) }} />
        <button type='submit' className='col-12 col-sm-9 col-md-6 m-auto bg-primary py-2  text-white rounded'
          style={{ border: 'none' }}>Enviar Mensaje</button>
      </form>
      <p>{status}</p>
    </div>
  )

}