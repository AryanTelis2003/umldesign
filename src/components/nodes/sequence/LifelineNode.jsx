import React from 'react';
import { Handle, Position } from '@xyflow/react';
import EditableText from '../../EditableText';

const LifelineNode = ({ id, data }) => {
  const handleOffsets = [80, 120, 160, 200, 240, 280];

  return (
    <div className="group flex flex-col items-center w-[120px] min-h-[320px] relative">
      {/* Header Box */}
      <div className="w-full bg-node border-2 border-border rounded-sm shadow-md py-2 px-1 z-10 transition-colors group-hover:border-primary relative">
        <EditableText 
          id={id} 
          value={data.label} 
          className="text-xs font-medium text-textMain text-center" 
        />
      </div>

      {/* Dashed Line */}
      <div className="absolute top-10 bottom-0 left-1/2 -ml-[1px] w-0 border-l-2 border-dashed border-textMuted z-0 pointer-events-none"></div>

      {/* Connection Handles along the lifeline */}
      {handleOffsets.map((offset, index) => (
        <React.Fragment key={index}>
          <Handle
            type="target"
            position={Position.Left}
            id={`target-${index}`}
            style={{ top: offset, left: '50%', transform: 'translate(-50%, -50%)', opacity: 0, zIndex: 20 }}
            className="!bg-secondary !w-3 !h-3 group-hover:opacity-100"
          />
          <Handle
            type="source"
            position={Position.Right}
            id={`source-${index}`}
            style={{ top: offset, left: '50%', transform: 'translate(-50%, -50%)', opacity: 0, zIndex: 20 }}
            className="!bg-primary !w-3 !h-3 group-hover:opacity-100"
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default LifelineNode;
