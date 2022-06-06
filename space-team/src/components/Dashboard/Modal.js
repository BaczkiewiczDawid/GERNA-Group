import { useState } from "react";
import {
  ModalWrapper,
  ModalContent,
  InputWrapper,
} from "components/Dashboard/Modal.style";
import arrowIcon from "assets/images/arrow-icon.svg";
import Input from "components/Dashboard/Input";
import Axios from "axios";

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  postDescription,
  userID,
}) => {
  const [imageURL, setImageURL] = useState("");

  const handleImageValue = (e) => {
    setImageURL(e.target.value);
  };

  const handlePublicPost = (e) => {
    if (imageURL !== "") {
      setIsModalOpen(false);

      const newPost = {
        author: userID,
        description: postDescription,
        img: imageURL,
      };

      Axios.post("http://localhost:5000/api/new-post", {
        newPost: newPost,
      }).then(() => {
        console.log("new post added");
      });
    } else {
      alert("Cant be empty");
    }
  };

  return (
    <ModalWrapper isModalOpen={isModalOpen}>
      <ModalContent>
        <h1>Almost done</h1>
        <p>{postDescription}</p>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Paste image url..."
            onChange={handleImageValue}
          />
          <img
            src={arrowIcon}
            alt="arrow-right add new post"
            onClick={handlePublicPost}
          />
        </InputWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
