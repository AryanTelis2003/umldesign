import React from 'react';
import { Handle, Position } from '@xyflow/react';

const ForkNodeVertical = () => {
  return (
    <div className="group relative w-3 h-32 bg-textMain rounded-sm shadow-md cursor-ew-resize">
      <Handle type="target" position={Position.Left} className="!bg-secondary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
      <Handle type="source" position={Position.Right} className="!bg-primary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
    </div>
  );
};

export default ForkNodeVertical;
