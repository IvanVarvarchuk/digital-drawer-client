import * as Types from '../../api/axios-client';

export type FileConvertion = {
  id: string;
  fileName: string | null;
  convertedFromName: string | null;
  conversionDate: Date;
  deletionDate: Date | null;
  fileFormat: Types.TargetFileFormat;
  link: string;
};
