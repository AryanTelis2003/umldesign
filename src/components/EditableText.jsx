import React, { useState, useEffect, useRef } from 'react';
import { useReactFlow } from '@xyflow/react';

const EditableText = ({ id, value, fieldName = 'label', className = '' }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(value);
  const { updateNodeData } = useReactFlow();
  const inputRef = useRef(null);

  useEffect(() => {
    setText(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const onDoubleClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const onBlur = () => {
    setIsEditing(false);
    updateNodeData(id, { [fieldName]: text });
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      updateNodeData(id, { [fieldName]: text });
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setText(value);
    }
  };

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        className={`bg-[#2a2a2a] text-textMain border border-primary outline-none px-1 rounded text-center w-full min-w-[80px] font-inherit ${className}`}
        onMouseDownCapture={(e) => e.stopPropagation()}
        onMouseMoveCapture={(e) => e.stopPropagation()}
      />
    );
  }

  return (
    <div
      onDoubleClick={onDoubleClick}
      className={`cursor-text min-h-[20px] min-w-[40px] px-1 select-none flex items-center justify-center ${className}`}
    >
      {text || ' '}
    </div>
  );
};

export default EditableText;
