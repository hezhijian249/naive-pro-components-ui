import { ProForm } from '@he/pro-form';
import { ProTable } from '@he/pro-table';

function getComponent(componentName: string) {
  if (componentName === 'ProForm') {
    return ProForm;
  } else if (componentName === 'ProTable') {
    return ProTable;
  } else {
    return null;
  }
}


const DraggableRender = (props: any) => {
  const component = getComponent(props.valueType);
  if (component) {
    return <component {...props.config} />;
  }
  return null;
}

export default DraggableRender;