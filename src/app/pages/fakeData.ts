import { TargetFileFormat } from "../../api/axios-client";
import { FileConvertion } from "./FileConvertion";

export const files: FileConvertion[] = [
    {
        fileName: 'flourPlan.ifc',
        conversionDate: new Date(),
        convertedFromName: 'flourPlan.png',
        deletionDate: null,
        fileFormat: TargetFileFormat._1,
        id: '1',
        link: 'public\\flourPlan.ifc',
      },
      {
        fileName: '4flourPlan.dxf',
        conversionDate: new Date(),
        convertedFromName: '4flourPlan.png',
        deletionDate: null,
        fileFormat: TargetFileFormat._0,
        id: '2',
        link: 'public\\4flourPlan.dxf',
      },
      {
        fileName: 'buildingDraft.ifc',
        conversionDate: new Date(),
        convertedFromName: 'buildingDraft.png',
        deletionDate: null,
        fileFormat: TargetFileFormat._1,
        id: '3',
        link: 'public\\buildingDraft.ifc',
      },
      {
        fileName: 'appartmentDrawing.svg',
        conversionDate: new Date(),
        convertedFromName: 'appartmentDrawing.png',
        deletionDate: null,
        fileFormat: TargetFileFormat._2,
        id: '4',
        link: 'public\\appartmentDrawing.svg',
      },
]