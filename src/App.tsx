import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import theme from './styles/theme';
import GlobalStyle from './styles/global.styles';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />

    <Routes>
      <Route path="/"  element={ <Home />}/>
    </Routes>
    <Footer />
  </ThemeProvider>
);

export default App;
