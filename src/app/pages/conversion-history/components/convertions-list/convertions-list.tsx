import React, { useState } from 'react';
import {
  Column,
  useFlexLayout,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import { Table } from 'react-bootstrap';
import { TargetFileFormat } from '../../../../pages/convert/state/convertion-reducer/convertion-reducer';
import { useConversionAllQuery } from '../../../../../api/axios-client/Query';
import * as Types from '../../../../../api/axios-client';
// import { FileConvertion } from '../../FileConvertion';
import useConvertionHistoryState from '../../state/use-convertion-history-state/use-convertion-history-state';
import { FileConvertion } from '../../../FileConvertion';
import formatColumn from '../../utils/formatColumn';
import { ActionButtons } from '../action-buttons/action-buttons';

export type FileConvertionTableProps = {
  data: FileConvertion[];
  handleDelete: (id: string) => void;
  handleDownload: (id: string) => void;
};

export const useFileConvertionTable = (data: FileConvertion[]) => {
  const columns = React.useMemo<Column<FileConvertion>[]>(
    () => [
      {
        accessor: 'id',
        Cell: ({ row: { index } }) => {
          return <span>{index + 1}</span>;
        },
      },
      {
        Header: 'File Name',
        accessor: 'fileName',
      },
      {
        Header: 'Original File Name',
        accessor: 'convertedFromName',
      },
      {
        Header: 'Creation Date',
        accessor: 'conversionDate',
        Cell: ({ row: { original } }) => {
          return <span>{original?.conversionDate?.toDateString()}</span>;
        },
      },
      {
        Header: 'Target Format',
        accessor: 'fileFormat',
        Cell: ({ row: { original } }) => {
          return (
            <span>{formatColumn(original?.fileFormat ?? TargetFileFormat.DXF)}</span>
          );
        },
      },
      {
        Header: 'Actions',
        Cell: ({ row: { original } }) => <ActionButtons id={original?.id} />,
      },
    ],
    []
  );

  return useTable<FileConvertion>(
    {
      columns,
      data: data ?? [],
    },
    useFlexLayout,
    useSortBy
  );
};

const ConvertionsList = () => {
  //const convetions = useConversionAllQuery({ isDeleted: false });
  const {
    state: { files },
  } = useConvertionHistoryState();

  const tableConfig = useFileConvertionTable(files);
  const {
    columns,
    getTableProps,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    rows,
  } = tableConfig;

  return (
    // (convetions.isFetching || convetions.isLoading ) ?  <div>Loading...</div>:
    <div>
      <Table striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ConvertionsList;
