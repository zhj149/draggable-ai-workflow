import { CSSProperties } from "react";
import { OperatorModelProps } from "../operator/OperatorProps";


export type FlowNodeProps = {
  id: string
  label: string
  icon: string
  style: CSSProperties
  type: 'both' | 'source' | 'target'
  model: OperatorModelProps
};


export type FlowNodesProps = {
  [nodeId: string]: FlowNodeProps
};


export type ParamConfigProps = {
  [nodeId: string]: {
    [key: string]: {
      value: string
      type: string
    }
  }
};