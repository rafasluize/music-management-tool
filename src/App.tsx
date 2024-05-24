import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/ui/Header';
import theme from './styles/theme';
import GlobalStyle from './styles/global.styles';
import Footer from './components/ui/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FormArtist from 'pages/FormArtist';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 2000,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<FormArtist />} />
        <Route path="/edit/:id" element={<FormArtist />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
