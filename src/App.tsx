import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { MainCard } from './components/MainCard';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Header />
      <MainCard />
      <Dashboard />
      <Footer />
      <GlobalStyle />
    </>
  );
}
