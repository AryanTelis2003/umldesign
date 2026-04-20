import React from 'react';
import { Handle, Position } from '@xyflow/react';
import EditableText from '../../EditableText';

const StateNode = ({ id, data }) => {
  return (
    <div className="group min-w-[120px] bg-node border-2 border-border rounded-xl shadow-lg transition-colors hover:border-primary overflow-hidden">
      <Handle type="target" position={Position.Top} className="!bg-secondary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
      <Handle type="target" position={Position.Left} className="!bg-secondary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
      
      <div className="bg-[#1a1a1a] px-3 py-1 border-b border-border text-center">
        <span className="text-[10px] uppercase tracking-wide text-textMuted font-bold">State</span>
      </div>
      
      <div className="p-3 text-center">
        <EditableText 
          id={id} 
          value={data.label} 
          className="text-sm font-semibold text-textMain" 
        />
      </div>

      <Handle type="source" position={Position.Right} className="!bg-primary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
      <Handle type="source" position={Position.Bottom} className="!bg-primary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
    </div>
  );
};

export default StateNode;
