import React, { useEffect, useState } from 'react';
import Headlines from '../Headlines/Headlines';

const News = () => {
  const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=b6d6cb2ea9ec41b1becc8e0d8b810e7e'
  const [article, setArticle] = useState([])
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setArticle(data.articles))
  }, [])
  
  console.log(article)
  return (

   <>
   {
    article.map(article => <Headlines article={article}></Headlines>)
   }
  
   </>

      
   


  );
};

export default News;