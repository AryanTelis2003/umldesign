import React from 'react';
import { Handle, Position } from '@xyflow/react';
import EditableText from '../../EditableText';

const DecisionNode = ({ id, data }) => {
  return (
    <div className="group relative w-24 h-24 flex items-center justify-center">
      <div className="absolute inset-0 bg-node border-2 border-border shadow-lg transform rotate-45 transition-colors group-hover:border-primary rounded-sm"></div>
      
      <Handle type="target" position={Position.Top} className="!bg-secondary !w-3 !h-3 opacity-0 group-hover:opacity-100 !-mt-2" />
      <Handle type="target" position={Position.Left} className="!bg-secondary !w-3 !h-3 opacity-0 group-hover:opacity-100 !-ml-2" />
      
      <div className="z-10 text-center w-24 px-1">
        <EditableText 
          id={id} 
          value={data.label} 
          className="text-xs font-semibold text-textMain" 
        />
      </div>

      <Handle type="source" position={Position.Right} className="!bg-primary !w-3 !h-3 opacity-0 group-hover:opacity-100 !-mr-2" />
      <Handle type="source" position={Position.Bottom} className="!bg-primary !w-3 !h-3 opacity-0 group-hover:opacity-100 !-mb-2" />
    </div>
  );
};

export default DecisionNode;
