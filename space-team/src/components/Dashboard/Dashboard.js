import Navigation from "components/Navigation/Navigation";
import PostsList from "components/Dashboard/PostsList";
import NewPost from "components/Dashboard/NewPost";
import {
  DashboardWrapper,
  Wrapper,
} from "components/Dashboard/Dashboard.style";
import Logo from 'components/Dashboard/Logo';
import useAuthenticate from 'hooks/useAuthenticate';

const Dashboard = () => {
  const data = localStorage.getItem('isAuthenticated');
  const isAuthenticated = JSON.parse(data);

  useAuthenticate(isAuthenticated);

    return (
      <DashboardWrapper>
        <Navigation picture={isAuthenticated.picture} loggedUser={isAuthenticated.loggedUser} />
        <Wrapper>
          <Logo />
          <NewPost loggedUser={isAuthenticated.loggedUser} userID={isAuthenticated.id} />
          <PostsList />
        </Wrapper>
      </DashboardWrapper>
    );
};

export default Dashboard;
