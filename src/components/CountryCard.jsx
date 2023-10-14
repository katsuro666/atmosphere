import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--borderRadius);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;

  &:hover {
    box-shadow: var(--shadow-hover);
  }
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 180px;
  object-position: center;
  box-shadow: var(--shadow);

  @media (min-width: 500px) {
    height: 80%;
  }

  @media (min-width: 767px) {
    height: 180px;
  }
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  text-align: center;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  letter-spacing: 2px;

  @media (min-width: 767px) {
    // font-size: var(--fs-lg);
  }
`;

export const CountryCard = ({ img, name, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={`flag of ${name}`} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
      </CardBody>
    </Wrapper>
  );
};
