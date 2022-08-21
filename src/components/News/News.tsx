import Wrapper from "components/Dashboard/Wrapper";
import { NewsWrapper } from "components/News/News.style";
import SingleNews from "components/News/SingleNews";
import NewsList from "data/NewsList";

const News = () => {
  return (
    <Wrapper>
      <h1>GERNA Group News</h1>
      <NewsWrapper>
        {NewsList.map((news) => {
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
