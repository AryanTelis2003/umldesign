import React, { useState } from 'react';
import { 
  BoxSelect, Zap, User, Circle, CircleDashed, 
  CircleDot, Play, Square, Minus, ChevronDown, ChevronRight
} from 'lucide-react';

const SidebarSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 hover:bg-[#252525] transition-colors text-textMain"
      >
        <span className="font-semibold text-sm">{title}</span>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {isOpen && (
        <div className="p-3 bg-[#151515] flex flex-col gap-2">
          {children}
        </div>
      )}
    </div>
  );
};

const SidebarItem = ({ type, icon: Icon, label, colorClass = "text-primary" }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className="flex items-center gap-3 p-2 bg-node border border-border rounded-lg cursor-grab hover:border-primary transition-colors shadow-sm"
      onDragStart={(event) => onDragStart(event, type)}
      draggable
    >
      <Icon size={18} className={colorClass} />
      <span className="font-medium text-xs text-textMain">{label}</span>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-64 bg-panel border-r border-border h-screen flex flex-col shadow-xl z-10 relative overflow-hidden flex-shrink-0">
      <div className="p-4 border-b border-border">
        <h1 className="text-xl font-bold flex items-center gap-2 text-textMain">
          <Zap className="text-primary" />
          UML Flow
        </h1>
        <p className="text-xs text-textMuted mt-1">Drag nodes to canvas • Dbl-click to edit</p>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <SidebarSection title="Class Diagram" defaultOpen={true}>
          <SidebarItem type="classNode" icon={BoxSelect} label="Class Node" colorClass="text-secondary" />
        </SidebarSection>

        <SidebarSection title="Use Case Diagram" defaultOpen={true}>
          <SidebarItem type="actorNode" icon={User} label="Actor" colorClass="text-primary" />
          <SidebarItem type="useCaseNode" icon={Circle} label="Use Case" colorClass="text-secondary" />
        </SidebarSection>

        <SidebarSection title="State Diagram">
          <SidebarItem type="stateNode" icon={Square} label="State" colorClass="text-primary" />
          <SidebarItem type="startStateNode" icon={CircleDot} label="Start State" colorClass="text-secondary" />
          <SidebarItem type="endStateNode" icon={CircleDashed} label="End State" colorClass="text-secondary" />
        </SidebarSection>

        <SidebarSection title="Activity Diagram">
          <SidebarItem type="activityActionNode" icon={Play} label="Action" colorClass="text-primary" />
          <SidebarItem type="decisionNode" icon={Zap} label="Decision" colorClass="text-secondary" />
          <SidebarItem type="forkNodeHorizontal" icon={Minus} label="Fork/Join (H)" colorClass="text-textMuted" />
          <SidebarItem type="forkNodeVertical" icon={Minus} label="Fork/Join (V)" colorClass="text-textMuted" />
        </SidebarSection>

        <SidebarSection title="Sequence Diagram">
          <SidebarItem type="lifelineNode" icon={Minus} label="Lifeline" colorClass="text-primary" />
        </SidebarSection>
      </div>
    </aside>
  );
};

export default Sidebar;
