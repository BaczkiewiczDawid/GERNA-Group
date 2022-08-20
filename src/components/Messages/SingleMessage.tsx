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

const SingleMessage = ({ message, title, sender }: any) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleShowDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <MessageWrapper onClick={handleShowDetails}>
      <Header>
        <SecondaryDetails>
          <h2>Dawid Bączkiewicz</h2>
          <DesktopTitle>{title}</DesktopTitle>
          <p>14.08.2022</p>
        </SecondaryDetails>
        <MobileTitle>{title}</MobileTitle>
      </Header>
      {isExpanded && (
        <Details>
          <p>
            {message}
          </p>
        </Details>
      )}
      <Line></Line>
    </MessageWrapper>
  );
};

export default SingleMessage;
