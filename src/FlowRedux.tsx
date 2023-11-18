import 'reactflow/dist/style.css';

import ReactFlow, {
  Controls,
  Background,
  NodeChange,
  EdgeChange,
  Connection,
} from 'reactflow';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { onNodesChange, onEdgesChange, onConnect } from './features/flow/flowSlice';

function Flow() {
  const { nodes, edges } = useSelector((state: RootState) => state.flow)
  const dispatch = useDispatch()

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(changes: NodeChange[]) => dispatch(onNodesChange(changes))}
        onEdgesChange={(changes: EdgeChange[]) => dispatch(onEdgesChange(changes))}
        onConnect={(changes: Connection) => dispatch(onConnect(changes))}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;