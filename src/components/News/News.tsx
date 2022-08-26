import { useEffect, useState } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import { NewsWrapper } from "components/News/News.style";
import SingleNews from "components/News/SingleNews";
import Axios from "axios";
import { NewsTypes } from "types/types";
import useAxios from "hooks/useAxios";

const News = () => {
  const [newsList, setNewsList] = useState<NewsTypes[]>([]);

  const { response, error } = useAxios("get", "news", undefined);

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
      </NewsWrapper>
    </Wrapper>
  );
};

export default News;
