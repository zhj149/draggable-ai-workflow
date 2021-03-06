const COLOR_ENDPOINT = '#5C87FF';

const ConnectorStyle = {
  strokeWidth: 2,
  stroke: "#c4c4c4",
  joinstyle: "round",
  outlineStroke: "transparent",
  outlineWidth: 4
};

const ConnectorHoverStyle = {
  strokeWidth: 3,
  stroke: "#216477",
};

const EndpointStyleSource = {
  radius: 7,
  strokeWidth: 5,
};

const EndpointStyleTarget = {
  radius: 7,
  strokeWidth: 5
};

const EndpointHoverStyleSource = {
  ...EndpointStyleSource,
  fill: COLOR_ENDPOINT,
  stroke: COLOR_ENDPOINT,
};

const EndpointHoverStyleTarget = {
  ...EndpointStyleTarget,
  fill: COLOR_ENDPOINT,
  stroke: COLOR_ENDPOINT,
};

// const renderOverlay = (component: any) => {
//   component._jsPlumb.parameters.id = component._jsPlumb.parameters.id || v4();
//   const el = document.createElement('div');
//   el.setAttribute(
//     'id',
//     generateConnectionId(
//       component.source.parentElement.parentElement.id,
//       component._jsPlumb.parameters.id || v4()
//     )
//   );
//   return el;
// };

export default {
  Anchor: ['Continuous', {}],
  Anchors: [['BottomCenter'], ['TopCenter']],
  ConnectionsDetachable: false,
  Connector: ["Bezier", { curviness: 50 }],
  MaxConnections: -1,
  ConnectionOverlays: [
    ["Arrow", {
      location: 1,
      visible: true,
      width: 11,
      length: 11,
      id: "ARROW",
    }],
  ],
  Endpoint: ['Dot', { radius: 5 }],
  EndpointHoverStyle: EndpointHoverStyleSource,
  EndpointHoverStyles: [EndpointHoverStyleSource, EndpointHoverStyleTarget],
  EndpointStyle: EndpointStyleSource,
  HoverPaintStyle: ConnectorHoverStyle,
  PaintStyle: ConnectorStyle,
};
