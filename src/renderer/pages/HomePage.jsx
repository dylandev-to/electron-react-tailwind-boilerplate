import React, { useEffect } from 'react'


function HomePage() {
  // Just an example for using IPC
  useEffect(() => {
    window.electron.onMessage('message-received', (response) => {
      console.log(response)
    });

    window.electron.sendMessage('send-message', 'Hello from HomePage!');
  }, []);

  return (
    <div className='bg-blue-400'>
      <h1 className='text-white text-center'>Hello from Electron React Tailwind Boilerplate!</h1>
    </div>
  )
}

export default HomePage