import React from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      <ReactFlowProvider>
        <Sidebar />
        <Canvas />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
