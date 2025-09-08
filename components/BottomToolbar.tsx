
import React, { useState } from 'react';
import { CursorIcon, HandIcon, PenIcon, StickyNoteIcon, CircleIcon, SquareIcon, TextIcon, TableIcon, StampIcon, EmoteIcon, PlusIcon } from '../constants';

const BottomToolbar: React.FC = () => {
  const [activeTool, setActiveTool] = useState('cursor');

  const toolsLeft = [
    { id: 'cursor', icon: <CursorIcon /> },
    { id: 'hand', icon: <HandIcon /> },
    { id: 'pen', icon: <PenIcon /> },
    { id: 'sticky', icon: <StickyNoteIcon /> },
    { id: 'circle', icon: <CircleIcon /> },
    { id: 'square', icon: <SquareIcon /> },
  ];

  const toolsRight = [
    { id: 'text', icon: <TextIcon /> },
    { id: 'table', icon: <TableIcon /> },
    { id: 'stamp', icon: <StampIcon /> },
  ];

  const ToolButton = ({ id, icon }: { id: string; icon: React.ReactNode }) => (
    <button
      onClick={() => setActiveTool(id)}
      className={`p-3 rounded-lg hover:bg-gray-200 ${
        activeTool === id ? 'bg-purple-200 text-purple-800' : 'bg-white'
      }`}
    >
      {icon}
    </button>
  );

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center bg-white rounded-lg shadow-xl p-1 space-x-1">
      <div className="flex items-center">
        {toolsLeft.map(tool => <ToolButton key={tool.id} id={tool.id} icon={tool.icon} />)}
      </div>
      
      <div className="w-px h-8 bg-gray-300 mx-1"></div>

      <div className="flex items-center">
        {toolsRight.map(tool => <ToolButton key={tool.id} id={tool.id} icon={tool.icon} />)}
      </div>

      <div className="w-px h-8 bg-gray-300 mx-1"></div>
      
      <div className="flex items-center space-x-1">
        <button className="p-2 rounded-lg hover:bg-gray-200">
          <img src="https://picsum.photos/32/32?random=1" alt="Jambot" className="w-8 h-8 rounded" />
        </button>
        <button className="p-2 text-3xl rounded-lg hover:bg-gray-200">
          <EmoteIcon />
        </button>
        <button className="p-3 bg-white rounded-lg hover:bg-gray-200 border border-gray-200">
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default BottomToolbar;
