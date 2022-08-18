import Wrapper from 'components/Dashboard/Wrapper'
import ContentWrapper from "components/Dashboard/ContentWrapper";

const NoAccess = () => {
    return (
        <Wrapper>
          <ContentWrapper>
            <p>You don't have access to this site</p>
          </ContentWrapper>
        </Wrapper>
    )
}

export default NoAccess;