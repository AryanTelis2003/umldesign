import React from 'react';
import { Handle, Position } from '@xyflow/react';

const ForkNodeHorizontal = () => {
  return (
    <div className="group relative w-32 h-3 bg-textMain rounded-sm shadow-md cursor-ns-resize">
      <Handle type="target" position={Position.Top} className="!bg-secondary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
      <Handle type="source" position={Position.Bottom} className="!bg-primary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
    </div>
  );
};

export default ForkNodeHorizontal;
