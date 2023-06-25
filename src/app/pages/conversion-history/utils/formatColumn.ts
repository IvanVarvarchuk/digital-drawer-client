import { TargetFileFormat } from "../../../../api/axios-client";

const mapping: Record<TargetFileFormat, string> = {
    [TargetFileFormat._0]: ".dxf",
    [TargetFileFormat._1]: ".ifc",
    [TargetFileFormat._2]: ".svg"
}
export default (format: TargetFileFormat) => mapping[format];