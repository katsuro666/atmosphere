import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
  display: flex;
  align-items: center;
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  input::placeholder {
    color: var(--colors-text);
  }

  @media(min-width: 767px) {
    margin-bottom: 0;
    width: 360px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'feel the atmosphere of'
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
`;

export const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};
