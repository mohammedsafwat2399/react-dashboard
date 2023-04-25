import React from 'react';
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

const SparkLine = ({ currentColr, id, type, height, width, color, data }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColr, width: 2 }}
      tooltipSettings={{
        visible: true,
        format: "${x} :data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{ visible: ["All"], size: 2.5, fill: currentColr }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;