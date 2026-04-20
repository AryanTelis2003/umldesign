import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Zap } from 'lucide-react';

const ActionNode = ({ data }) => {
  return (
    <div className="bg-node border border-border rounded-full shadow-lg px-4 py-2 flex items-center gap-3">
      <Handle type="target" position={Position.Left} className="!bg-primary !w-3 !h-3" />
      
      <div className="bg-[#1a1a1a] p-2 rounded-full border border-border">
        <Zap size={16} className="text-primary" />
      </div>
      <span className="font-medium text-sm text-textMain pr-2">{data.label || 'Action'}</span>

      <Handle type="source" position={Position.Right} className="!bg-primary !w-3 !h-3" />
    </div>
  );
};

export default ActionNode;
