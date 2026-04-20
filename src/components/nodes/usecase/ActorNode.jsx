import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { User } from 'lucide-react';
import EditableText from '../../EditableText';

const ActorNode = ({ id, data }) => {
  return (
    <div className="flex flex-col items-center group">
      <Handle type="target" position={Position.Top} className="!bg-secondary !w-3 !h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      <Handle type="target" position={Position.Left} className="!bg-secondary !w-3 !h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="text-textMain">
        <User size={48} strokeWidth={1.5} />
      </div>
      
      <EditableText 
        id={id} 
        value={data.label} 
        className="text-sm font-semibold mt-1" 
      />

      <Handle type="source" position={Position.Right} className="!bg-primary !w-3 !h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      <Handle type="source" position={Position.Bottom} className="!bg-primary !w-3 !h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default ActorNode;
