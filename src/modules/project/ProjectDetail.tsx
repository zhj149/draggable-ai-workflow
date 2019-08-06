import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import WorkflowOperator from '../workflow/WorkflowOperator';
import WorkflowStage from '../workflow/WorkflowStage';
import WorkflowConf from '../workflow/WorkflowConf';

type Props = {

};

const ProjectDetail: React.FC<Props> = (props) => {
  const { } = props;

  useEffect(() => {

  }, []);

  return (
    <div className="workflow">
      <DndProvider backend={HTML5Backend}>
        <WorkflowOperator />
        {
          //@ts-ignore
          <WorkflowStage />
        }
        <WorkflowConf />
      </DndProvider>

    </div>
  );
};

export default ProjectDetail;