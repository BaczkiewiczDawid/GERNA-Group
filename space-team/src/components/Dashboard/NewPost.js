import { useState } from "react";
import Modal from "components/Dashboard/Modal";
import Input from "components/Dashboard/Input";

const NewPost = ({ loggedUser, userID }) => {
  const [postDescription, setPostDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSetDescription = (e) => {
    setPostDescription(e.target.value);
  };

  const handleOpenModal = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      e.target.value = "";

      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Input
        type="text"
        placeholder="What's on Your mind?"
        onKeyDown={handleOpenModal}
        onChange={handleSetDescription}
        maxLength="200"
        primary
      />
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        postDescription={postDescription}
        userID={userID}
      />
    </>
  );
};

export default NewPost;
