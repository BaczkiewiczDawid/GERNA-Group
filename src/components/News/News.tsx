import { useState } from 'react';
import Wrapper from "components/Dashboard/Wrapper";
import { NewsWrapper } from "components/News/News.style";
import SingleNews from "components/News/SingleNews";
import Axios from 'axios';
import { NewsTypes } from 'types/types';

const News = () => {
  const [newsList, setNewsList] = useState<NewsTypes[]>([])

  Axios.get('https://gernagroup-server.herokuapp.com/news').then((response) => {
    setNewsList(response.data);
  })

  return (
    <Wrapper>
      <h1>GERNA Group News</h1>
      <NewsWrapper>
        {newsList.map((news: NewsTypes) => {
          return (
            <SingleNews
              url={news.url}
              title={news.title}
              description={news.description}
            />
          );
        })}
      </NewsWrapper>
    </Wrapper>
  );
};

export default News;
