import styled from 'styled-components';
import Select from 'react-select';

export const FilterSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--borderRadius)',
      padding: '0.75rem 0',
      border: 'none',
      boxShadow: 'var(--shadow)',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
    }),
  },
})`
  width: 100%;
  border-radius: var(--borderRadius);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & * {
    color: var(--colors-text)!important;
  }

  & input {
    padding-left: .25rem;
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }

  @media (min-width: 767px) {
    width: 250px;
  }

`;
