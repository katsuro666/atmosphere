import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './Container';
import { IoMoon, IoSunnySharp } from 'react-icons/io5';

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  display: flex;
  align-items: center;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  letter-spacing: 5px;

  @media (min-width: 767px) {
    font-size: inherit;
    font-weight: var(--fw-light);
    letter-spacing: 15px;
  }
`;

const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(fw-bold);
`;

const ThemeLabel = styled.span`
  margin-left: 0.75rem;
  font-size: var(--fs-md);
  letter-spacing: 2px;
`;

export const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    theme === 'dark' ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark');
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>
            atmosphere
            <svg
              width='32px'
              height='32px'
              viewBox='-51.2 -51.2 614.40 614.40'
              xmlns='http://www.w3.org/2000/svg'
              fill='var(--colors-text)'
              transform='rotate(0)matrix(-1, 0, 0, 1, 0, 0)'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0' />

              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
                stroke='#CCCCCC'
                strokeWidth='10.24'
              />

              <g id='SVGRepo_iconCarrier'>
                <path
                  fill='var(--colors-text)'
                  d='M135.688 18.5c-6.798 74.842-23.842 85.39-107.907 59.656 84.85 52.022 73.57 64.954-6.843 96.938 87.743-10.27 103.29 4.89 70.75 87.594 17.805-27.56 32.5-44.498 46.282-54.47-11.813 28.26-18.345 59.274-18.345 91.813 0 84.184 43.71 157.96 109.656 200.376-41.624-43.834-67.686-102.7-67.686-167.875 0-134.923 109.45-244.405 244.375-244.405 30.92 0 60.76 5.762 88 16.25-38.584-26.87-85.517-42.625-136.064-42.625-55.257 0-106.14 18.802-146.562 50.375 4.627-18.783 17.39-38.073 41.03-60.906C190.18 90.942 153.53 95.634 135.69 18.5zm10.03 77.188c5.67.002 11.428 1.247 16.876 3.874 14.506 6.998 22.72 21.81 22 36.938-10.26 10.87-19.507 22.696-27.594 35.344-9.035 2.753-19.075 2.27-28.25-2.156-19.37-9.343-27.5-32.6-18.156-51.97 6.715-13.92 20.638-22.036 35.125-22.03z'
                />
              </g>
            </svg>
          </Title>
          <ThemeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoSunnySharp size='14px' /> : <IoMoon size='14px' />}
            <ThemeLabel>{theme}</ThemeLabel>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};
