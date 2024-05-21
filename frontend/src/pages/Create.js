import React, { useState } from 'react';

const Create = () => {
  const [title, setDescription] = useState('');

  const handleSubmit = async (e) => {  // Add async here
    e.preventDefault();
    try {
      const res = await fetch('https://localhost:1337/api/articles', {
        method: 'POST',
        headers: {
          'title-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
