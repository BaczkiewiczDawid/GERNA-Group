import Profile from "components/Dashboard/Profile";
import { Description, PostWrapper, PostImage } from "components/Dashboard/Post.style";

const Post = ({ img, description, author, picture }) => {
  return (
    <PostWrapper>
      <Profile author={author} picture={picture} dashboard />
      <Description>{description}</Description>
      <PostImage src={img} alt="img" />
    </PostWrapper>
  );
};

export default Post;
