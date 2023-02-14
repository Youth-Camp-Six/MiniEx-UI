import React, { useState } from 'react';
import { Button, Toast } from '../../../../src';

function App() {
  const [showToast1, setShowToast1] = useState<boolean>(false);
  const [showToast2, setShowToast2] = useState<boolean>(false);
  const [showToast3, setShowToast3] = useState<boolean>(false);
  const [showToast4, setShowToast4] = useState<boolean>(false);
  const [showToast5, setShowToast5] = useState<boolean>(false);

  const handleShowToast1 = () => {
    setShowToast1(true);
  };

  const handleShowToast2 = () => {
    setShowToast2(true);
  };

  const handleShowToast3 = () => {
    setShowToast3(true);
  };

  const handleShowToast4 = () => {
    setShowToast4(true);
  };

  const handleShowToast5 = () => {
    setShowToast5(true);
  };

  return (
    <div>
      <Button style={{ marginRight: '4px' }} btnType='primary' onClick={handleShowToast1}>
        info Toast
      </Button>
      <Button
        style={{ marginRight: '4px', backgroundColor: '#4caf50', border: 'none' }}
        btnType='primary'
        onClick={handleShowToast2}
      >
        success Toast
      </Button>
      <Button
        style={{ marginRight: '4px', backgroundColor: '#f57c00', border: 'none' }}
        btnType='primary'
        onClick={handleShowToast3}
      >
        warn Toast
      </Button>
      <Button style={{ marginRight: '4px' }} btnType='danger' onClick={handleShowToast4}>
        error Toast
      </Button>
      <Button style={{ marginRight: '4px' }} btnType='default' onClick={handleShowToast5}>
        default Toast
      </Button>
      {showToast1 && (
        <Toast
          title='Info'
          message='This is an information message'
          onClose={() => setShowToast1(false)}
          timeout={5000}
          position='top-left'
          style='info'
        />
      )}
      {showToast2 && (
        <Toast
          title='Success'
          message='Your operation was successful'
          onClose={() => setShowToast2(false)}
          timeout={5000}
          position='top-right'
          style='success'
        />
      )}
      {showToast3 && (
        <Toast
          title='Warn'
          message='This is a Warn message'
          onClose={() => setShowToast3(false)}
          timeout={5000}
          position='bottom-left'
          style='warn'
        />
      )}
      {showToast4 && (
        <Toast
          title='Error'
          message='This is a Error message'
          onClose={() => setShowToast4(false)}
          timeout={5000}
          position='bottom-right'
          style='error'
        />
      )}
      {showToast5 && (
        <Toast
          title='Default'
          message='This is a Default message'
          onClose={() => setShowToast5(false)}
          timeout={5000}
          position='bottom-center'
          style='default'
        />
      )}
    </div>
  );
}

export default App;
