import React, { useCallback, useRef, useState } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react';

// Import Custom Nodes
import ClassNode from './nodes/ClassNode';
import ActionNode from './nodes/ActionNode';
import ActorNode from './nodes/usecase/ActorNode';
import UseCaseNode from './nodes/usecase/UseCaseNode';
import StateNode from './nodes/state/StateNode';
import StartStateNode from './nodes/state/StartStateNode';
import EndStateNode from './nodes/state/EndStateNode';
import ActivityActionNode from './nodes/activity/ActivityActionNode';
import DecisionNode from './nodes/activity/DecisionNode';
import ForkNodeHorizontal from './nodes/activity/ForkNodeHorizontal';
import ForkNodeVertical from './nodes/activity/ForkNodeVertical';
import LifelineNode from './nodes/sequence/LifelineNode';

const nodeTypes = {
  classNode: ClassNode,
  actionNode: ActionNode,
  actorNode: ActorNode,
  useCaseNode: UseCaseNode,
  stateNode: StateNode,
  startStateNode: StartStateNode,
  endStateNode: EndStateNode,
  activityActionNode: ActivityActionNode,
  decisionNode: DecisionNode,
  forkNodeHorizontal: ForkNodeHorizontal,
  forkNodeVertical: ForkNodeVertical,
  lifelineNode: LifelineNode,
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const Canvas = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      let defaultData = { label: `${type} node` };
      
      switch (type) {
        case 'classNode':
          defaultData = {
            label: 'UserAccount',
            attributes: ['+ id: String', '+ username: String', '+ email: String', '- passwordHash: String'],
            methods: ['+ login(): Boolean', '+ updateProfile(): void', '- validateEmail(): Boolean']
          };
          break;
        case 'actionNode':
          defaultData = { label: 'Process Payment' };
          break;
        case 'actorNode':
          defaultData = { label: 'Customer' };
          break;
        case 'useCaseNode':
          defaultData = { label: 'Checkout Item' };
          break;
        case 'stateNode':
          defaultData = { label: 'Processing' };
          break;
        case 'activityActionNode':
          defaultData = { label: 'Validate Order' };
          break;
        case 'decisionNode':
          defaultData = { label: 'Is Valid?' };
          break;
        case 'lifelineNode':
          defaultData = { label: ':PaymentGateway' };
          break;
        case 'startStateNode':
        case 'endStateNode':
        case 'forkNodeHorizontal':
        case 'forkNodeVertical':
          defaultData = {}; // No text label needed
          break;
        default:
          defaultData = { label: `Node` };
      }

      const newNode = {
        id: getId(),
        type,
        position,
        data: defaultData,
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="flex-1 h-screen relative" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
        className="bg-background"
        colorMode="dark"
      >
        <Background color="#333333" gap={24} size={2} />
        <Controls className="!bg-panel !border-border !fill-textMain" />
      </ReactFlow>
    </div>
  );
};

export default Canvas;
