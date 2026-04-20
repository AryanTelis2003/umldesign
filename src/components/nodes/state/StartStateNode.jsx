import React from 'react';
import { Handle, Position } from '@xyflow/react';

const StartStateNode = () => {
  return (
    <div className="group relative w-8 h-8 bg-textMain rounded-full shadow-lg">
      <Handle type="source" position={Position.Right} className="!bg-primary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
      <Handle type="source" position={Position.Bottom} className="!bg-primary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
    </div>
  );
};

export default StartStateNode;
