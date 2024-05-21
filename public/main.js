const displayArticles = async () => {
    try {
      const res = await fetch('/api/articles');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const { data: articles } = await res.json();
      console.log('displayArticles articles', articles);
      const container = document.querySelector("#articles");
      container.innerHTML = "";
  
      articles.forEach(article => {
        const { attributes } = article;
  
        // IMAGES
        // const img = document.createElement('img');
        // img.setAttribute('src', attributes.thumbnail.url);
        // container.appendChild(img);
  
        // TITLE
        const title = document.createElement('h3');
        title.innerText = attributes.title;
        container.appendChild(title);
  
        // CONTENT
        const content = document.createElement('div');
        content.innerText = attributes.content[0].children[0].text;
        container.appendChild(content);
  
        // DATE
        const date = document.createElement('p');
        date.innerText = attributes.createdAt;
        container.appendChild(date);
  
        // LINK
        // const link = document.createElement('a');
        // link.setAttribute('href', `/article/${article.id}`);
        // link.innerText = "Voir l'article";
        // container.appendChild(link);
  
        // container.appendChild(document.createElement('hr'));
      });
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };
  
  displayArticles();
  