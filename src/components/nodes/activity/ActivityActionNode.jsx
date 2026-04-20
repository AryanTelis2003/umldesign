import React from 'react';
import { Handle, Position } from '@xyflow/react';
import EditableText from '../../EditableText';

const ActivityActionNode = ({ id, data }) => {
  return (
    <div className="group min-w-[140px] px-6 py-4 bg-node border-2 border-border rounded-full shadow-lg transition-colors hover:border-primary flex items-center justify-center">
      <Handle type="target" position={Position.Left} className="!bg-secondary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
      <Handle type="target" position={Position.Top} className="!bg-secondary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
      
      <EditableText 
        id={id} 
        value={data.label} 
        className="text-sm font-medium text-textMain text-center" 
      />

      <Handle type="source" position={Position.Right} className="!bg-primary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
      <Handle type="source" position={Position.Bottom} className="!bg-primary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
    </div>
  );
};

export default ActivityActionNode;
