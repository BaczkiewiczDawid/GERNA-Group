import { useEffect, useState } from "react";
import useAuthenticate from "hooks/useAuthenticate";
import Navigation from "components/Navigation/Navigation";
import Logo from "components/Dashboard/Logo";
import Axios from "axios";
import {
  Wrapper,
  Container,
  FriendsListContainer,
} from "components/FriendsList/FriendsList.style";
import Friend from "components/FriendsList/Friend";
import useLocalStorageAuthenticate from "hooks/useLocalStorageAuthenticate";
import Loading from 'components/Dashboard/Loading';

const FriendsList = () => {
  const [friendsArray, setFriendsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const isAuthenticated = useLocalStorageAuthenticate();

  useAuthenticate(isAuthenticated);

  const theme = localStorage.getItem('theme');

  useEffect(() => {
    Axios.post("https://space-team-server-5628bd799a00.herokuapp.com/friends-list", {
      userData: isAuthenticated.id,
    }).then((response) => {
      setFriendsArray(response.data);
      setIsLoading(false);
    });
  }, [isAuthenticated.id]);

  return (
    <Wrapper>
      <Navigation
        picture={isAuthenticated.picture}
        loggedUser={isAuthenticated.loggedUser}
      />
      <Container>
        <Logo theme={theme} />
        {isLoading && <Loading />}
        <FriendsListContainer>
          {friendsArray.map((friend) => {
            return <Friend friend={friend} />;
          })}
        </FriendsListContainer>
      </Container>
    </Wrapper>
  );
};

export default FriendsList;
