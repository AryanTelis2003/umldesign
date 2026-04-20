import React from 'react';
import { Handle, Position } from '@xyflow/react';

const EndStateNode = () => {
  return (
    <div className="group relative w-10 h-10 border-2 border-textMain rounded-full flex items-center justify-center shadow-lg bg-transparent">
      <Handle type="target" position={Position.Left} className="!bg-secondary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
      <Handle type="target" position={Position.Top} className="!bg-secondary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
      
      <div className="w-6 h-6 bg-textMain rounded-full"></div>
    </div>
  );
};

export default EndStateNode;
