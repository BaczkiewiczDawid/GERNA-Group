import {
  Wrapper,
  ImageWrapper,
  Content,
} from "components/News/SingleNews.style";
import { NewsProps } from 'types/types'

const SingleNews = ({ url, title, description }: NewsProps) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={url} alt="" />
      </ImageWrapper>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Wrapper>
  );
};

export default SingleNews;
