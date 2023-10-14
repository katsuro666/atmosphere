import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
  display: flex;
  align-items: center;
  background-color: var(--colors-ui-base);
  padding: 1rem 1rem;
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media(min-width: 767px) {
    padding: 1rem 2rem;
    margin-bottom: 0;
    width: 360px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'feel the vibe of...'
  // placeholder: 'atmosphere of...'
})`
  margin-left: 1rem;
  border: none;
  outline: none;
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
  width: 100%;

  &::placeholder {
    color: var(--colors-text);
    // letter-spacing: 0.1em;
  }

  @media(min-width: 767px) {
    margin-left: 2rem;
  }
`;

export const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};
