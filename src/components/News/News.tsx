import Wrapper from "components/Dashboard/Wrapper";
import { NewsWrapper } from "components/News/News.style";
import SingleNews from "components/News/SingleNews";
import { NewsTypes } from "types/types";
import useAxios from "hooks/useAxios";
import axios from 'axios';
import Error from "components/Error/Error";

const News = () => {
  const { response, error, loading } = useAxios({
    axiosInstance: axios,
    method: 'GET',
    url: 'news',
    requestConfig: {
      headers: {
        'Content-Language': 'en-US'
      },
    }
  })

  return (
    <Wrapper>
      <h1>GERNA Group News</h1>
      <NewsWrapper>
        {response.map((news: NewsTypes) => {
          return (
            <SingleNews
              key={news.id}
              url={news.url}
              title={news.title}
              description={news.description}
            />
          );
        })}
        {error && <Error />}
      </NewsWrapper>
    </Wrapper>
  );
};

export default News;
