import styled from 'styled-components';

const StyledInput = styled.input`
    width: 85vw;
    padding: 1.5rem 2rem;
    border-radius: 15px;
    border: 1px solid rgba(42, 42, 42, 0.2);
    box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);
    font-size: .95rem;
    margin: auto;

    @media screen and (min-width: 768px) {
        width: 50vw;
        margin-top: ${props => props.primary ? '3rem' : '0'};
    }

    @media screen and (min-width: 1080px) {
        width: 40vw;
    }

    @media screen and (min-width: 1440px) {
        width: 30vw;
    }
`;

const Input = ({ text, placeholder, onKeyDown, onChange, maxLength, primary }) => {
    return (
        <StyledInput
        type={text}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        onChange={onChange}
        maxLength={maxLength}
        primary={primary}
      />
    )
}

export default Input;