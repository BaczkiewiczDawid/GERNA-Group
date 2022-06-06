import { StyledProfile, Picture, StyledProfilePicture } from 'components/Dashboard/Profile.style';

const Profile = ({ dashboard, author, search, picture }) => {
  return (
    <StyledProfile dashboard={dashboard} search={search}>
      <Picture dashboard={dashboard}>
        <StyledProfilePicture src={picture} alt="profile" />
      </Picture>
      <p>{author}</p>
    </StyledProfile>
  );
};

export default Profile;
