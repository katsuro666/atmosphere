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
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 70%;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  text-align: center;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
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
