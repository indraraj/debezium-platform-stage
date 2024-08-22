import {
  Card,
  CardBody,
  Bullseye,
  Stack,
  StackItem,
  TextContent,
  Tooltip,
} from "@patternfly/react-core";
import { Handle, Position } from "reactflow";
import ConnectorImage from "../ComponentImage";
import "./DataNode.css";
import { PencilAltIcon } from "@patternfly/react-icons";
import { useData } from "../../appLayout/AppContext";

interface DataNodeProps {
  data: {
    connectorType: string;
    label: string;
    type: string;
    editAction: () => void;
    compositionFlow?: boolean;
  };
}

const DataNode: React.FC<DataNodeProps> = ({ data }) => {
  const { darkMode } = useData();

  return (
    <>
      <div
        onClick={data.editAction}
        className={
          data.type === "source"
            ? "gradientSource editDataNodeSource"
            : "gradientDestination editDataNodeDestination"
        }
      >
        <Tooltip content={<div>Change pipeline {data.type}.</div>}>
          <div
            style={
              darkMode
                ? {
                    background: "#292929",
                  }
                : {
                    backgroundColor: "#FFFFFF",
                  }
            }
          >
            <PencilAltIcon />
          </div>
        </Tooltip>
      </div>
      <div
        className={
          data.type === "source"
            ? "wrapperSource gradientSource"
            : "wrapperDestination gradientDestination"
        }
      >
        <div
          className="inner"
          style={
            darkMode
              ? {
                  background: "#292929",
                }
              : {
                  backgroundColor: "#FFFFFF",
                }
          }
        >
          {data.type === "source" && (
            <Handle type="source" position={Position.Right} id="smt-input" />
          )}
          <Card
            ouiaId="BasicCard"
            isPlain
            isCompact
            className="pf-v5-u-box-shadow-md"
            style={{ cursor: "auto" }}
          >
            <CardBody style={{ padding: 7 }} className="pf-v5-u-box-shadow-md">
              <Bullseye>
                <Stack>
                  <StackItem
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Bullseye
                      style={
                        darkMode
                          ? {
                              background: "#4f6c87",
                              padding: 2,
                              borderRadius: 10,
                            }
                          : {}
                      }
                    >
                      <ConnectorImage
                        connectorType={data.connectorType}
                        size={30}
                      />
                    </Bullseye>
                  </StackItem>
                  <StackItem
                    style={{
                      paddingTop: 5,
                      paddingInlineEnd: 5,
                      paddingInlineStart: 5,
                    }}
                  >
                    <TextContent
                      type="p"
                      style={{ fontSize: "10px", fontWeight: "bold" }}
                    >
                      {data.label}
                    </TextContent>
                  </StackItem>
                </Stack>
              </Bullseye>
            </CardBody>
          </Card>
          {data.type === "destination" && (
            <Handle type="target" position={Position.Left} id="smt-output" />
          )}
        </div>
      </div>
    </>
  );
};

export default DataNode;
