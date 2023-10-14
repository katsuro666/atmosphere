import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { createApi } from 'unsplash-js';
import { IoArrowBack } from 'react-icons/io5';
import { Triangle } from 'react-loader-spinner';

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  position: relative;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  text-align: center;
  letter-spacing: 0.2rem;
  margin: 30px 0;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: bottom;
    transform: rotateX(180deg);
    line-height: 1em;
    background: var(--colors-text);
    -webkit-background-clip: text;
    opacity: 0.08;
  }

  @media (min-width: 767px) {
    letter-spacing: 0.4rem;
    font-size: 20px;
    margin: 30px 0 40px;
  }
`;

const Button = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
  cursor: pointer;
  box-shadow: var(--shadow);

  &:hover {
    background-color: var(--colors-ui-base-hover);
    box-shadow: var(--shadow-hover);
  }

  @media (min-width: 767px) {
    height: 50px;
  }

  @media (min-width: 1023px) {
    align-self: flex-start;
    width: 100px;
  }
`;

export const Country = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [photoUrl, setPhotoUrl] = useState('');
  const [pictureColor, setPictureColor] = useState('');

  const unsplash = createApi({
    accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
  });

  useEffect(() => {
    unsplash.photos
      .getRandom({
        query: name,
      })
      .then((result) => {
        if (result.errors) {
          console.log('error occurred: ', result.errors[0]);
        } else {
          const url = result.response.urls.regular;
          setPictureColor(result.response.color);
          setPhotoUrl(url);
        }
      });
  }, [name]);

  return (
    <>
      <Wrapper>
        <Button onClick={() => navigate(-1)}>
          <IoArrowBack />
        </Button>
        <Text data-text={`feel the atmosphere of ${name}`}>feel the atmosphere of {name}</Text>
        {photoUrl ? (
          <Image src={photoUrl} alt={name} style={{ boxShadow: `${pictureColor} 0 0 150px` }} />
        ) : (
          <Triangle height='80' width='80' color={'var(--colors-text)'} ariaLabel='triangle-loading' visible={true} />
        )}
      </Wrapper>
    </>
  );
};
