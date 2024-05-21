import React, { useState, useEffect } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [number1,setNumber1] = useState(0);
  const [number2,setNumber2] = useState(0);
  const [sum, setSum] = useState(null);
  const handleSum = () => {
    setSum(number1 + number2);
  };
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch('http://localhost:1337/api/articles');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const { data: articles } = await res.json();
        console.log('displayArticles articles', articles);
        setPosts(articles);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    
    <div>
      <h1>Strapi</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.attributes.title}</h2>
          <p>{post.attributes.content[0].children[0].text}</p>
        </div>
      ))}
      <input type="number" placeholder="number1" onChange={(e)=>setNumber1(Number(e.target.value))}/>
      <input type="number" placeholder="number2" onChange={(e)=>setNumber2(Number(e.target.value))}/>

      <h1>Sum:{sum}</h1>
      <button onClick={handleSum}>calculate the sum</button>
    </div>
  );
}

export default Home;
