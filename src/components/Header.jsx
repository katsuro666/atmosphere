import { useState, useEffect } from 'react';
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

const Title = styled.a.attrs({
  href: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(fw-bold);
`;

export const Header = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>atmosphere</Title>
          <ThemeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoSunnySharp size='14px' /> : <IoMoon size='14px' />}
            <span style={{ marginLeft: '0.75rem' }}>{theme}</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};
