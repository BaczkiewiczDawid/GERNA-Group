import {
  Wrapper,
  ImageWrapper,
  Content,
} from "components/News/SingleNews.style";

interface Props {
  url: string;
  title: string;
  description: string;
}

const SingleNews = ({ url, title, description }: Props) => {
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
