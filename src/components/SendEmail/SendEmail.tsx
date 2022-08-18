import { useRef } from "react";
import emailjs from "emailjs-com";
import Wrapper from "components/Dashboard/Wrapper";

const SendEmail = () => {
  const formRef: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aev4svh",
        "template_vzmo5os",
        e.target,
        "TFiGvZVNaPgrAPQie"
      )
      .then((result: any) => {
        console.log(result.text);
      })
      .catch((err: any) => {
        console.log(err.text);
      });
  };

  return (
    <Wrapper>
      <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="name" />
        <button type="submit">send</button>
      </form>
    </Wrapper>
  );
};

export default SendEmail;
