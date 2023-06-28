//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.19.0.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
import * as Types from '../axios-client';
import { useQuery, useMutation } from '@tanstack/react-query';
import type { UseQueryResult, QueryFunctionContext, UseQueryOptions, QueryClient, QueryKey, MutationKey, UseMutationOptions, UseMutationResult, QueryMeta, MutationMeta } from '@tanstack/react-query';
import { trimArrayEnd, isParameterObject, getBaseUrl, addMetaToOptions  } from './helpers';
import type { QueryMetaContextValue } from 'react-query-swagger';
import { QueryMetaContext } from 'react-query-swagger';
import { useContext } from 'react';
import * as Client from './Client'
export { Client };
import type { AxiosRequestConfig } from 'axios';

export type ConversionAllQueryParameters = {
  conversionDate_From?: Date | null;
  conversionDate_To?: Date | null;
  fileName?: string | null;
  formats?: Types.TargetFileFormat[] | null;
  isDeleted?: boolean | null;
};

export type DownloadQueryParameters = {
  id: string;
};

export type ConvertionResultsQueryParameters = {
  id: string;
};

    
export function apiKeyPOSTUrl(): string {
  let url_ = getBaseUrl() + "/api/ApiKey";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function apiKeyPOSTMutationKey(): MutationKey {
  return trimArrayEnd([
      'Client',
      'apiKeyPOST',
    ]);
}

/**
 * @param body (optional) 
 * @return Success
 */
export function useApiKeyPOSTMutation<TContext>(options?: Omit<UseMutationOptions<Types.CreateApiKeyCommandDto, unknown, Types.CreateApiKeyCommand, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<Types.CreateApiKeyCommandDto, unknown, Types.CreateApiKeyCommand, TContext> {
  const key = apiKeyPOSTMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((body: Types.CreateApiKeyCommand) => Client.apiKeyPOST(body), {...options, mutationKey: key});
}
  
    
export function apiKeyAllUrl(): string {
  let url_ = getBaseUrl() + "/api/ApiKey";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let apiKeyAllDefaultOptions: UseQueryOptions<Types.CreateApiKeyCommandDto[], unknown, Types.CreateApiKeyCommandDto[]> = {
  queryFn: __apiKeyAll,
};
export function getApiKeyAllDefaultOptions(): UseQueryOptions<Types.CreateApiKeyCommandDto[], unknown, Types.CreateApiKeyCommandDto[]> {
  return apiKeyAllDefaultOptions;
};
export function setApiKeyAllDefaultOptions(options: UseQueryOptions<Types.CreateApiKeyCommandDto[], unknown, Types.CreateApiKeyCommandDto[]>) {
  apiKeyAllDefaultOptions = options;
}

export function apiKeyAllQueryKey(): QueryKey;
export function apiKeyAllQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'Client',
      'apiKeyAll',
    ]);
}
function __apiKeyAll() {
  return Client.apiKeyAll(
    );
}

/**
 * @return Success
 */
export function useApiKeyAllQuery<TSelectData = Types.CreateApiKeyCommandDto[], TError = unknown>(options?: UseQueryOptions<Types.CreateApiKeyCommandDto[], TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useApiKeyAllQuery<TSelectData = Types.CreateApiKeyCommandDto[], TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.CreateApiKeyCommandDto[], TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<Types.CreateApiKeyCommandDto[], TError, TSelectData>({
    queryFn: __apiKeyAll,
    queryKey: apiKeyAllQueryKey(),
    ...apiKeyAllDefaultOptions as unknown as UseQueryOptions<Types.CreateApiKeyCommandDto[], TError, TSelectData>,
    ...options,
  });
}
/**
 * @return Success
 */
export function setApiKeyAllData(queryClient: QueryClient, updater: (data: Types.CreateApiKeyCommandDto[] | undefined) => Types.CreateApiKeyCommandDto[], ) {
  queryClient.setQueryData(apiKeyAllQueryKey(),
    updater
  );
}

/**
 * @return Success
 */
export function setApiKeyAllDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.CreateApiKeyCommandDto[] | undefined) => Types.CreateApiKeyCommandDto[]) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function apiKeyDELETEUrl(id: string): string {
  let url_ = getBaseUrl() + "/api/ApiKey/{id}";
if (id === undefined || id === null)
  throw new Error("The parameter 'id' must be defined.");
url_ = url_.replace("{id}", encodeURIComponent("" + id));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function apiKeyDELETEMutationKey(id: string): MutationKey {
  return trimArrayEnd([
      'Client',
      'apiKeyDELETE',
      id as any,
    ]);
}

/**
 * @return Success
 */
export function useApiKeyDELETEMutation<TContext>(id: string, options?: Omit<UseMutationOptions<void, unknown, void, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, void, TContext> {
  const key = apiKeyDELETEMutationKey(id);
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation(() => Client.apiKeyDELETE(id), {...options, mutationKey: key});
}
  
    
export function loginUrl(): string {
  let url_ = getBaseUrl() + "/api/Auth/Login";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function loginMutationKey(): MutationKey {
  return trimArrayEnd([
      'Client',
      'login',
    ]);
}

/**
 * @param body (optional) 
 * @return Success
 */
export function useLoginMutation<TContext>(options?: Omit<UseMutationOptions<Types.AuthenticationResponse, unknown, Types.LoginCommand, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<Types.AuthenticationResponse, unknown, Types.LoginCommand, TContext> {
  const key = loginMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((body: Types.LoginCommand) => Client.login(body), {...options, mutationKey: key});
}
  
    
export function registerUrl(): string {
  let url_ = getBaseUrl() + "/api/Auth/Register";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function registerMutationKey(): MutationKey {
  return trimArrayEnd([
      'Client',
      'register',
    ]);
}

/**
 * @param body (optional) 
 * @return Success
 */
export function useRegisterMutation<TContext>(options?: Omit<UseMutationOptions<Types.AuthenticationResponse, unknown, Types.RegisterCommand, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<Types.AuthenticationResponse, unknown, Types.RegisterCommand, TContext> {
  const key = registerMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((body: Types.RegisterCommand) => Client.register(body), {...options, mutationKey: key});
}
  
    
export function conversionUrl(): string {
  let url_ = getBaseUrl() + "/api/Conversion";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function conversionMutationKey(): MutationKey {
  return trimArrayEnd([
      'Client',
      'conversion',
    ]);
}

/**
 * @param body (optional) 
 * @return Success
 */
export function useConversionMutation<TContext>(options?: Omit<UseMutationOptions<string, unknown, Types.CreateConversionRequest[], TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<string, unknown, Types.CreateConversionRequest[], TContext> {
  const key = conversionMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((body: Types.CreateConversionRequest[]) => Client.conversion(body), {...options, mutationKey: key});
}
  
    
export function conversionAllUrl(conversionDate_From?: Date | undefined, conversionDate_To?: Date | undefined, fileName?: string | undefined, formats?: Types.TargetFileFormat[] | undefined, isDeleted?: boolean | undefined): string {
  let url_ = getBaseUrl() + "/api/Conversion?";
if (conversionDate_From === null)
    throw new Error("The parameter 'conversionDate_From' cannot be null.");
else if (conversionDate_From !== undefined)
    url_ += "ConversionDate.From=" + encodeURIComponent(conversionDate_From ? "" + conversionDate_From.toISOString() : "") + "&";
if (conversionDate_To === null)
    throw new Error("The parameter 'conversionDate_To' cannot be null.");
else if (conversionDate_To !== undefined)
    url_ += "ConversionDate.To=" + encodeURIComponent(conversionDate_To ? "" + conversionDate_To.toISOString() : "") + "&";
if (fileName === null)
    throw new Error("The parameter 'fileName' cannot be null.");
else if (fileName !== undefined)
    url_ += "FileName=" + encodeURIComponent("" + fileName) + "&";
if (formats === null)
    throw new Error("The parameter 'formats' cannot be null.");
else if (formats !== undefined)
    formats && formats.forEach(item => { url_ += "Formats=" + encodeURIComponent("" + item) + "&"; });
if (isDeleted === null)
    throw new Error("The parameter 'isDeleted' cannot be null.");
else if (isDeleted !== undefined)
    url_ += "IsDeleted=" + encodeURIComponent("" + isDeleted) + "&";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let conversionAllDefaultOptions: UseQueryOptions<Types.GetConversionQueryDto[], unknown, Types.GetConversionQueryDto[]> = {
  queryFn: __conversionAll,
};
export function getConversionAllDefaultOptions(): UseQueryOptions<Types.GetConversionQueryDto[], unknown, Types.GetConversionQueryDto[]> {
  return conversionAllDefaultOptions;
};
export function setConversionAllDefaultOptions(options: UseQueryOptions<Types.GetConversionQueryDto[], unknown, Types.GetConversionQueryDto[]>) {
  conversionAllDefaultOptions = options;
}

export function conversionAllQueryKey(dto: ConversionAllQueryParameters): QueryKey;
export function conversionAllQueryKey(conversionDate_From?: Date | undefined, conversionDate_To?: Date | undefined, fileName?: string | undefined, formats?: Types.TargetFileFormat[] | undefined, isDeleted?: boolean | undefined): QueryKey;
export function conversionAllQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { conversionDate_From, conversionDate_To, fileName, formats, isDeleted,  } = params[0] as ConversionAllQueryParameters;

    return trimArrayEnd([
        'Client',
        'conversionAll',
        conversionDate_From as any,
        conversionDate_To as any,
        fileName as any,
        formats as any,
        isDeleted as any,
      ]);
  } else {
    return trimArrayEnd([
        'Client',
        'conversionAll',
        ...params
      ]);
  }
}
function __conversionAll(context: QueryFunctionContext) {
  return Client.conversionAll(
      context.queryKey[2] as Date | undefined,       context.queryKey[3] as Date | undefined,       context.queryKey[4] as string | undefined,       context.queryKey[5] as Types.TargetFileFormat[] | undefined,       context.queryKey[6] as boolean | undefined    );
}

export function useConversionAllQuery<TSelectData = Types.GetConversionQueryDto[], TError = unknown>(dto: ConversionAllQueryParameters, options?: UseQueryOptions<Types.GetConversionQueryDto[], TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
/**
 * @param conversionDate_From (optional) 
 * @param conversionDate_To (optional) 
 * @param fileName (optional) 
 * @param formats (optional) 
 * @param isDeleted (optional) 
 * @return Success
 */
export function useConversionAllQuery<TSelectData = Types.GetConversionQueryDto[], TError = unknown>(conversionDate_From?: Date | undefined, conversionDate_To?: Date | undefined, fileName?: string | undefined, formats?: Types.TargetFileFormat[] | undefined, isDeleted?: boolean | undefined, options?: UseQueryOptions<Types.GetConversionQueryDto[], TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useConversionAllQuery<TSelectData = Types.GetConversionQueryDto[], TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.GetConversionQueryDto[], TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  let conversionDate_From: any = undefined;
  let conversionDate_To: any = undefined;
  let fileName: any = undefined;
  let formats: any = undefined;
  let isDeleted: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ conversionDate_From, conversionDate_To, fileName, formats, isDeleted,  } = params[0] as ConversionAllQueryParameters);
      options = params[1];
      axiosConfig = params[2];
    } else {
      [conversionDate_From, conversionDate_To, fileName, formats, isDeleted, options, axiosConfig] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<Types.GetConversionQueryDto[], TError, TSelectData>({
    queryFn: __conversionAll,
    queryKey: conversionAllQueryKey(conversionDate_From, conversionDate_To, fileName, formats, isDeleted),
    ...conversionAllDefaultOptions as unknown as UseQueryOptions<Types.GetConversionQueryDto[], TError, TSelectData>,
    ...options,
  });
}
/**
 * @param conversionDate_From (optional) 
 * @param conversionDate_To (optional) 
 * @param fileName (optional) 
 * @param formats (optional) 
 * @param isDeleted (optional) 
 * @return Success
 */
export function setConversionAllData(queryClient: QueryClient, updater: (data: Types.GetConversionQueryDto[] | undefined) => Types.GetConversionQueryDto[], conversionDate_From?: Date | undefined, conversionDate_To?: Date | undefined, fileName?: string | undefined, formats?: Types.TargetFileFormat[] | undefined, isDeleted?: boolean | undefined) {
  queryClient.setQueryData(conversionAllQueryKey(conversionDate_From, conversionDate_To, fileName, formats, isDeleted),
    updater
  );
}

/**
 * @param conversionDate_From (optional) 
 * @param conversionDate_To (optional) 
 * @param fileName (optional) 
 * @param formats (optional) 
 * @param isDeleted (optional) 
 * @return Success
 */
export function setConversionAllDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.GetConversionQueryDto[] | undefined) => Types.GetConversionQueryDto[]) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function downloadUrl(id: string): string {
  let url_ = getBaseUrl() + "/api/Conversion/Download/{id}";
if (id === undefined || id === null)
  throw new Error("The parameter 'id' must be defined.");
url_ = url_.replace("{id}", encodeURIComponent("" + id));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let downloadDefaultOptions: UseQueryOptions<Types.FileResponse, unknown, Types.FileResponse> = {
  queryFn: __download,
};
export function getDownloadDefaultOptions(): UseQueryOptions<Types.FileResponse, unknown, Types.FileResponse> {
  return downloadDefaultOptions;
};
export function setDownloadDefaultOptions(options: UseQueryOptions<Types.FileResponse, unknown, Types.FileResponse>) {
  downloadDefaultOptions = options;
}

export function downloadQueryKey(id: string): QueryKey;
export function downloadQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { id,  } = params[0] as DownloadQueryParameters;

    return trimArrayEnd([
        'Client',
        'download',
        id as any,
      ]);
  } else {
    return trimArrayEnd([
        'Client',
        'download',
        ...params
      ]);
  }
}
function __download(context: QueryFunctionContext) {
  return Client.download(
      context.queryKey[2] as string    );
}

export function useDownloadQuery<TSelectData = Types.FileResponse, TError = unknown>(dto: DownloadQueryParameters, options?: UseQueryOptions<Types.FileResponse, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
/**
 * @return Success
 */
export function useDownloadQuery<TSelectData = Types.FileResponse, TError = unknown>(id: string, options?: UseQueryOptions<Types.FileResponse, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDownloadQuery<TSelectData = Types.FileResponse, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.FileResponse, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  let id: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ id,  } = params[0] as DownloadQueryParameters);
      options = params[1];
      axiosConfig = params[2];
    } else {
      [id, options, axiosConfig] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<Types.FileResponse, TError, TSelectData>({
    queryFn: __download,
    queryKey: downloadQueryKey(id),
    ...downloadDefaultOptions as unknown as UseQueryOptions<Types.FileResponse, TError, TSelectData>,
    ...options,
  });
}
/**
 * @return Success
 */
export function setDownloadData(queryClient: QueryClient, updater: (data: Types.FileResponse | undefined) => Types.FileResponse, id: string) {
  queryClient.setQueryData(downloadQueryKey(id),
    updater
  );
}

/**
 * @return Success
 */
export function setDownloadDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.FileResponse | undefined) => Types.FileResponse) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function convertionResultsUrl(id: string): string {
  let url_ = getBaseUrl() + "/api/Conversion/ConvertionResults/{id}";
if (id === undefined || id === null)
  throw new Error("The parameter 'id' must be defined.");
url_ = url_.replace("{id}", encodeURIComponent("" + id));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let convertionResultsDefaultOptions: UseQueryOptions<Types.GetConversionQueryDto[], unknown, Types.GetConversionQueryDto[]> = {
  queryFn: __convertionResults,
};
export function getConvertionResultsDefaultOptions(): UseQueryOptions<Types.GetConversionQueryDto[], unknown, Types.GetConversionQueryDto[]> {
  return convertionResultsDefaultOptions;
};
export function setConvertionResultsDefaultOptions(options: UseQueryOptions<Types.GetConversionQueryDto[], unknown, Types.GetConversionQueryDto[]>) {
  convertionResultsDefaultOptions = options;
}

export function convertionResultsQueryKey(id: string): QueryKey;
export function convertionResultsQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { id,  } = params[0] as ConvertionResultsQueryParameters;

    return trimArrayEnd([
        'Client',
        'convertionResults',
        id as any,
      ]);
  } else {
    return trimArrayEnd([
        'Client',
        'convertionResults',
        ...params
      ]);
  }
}
function __convertionResults(context: QueryFunctionContext) {
  return Client.convertionResults(
      context.queryKey[2] as string    );
}

export function useConvertionResultsQuery<TSelectData = Types.GetConversionQueryDto[], TError = unknown>(dto: ConvertionResultsQueryParameters, options?: UseQueryOptions<Types.GetConversionQueryDto[], TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
/**
 * @return Success
 */
export function useConvertionResultsQuery<TSelectData = Types.GetConversionQueryDto[], TError = unknown>(id: string, options?: UseQueryOptions<Types.GetConversionQueryDto[], TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useConvertionResultsQuery<TSelectData = Types.GetConversionQueryDto[], TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.GetConversionQueryDto[], TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  let id: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ id,  } = params[0] as ConvertionResultsQueryParameters);
      options = params[1];
      axiosConfig = params[2];
    } else {
      [id, options, axiosConfig] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<Types.GetConversionQueryDto[], TError, TSelectData>({
    queryFn: __convertionResults,
    queryKey: convertionResultsQueryKey(id),
    ...convertionResultsDefaultOptions as unknown as UseQueryOptions<Types.GetConversionQueryDto[], TError, TSelectData>,
    ...options,
  });
}
/**
 * @return Success
 */
export function setConvertionResultsData(queryClient: QueryClient, updater: (data: Types.GetConversionQueryDto[] | undefined) => Types.GetConversionQueryDto[], id: string) {
  queryClient.setQueryData(convertionResultsQueryKey(id),
    updater
  );
}

/**
 * @return Success
 */
export function setConvertionResultsDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.GetConversionQueryDto[] | undefined) => Types.GetConversionQueryDto[]) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function softDeleteUrl(id: string): string {
  let url_ = getBaseUrl() + "/api/Conversion/SoftDelete/{id}";
if (id === undefined || id === null)
  throw new Error("The parameter 'id' must be defined.");
url_ = url_.replace("{id}", encodeURIComponent("" + id));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function softDeleteMutationKey(id: string): MutationKey {
  return trimArrayEnd([
      'Client',
      'softDelete',
      id as any,
    ]);
}

/**
 * @return No Content
 */
export function useSoftDeleteMutation<TContext>(id: string, options?: Omit<UseMutationOptions<void, unknown, void, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, void, TContext> {
  const key = softDeleteMutationKey(id);
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation(() => Client.softDelete(id), {...options, mutationKey: key});
}
  
    
export function hardDeleteUrl(id: string): string {
  let url_ = getBaseUrl() + "/api/Conversion/HardDelete/{id}";
if (id === undefined || id === null)
  throw new Error("The parameter 'id' must be defined.");
url_ = url_.replace("{id}", encodeURIComponent("" + id));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function hardDeleteMutationKey(id: string): MutationKey {
  return trimArrayEnd([
      'Client',
      'hardDelete',
      id as any,
    ]);
}

/**
 * @return No Content
 */
export function useHardDeleteMutation<TContext>(id: string, options?: Omit<UseMutationOptions<void, unknown, void, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, void, TContext> {
  const key = hardDeleteMutationKey(id);
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation(() => Client.hardDelete(id), {...options, mutationKey: key});
}
  
    
export function cancelDeleteUrl(id: string): string {
  let url_ = getBaseUrl() + "/api/Conversion/CancelDelete/{id}";
if (id === undefined || id === null)
  throw new Error("The parameter 'id' must be defined.");
url_ = url_.replace("{id}", encodeURIComponent("" + id));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function cancelDeleteMutationKey(id: string): MutationKey {
  return trimArrayEnd([
      'Client',
      'cancelDelete',
      id as any,
    ]);
}

/**
 * @return No Content
 */
export function useCancelDeleteMutation<TContext>(id: string, options?: Omit<UseMutationOptions<void, unknown, void, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, void, TContext> {
  const key = cancelDeleteMutationKey(id);
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation(() => Client.cancelDelete(id), {...options, mutationKey: key});
}
  
    
export function profileGETUrl(): string {
  let url_ = getBaseUrl() + "/api/Profile";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let profileGETDefaultOptions: UseQueryOptions<Types.ProfileInfoDto, unknown, Types.ProfileInfoDto> = {
  queryFn: __profileGET,
};
export function getProfileGETDefaultOptions(): UseQueryOptions<Types.ProfileInfoDto, unknown, Types.ProfileInfoDto> {
  return profileGETDefaultOptions;
};
export function setProfileGETDefaultOptions(options: UseQueryOptions<Types.ProfileInfoDto, unknown, Types.ProfileInfoDto>) {
  profileGETDefaultOptions = options;
}

export function profileGETQueryKey(): QueryKey;
export function profileGETQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'Client',
      'profileGET',
    ]);
}
function __profileGET() {
  return Client.profileGET(
    );
}

/**
 * @return Success
 */
export function useProfileGETQuery<TSelectData = Types.ProfileInfoDto, TError = unknown>(options?: UseQueryOptions<Types.ProfileInfoDto, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useProfileGETQuery<TSelectData = Types.ProfileInfoDto, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.ProfileInfoDto, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<Types.ProfileInfoDto, TError, TSelectData>({
    queryFn: __profileGET,
    queryKey: profileGETQueryKey(),
    ...profileGETDefaultOptions as unknown as UseQueryOptions<Types.ProfileInfoDto, TError, TSelectData>,
    ...options,
  });
}
/**
 * @return Success
 */
export function setProfileGETData(queryClient: QueryClient, updater: (data: Types.ProfileInfoDto | undefined) => Types.ProfileInfoDto, ) {
  queryClient.setQueryData(profileGETQueryKey(),
    updater
  );
}

/**
 * @return Success
 */
export function setProfileGETDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.ProfileInfoDto | undefined) => Types.ProfileInfoDto) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function profilePATCHUrl(): string {
  let url_ = getBaseUrl() + "/api/Profile";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function profilePATCHMutationKey(): MutationKey {
  return trimArrayEnd([
      'Client',
      'profilePATCH',
    ]);
}

/**
 * @param body (optional) 
 * @return No Content
 */
export function useProfilePATCHMutation<TContext>(options?: Omit<UseMutationOptions<void, unknown, Types.UpdateProfileInfoCommand, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, Types.UpdateProfileInfoCommand, TContext> {
  const key = profilePATCHMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((body: Types.UpdateProfileInfoCommand) => Client.profilePATCH(body), {...options, mutationKey: key});
}