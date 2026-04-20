import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { BoxSelect } from 'lucide-react';

const ClassNode = ({ data }) => {
  return (
    <div className="bg-node border border-border rounded-xl shadow-xl min-w-[200px] overflow-hidden">
      <Handle type="target" position={Position.Top} className="!bg-secondary !w-3 !h-3" />
      
      {/* Header */}
      <div className="bg-[#1a1a1a] p-3 border-b border-border flex items-center gap-2">
        <BoxSelect size={18} className="text-secondary" />
        <span className="font-bold text-sm text-textMain">{data.label || 'ClassName'}</span>
      </div>
      
      {/* Attributes */}
      <div className="p-3 border-b border-border">
        <div className="text-xs text-textMuted font-semibold mb-1 uppercase tracking-wider">Attributes</div>
        {data.attributes && data.attributes.length > 0 ? (
          data.attributes.map((attr, index) => (
            <div key={index} className="text-sm text-textMain py-0.5">
              <span className="text-primary mr-1">•</span>
              {attr}
            </div>
          ))
        ) : (
          <div className="text-sm text-textMuted italic">No attributes</div>
        )}
      </div>

      {/* Methods */}
      <div className="p-3">
        <div className="text-xs text-textMuted font-semibold mb-1 uppercase tracking-wider">Methods</div>
        {data.methods && data.methods.length > 0 ? (
          data.methods.map((method, index) => (
            <div key={index} className="text-sm text-textMain py-0.5">
              <span className="text-secondary mr-1">+</span>
              {method}
            </div>
          ))
        ) : (
          <div className="text-sm text-textMuted italic">No methods</div>
        )}
      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-secondary !w-3 !h-3" />
    </div>
  );
};

export default ClassNode;
