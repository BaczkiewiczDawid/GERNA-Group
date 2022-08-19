import { useState } from "react";
import {
  MessageWrapper,
  Line,
  Header,
  SecondaryDetails,
  Details,
  DesktopTitle,
  MobileTitle
} from "components/Messages/SingleMessage.style";

const SingleMessage = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleShowDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <MessageWrapper onClick={handleShowDetails}>
      <Header>
        <SecondaryDetails>
          <h2>Dawid Bączkiewicz</h2>
          <DesktopTitle>Desktop title</DesktopTitle>
          <p>14.08.2022</p>
        </SecondaryDetails>
        <MobileTitle>Mobile title</MobileTitle>
      </Header>
      {isExpanded && (
        <Details>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam totam
            corrupti ad, tempora optio incidunt eligendi debitis dolores dolor
            cum. Assumenda dolores impedit mollitia magnam corporis adipisci
            vitae laboriosam unde. Quaerat, architecto, voluptatibus numquam
            possimus iure minus dicta officia facere alias omnis ad quia
            molestiae voluptas, fugit a. Voluptate amet ab odit molestias
            doloremque quis placeat neque exercitationem dignissimos possimus?
            Voluptatum soluta voluptatem suscipit corrupti atque, cum, ut
            expedita fuga tenetur dolorum aut doloremque, hic laudantium
            doloribus! Provident consequatur recusandae perferendis! Repudiandae
            aliquid error ut, labore eos iusto ratione! Libero? Veniam vel
            suscipit, doloribus quam deserunt ducimus corrupti itaque mollitia
            minima officia qui esse nemo id minus sunt excepturi cumque
            consectetur magni perferendis iusto similique. Enim repellat nulla
            natus ipsum. Natus velit, reprehenderit ipsum earum facere ex quam
            ullam minus repellendus. Distinctio quae, neque est dicta minima
            nulla blanditiis hic dolorem tempora, dolor maxime recusandae sed
            dolores natus! Laborum, minus.
          </p>
        </Details>
      )}
      <Line></Line>
    </MessageWrapper>
  );
};

export default SingleMessage;
