import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { MainCard } from './components/MainCard';

export function App() {
  return (
    <>
      <Header />
      <MainCard />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
