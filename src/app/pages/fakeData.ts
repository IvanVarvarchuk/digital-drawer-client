import { TargetFileFormat } from "../../api/axios-client";
import { FileConvertion } from "./FileConvertion";

export const files: FileConvertion[] = [
    {
        fileName: 'buildingFlourPlan1.dxf',
        conversionDate: new Date(),
        convertedFromName: 'buildingFlourPlan1.jpg',
        deletionDate: null,
        fileFormat: TargetFileFormat._0,
        id: '1',
        link: 'public\\buildingFlourPlan1.dxf',
      },
      {
        fileName: 'BuildingFlourPlanDraft.dxf',
        conversionDate: new Date(),
        convertedFromName: 'BuildingFlourPlanDraft.jpg',
        deletionDate: null,
        fileFormat: TargetFileFormat._0,
        id: '2',
        link: 'public\\BuildingFlourPlanDraft.dxf',
      },
      {
        fileName: 'buildingFlourPlan4.ifc',
        conversionDate: new Date(),
        convertedFromName: 'buildingFlourPlan4.jpg',
        deletionDate: null,
        fileFormat: TargetFileFormat._1,
        id: '3',
        link: 'public\\buildingFlourPlan4.ifc',
      },
      {
        fileName: 'appartmentPlan.svg',
        conversionDate: new Date(),
        convertedFromName: 'appartmentPlan.jpg',
        deletionDate: null,
        fileFormat: TargetFileFormat._2,
        id: '4',
        link: 'public\\appartmentPlan.svg',
      },
]