import Header from './Componentes/Header/Header';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="flex flex-col h-screen"> {/* Contêiner flexível que ocupa a altura da tela */}
      <Header/>
      <main className="flex-grow bg-backgroundcolor"> {/* Esta seção ocupa o espaço restante */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
