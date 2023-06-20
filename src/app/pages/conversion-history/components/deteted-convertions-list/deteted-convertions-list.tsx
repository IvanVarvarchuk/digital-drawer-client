import styles from './deteted-convertions-list.module.css';
import React, { useState } from 'react';
import { Column, useFlexLayout, usePagination, useSortBy, useTable } from 'react-table';
import { Table, Button } from 'react-bootstrap';
import { TargetFileFormat } from '../../../../pages/convert/state/convertion-reducer/convertion-reducer';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FileConvertion } from '../convertions-list/convertions-list';
import { useConversionAllQuery } from '../../../../../api/axios-client/Query';

const useDetetedConvertionTable = (data: FileConvertion[]) => {
  
  const columns = React.useMemo<Column<FileConvertion>[]>(
    () => [
      {
        Header: 'Item Number',
        accessor: 'id',
        Cell:({ row: { index }}) => { return (<span>{index}</span>)},
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
        Cell:({ row: { original }}) => { return (<span>{original.conversionDate.toDateString()}</span>)},
      },
      {
        Header: 'Deletion Date',
        accessor: 'deletionDate',
        Cell:({ row: { original }}) => { return (<span>{original.deletionDate?.toDateString()}</span>)},
      },
      {
        Header: 'Target Format',
        accessor: 'fileFormat',
        Cell:({ row: { original }}) => { return (<span>{TargetFileFormat[original.fileFormat]}</span>)},
      },
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <div>
            <Button variant="danger" onClick={() => handleDelete(row.original.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button variant="primary" onClick={() => handleCancel(row.original.id)}>
              <FontAwesomeIcon icon={faCancel}/>Cancel
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

  const handleCancel = (fileId: string) => {
    // Download fileId logic here
    console.log('Cancel deletion of the file:', fileId);
  };

  return useTable<FileConvertion>(
    {
      columns,
      data,
    },
    useFlexLayout,
    useSortBy,
  );
}

export function DetetedConvertionsList() {
  const convetions = useConversionAllQuery({ isDeleted: true });

  const tableConfig = useDetetedConvertionTable(convetions.data as FileConvertion[]);
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

export default DetetedConvertionsList;