
import React from 'react';
import { PlusIcon, MinusIcon } from '../constants';

const ZoomControls: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 z-30 flex items-center space-x-2">
      <div className="flex items-center bg-white rounded-full shadow-lg">
        <button className="p-2 rounded-l-full hover:bg-gray-100">
          <MinusIcon />
        </button>
        <div className="px-3 text-sm font-medium">100%</div>
        <button className="p-2 rounded-r-full hover:bg-gray-100">
          <PlusIcon />
        </button>
      </div>
      <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 font-bold text-gray-600">
        ?
      </button>
    </div>
  );
};

export default ZoomControls;
