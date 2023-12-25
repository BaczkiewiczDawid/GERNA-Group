import {
  SingleFriend,
  StyledProfile,
  IconsWrapper,
} from "components/FriendsList/Friend.style";
import { useNavigate } from "react-router-dom";
import trashIcon from "assets/images/trash-icon.svg";
import chatIcon from "assets/images/message-square-black.svg";
import chatIconWhite from 'assets/images/message-square-white.svg';
import Axios from 'axios';

const Friend = ({ friend }) => {
  const navigate = useNavigate();

  const handleShowProfile = () => {
    navigate(`/profile/${friend.id}`);
  };

  const handleDeleteFriend = () => {
    Axios.post('https://space-team-server-5628bd799a00.herokuapp.com/delete-friend', {
      userData: friend.id
    })
  };

  const theme = localStorage.getItem('theme');

  return (
    <SingleFriend >
      <StyledProfile
        author={friend.username}
        picture={friend.picture}
        dashboard={true}
        onClick={handleShowProfile}
      />
      <IconsWrapper>
        <img src={theme === 'dark' ? chatIconWhite : chatIcon} alt="chat with friend" />
        <img src={trashIcon} alt="delete friend" onClick={handleDeleteFriend} />
      </IconsWrapper>
    </SingleFriend>
  );
};

export default Friend;
