import React from 'react';
import { Handle, Position } from '@xyflow/react';
import EditableText from '../../EditableText';

const UseCaseNode = ({ id, data }) => {
  return (
    <div className="group relative w-[160px] h-[80px] bg-node border-2 border-border rounded-[100%] flex items-center justify-center shadow-lg transition-colors hover:border-primary">
      <Handle type="target" position={Position.Left} className="!bg-secondary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
      <Handle type="target" position={Position.Top} className="!bg-secondary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
      
      <div className="text-center w-[80%]">
        <EditableText 
          id={id} 
          value={data.label} 
          className="text-sm font-medium text-textMain" 
        />
      </div>

      <Handle type="source" position={Position.Right} className="!bg-primary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
      <Handle type="source" position={Position.Bottom} className="!bg-primary !w-3 !h-3 opacity-0 group-hover:opacity-100" />
    </div>
  );
};

export default UseCaseNode;
