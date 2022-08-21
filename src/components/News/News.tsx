import Wrapper from "components/Dashboard/Wrapper";
import { NewsWrapper } from "components/News/News.style";
import SingleNews from "components/News/SingleNews";

const News = () => {
  return (
    <Wrapper>
      <h1>GERNA Group News</h1>
      <NewsWrapper>
        <SingleNews
          url="https://images.unsplash.com/photo-1660866838867-2f6128eb6d30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sed magna vel tempor. Pellentesque sed vestibulum odio, quis tincidunt tortor. Pellentesque consectetur augue nec turpis consequat efficitur. Mauris finibus non leo et fringilla. Proin vitae lacinia leo. Suspendisse sed tincidunt sapien. Vestibulum facilisis velit a tortor convallis, id dapibus diam viverra. Sed sodales ultrices est nec ultricies. Integer fringilla neque sed accumsan lobortis."
        />
        <SingleNews
          url="https://images.unsplash.com/photo-1660866838867-2f6128eb6d30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sed magna vel tempor. Pellentesque sed vestibulum odio, quis tincidunt tortor. Pellentesque consectetur augue nec turpis consequat efficitur. Mauris finibus non leo et fringilla. Proin vitae lacinia leo. Suspendisse sed tincidunt sapien. Vestibulum facilisis velit a tortor convallis, id dapibus diam viverra. Sed sodales ultrices est nec ultricies. Integer fringilla neque sed accumsan lobortis."
        />
        <SingleNews
          url="https://images.unsplash.com/photo-1660866838867-2f6128eb6d30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sed magna vel tempor. Pellentesque sed vestibulum odio, quis tincidunt tortor. Pellentesque consectetur augue nec turpis consequat efficitur. Mauris finibus non leo et fringilla. Proin vitae lacinia leo. Suspendisse sed tincidunt sapien. Vestibulum facilisis velit a tortor convallis, id dapibus diam viverra. Sed sodales ultrices est nec ultricies. Integer fringilla neque sed accumsan lobortis."
        />
      </NewsWrapper>
    </Wrapper>
  );
};

export default News;
