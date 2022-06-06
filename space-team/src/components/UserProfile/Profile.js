import {
  StyledProfile,
  Picture,
  Details,
  Container,
  Button,
} from "components/UserProfile/Profile.style";
import editIcon from "assets/images/edit-icon.svg";
import plusIcon from "assets/images/plus-icon.svg";
import { useNavigate } from "react-router-dom";

const Profile = ({ isAuthenticated, searchedUser }) => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/settings', {replace: true})
  }

  return (
    <StyledProfile>
      <Picture>
        <img src={isAuthenticated.picture} alt="profile" />
      </Picture>
      <Details>
        <Container>
          <h1>{searchedUser.username}</h1>
          {isAuthenticated.loggedUser === searchedUser.username ? (
            <img src={editIcon} alt="edit profile" onClick={handleEditProfile} />
          ) : null}
        </Container>
        <Button>
          <img src={plusIcon} alt="plus icon" />
          <p>Add to friends...</p>
        </Button>
      </Details>
    </StyledProfile>
  );
};

export default Profile;
