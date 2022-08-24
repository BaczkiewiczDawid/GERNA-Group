import { useState } from "react";
import {
  MessageWrapper,
  Line,
  Header,
  SecondaryDetails,
  Details,
  DesktopTitle,
  MobileTitle,
} from "components/Messages/SingleMessage.style";
import { MessageProps } from "types/types";

const SingleMessage = ({ message, title, sender, date }: MessageProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleShowDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <MessageWrapper onClick={handleShowDetails}>
      <Header>
        <SecondaryDetails>
          <h2>{sender}</h2>
          <DesktopTitle>{title}</DesktopTitle>
          <p>{date}</p>
        </SecondaryDetails>
        <MobileTitle>{title}</MobileTitle>
      </Header>
      {isExpanded && (
        <Details>
          <p>{message}</p>
        </Details>
      )}
      <Line></Line>
    </MessageWrapper>
  );
};

export default SingleMessage;
