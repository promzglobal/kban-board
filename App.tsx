
import React from 'react';
import Sidebar from './components/Sidebar';
import MainCanvas from './components/MainCanvas';
import BottomToolbar from './components/BottomToolbar';
import ZoomControls from './components/ZoomControls';

const App: React.FC = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-sans text-gray-800">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative z-10 flex w-full h-full">
        <Sidebar />
        <MainCanvas />
      </div>
      <BottomToolbar />
      <ZoomControls />
    </div>
  );
};

export default App;
