import React, { useState } from 'react';
import SignUp from './components/SignUp';
import Success from './components/Success';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (email) => {
    setEmail(email);
    setIsSubmitted(true);
  };

  return (
    <div>
      {isSubmitted ? (
        <Success email={email} />
      ) : (
        <SignUp onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
