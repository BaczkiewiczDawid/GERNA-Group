import { useState, useEffect } from "react";
import Navigation from "components/Navigation/Navigation";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Axios from "axios";
import Profile from "components/UserProfile/Profile";
import Post from "components/Dashboard/Post";
import useAuthenticate from "hooks/useAuthenticate";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProfileContent = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  align-items: flex-start;
  margin-left: 2rem;

  h3 {
    font-size: 2rem;
    margin-top: 5rem;
  }

  @media screen and (min-width: 768px) {
    margin-left: none;
  }
`;

const UserProfile = () => {
  const [searchedUser, setSearchedUser] = useState("");
  const [postsList, setPostsList] = useState([]);
  let { userId } = useParams();

  const data = localStorage.getItem("isAuthenticated");
  const isAuthenticated = JSON.parse(data);

  useAuthenticate(isAuthenticated);

  let navigate = useNavigate();

  useEffect(() => {
    if (
      isAuthenticated.authenticated === false ||
      isAuthenticated.loggedUser === undefined
    ) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    Axios.post("http://localhost:5000/api/get-user", {
      userData: userId,
    }).then((response) => {
      setSearchedUser(response.data[0]);
    });
  }, [userId]);

  useEffect(() => {
    Axios.post("http://localhost:5000/api/user-posts", {
      userData: searchedUser.username,
    }).then((response) => {
      setPostsList(response.data);
    });
  }, [searchedUser.username]);

  return (
    <Wrapper>
      <Navigation
        picture={isAuthenticated.picture}
        loggedUser={isAuthenticated.loggedUser}
      />
      <ProfileContent>
        <Profile
          isAuthenticated={isAuthenticated}
          searchedUser={searchedUser}
        />
        <h3>Recent posts</h3>
        {postsList &&
          postsList.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                description={post.description}
                img={post.img}
              />
            );
          })}
      </ProfileContent>
    </Wrapper>
  );
};

export default UserProfile;
