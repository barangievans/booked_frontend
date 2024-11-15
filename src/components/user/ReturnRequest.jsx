import React, { useState } from 'react';

const ReturnRequest = ({ book, onReturn }) => {
  const [reason, setReason] = useState('');

  const handleReturnRequest = () => {
    onReturn(book.id, reason);
  };

  return (
    <div>
      <h2>Return Request</h2>
      <p>{book.title}</p>
      <textarea
        placeholder="Reason for return"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
      <button onClick={handleReturnRequest}>Submit Return Request</button>
    </div>
  );
};

export default ReturnRequest;
