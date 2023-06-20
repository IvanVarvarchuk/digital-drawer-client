import styles from './convertions-list.module.css';
import React, { useState } from 'react';
import { Column, useFlexLayout, usePagination, useSortBy, useTable } from 'react-table';
import { Table, Button } from 'react-bootstrap';
import { TargetFileFormat } from '../../../../pages/convert/state/convertion-reducer/convertion-reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useConversionAllQuery } from '../../../../../api/axios-client/Query';
import * as Types from '../../../../../api/axios-client';

export type FileConvertion = Required<Types.GetConversionQueryDto>
// export type FileConvertion = {
//   id: string,
//   fileName: string,
//   originalFileName: string,
//   creationDate: Date,
//   targetFormat: number,
// }
const useFileConvertionTableColumns = () => {
 const columns = React.useMemo<Column<FileConvertion>[]>(
  () => [
    {
      accessor: 'id',
      Cell:({ row: { index }}) => { return (<span>{index + 1}</span>)},
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
      Cell:({ row: { original }}) => { return (<span>{original?.conversionDate?.toDateString()}</span>)},
    },
    {
      Header: 'Target Format',
      accessor: 'fileFormat',
      Cell:({ row: { original }}) => { return (<span>{Types.TargetFileFormat[original.fileFormat ?? 0]}</span>)},
    },
    {
      Header: 'Actions',
      Cell: ({ row }) => (
        <div className={styles.actionGroup}>
          <Button variant="danger" onClick={() => handleDelete(row.original.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button variant="primary" onClick={() => handleDownload(row.original.id)}>
            <FontAwesomeIcon icon={faDownload} />
          </Button>
        </div>
      ),
    },
  ],
  []
);

const handleDelete = (fileId: string) => {
  // Delete file logic here
  console.log('Delete file:', fileId);
};

const handleDownload = (fileId: string) => {
  // Download fileId logic here
  console.log('Download file:', fileId);
};

return columns;
}

export const useFileConvertionTable = (data: FileConvertion[], columns: Column<FileConvertion>[]) => {

  return useTable<FileConvertion>(
    {
      columns,
      data,
    },
    useFlexLayout,
    useSortBy,
  );
}

const ConvertionsList = () => {
  const convetions = useConversionAllQuery({ isDeleted: false });
  const columnsConfig = useFileConvertionTableColumns();
  const tableConfig = useFileConvertionTable(convetions.data as FileConvertion[], columnsConfig);
  const {
    columns,
    getTableProps,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    rows,
  } = tableConfig;
  return (
    (convetions.isFetching || convetions.isLoading ) ?  <div>Loading...</div>:
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
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
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

