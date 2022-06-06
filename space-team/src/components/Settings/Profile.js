import styled from "styled-components";
import Button from 'components/Settings/Button';

const StyledProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
  flex-wrap: wrap;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 100px;
  }

  div {
    flex-direction: column;
    margin-left: 2rem;

    p:nth-child(n + 1) {
      font-weight: 700;
    }

    p:nth-child(n + 2) {
      font-weight: 300;
    }
  }
`;

const ProfileWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Profile = ({ loggedUserData }) => {
  return (
    <ProfileWrapper>
      <StyledProfile>
        <img src={loggedUserData.picture} alt="" />
        <div>
          <p>{loggedUserData.username}</p>
          <p>{loggedUserData.email}</p>
        </div>
      </StyledProfile>
      <Button value="Upload now" />
    </ProfileWrapper>
  );
};

export default Profile;
