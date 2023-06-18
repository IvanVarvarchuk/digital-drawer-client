import styles from './convertions-list.module.css';
import React, { useState } from 'react';
import { Column, useFlexLayout, usePagination, useSortBy, useTable } from 'react-table';
import { Table, Button } from 'react-bootstrap';
import { TargetFileFormat } from '../../../../pages/convert/state/convertion-reducer/convertion-reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';

const fake: FileConvertion[] = [
  {
    id: '0f8fad5b-d9cb-469f-a165-70867728950e',
    fileName: 'string1.dxf',
    originalFileName: 'string1.png',
    creationDate: new Date(),
    targetFormat: 0,
  },
  {
    id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    fileName: 'string1.dxf',
    originalFileName: 'string1.png',
    creationDate: new Date(),
    targetFormat: 0,
  },
  {
    id: '0f8fad5b-d9cb-469f-a165-70867728950e',
    fileName: 'string1.dxf',
    originalFileName: 'string1.png',
    creationDate: new Date(),
    targetFormat: 0,
  },
  {
    id: '0f8fad5b-d9cb-469f-a165-70867728950e',
    fileName: 'string1.dxf',
    originalFileName: 'string1.png',
    creationDate: new Date(),
    targetFormat: 0,
  },
  {
    id: '0f8fad5b-d9cb-469f-a165-70867728950e',
    fileName: 'string1.dxf',
    originalFileName: 'string1.png',
    creationDate: new Date(),
    targetFormat: 0,
  },
  {
    id: '0f8fad5b-d9cb-469f-a165-70867728950e',
    fileName: 'string1.dxf',
    originalFileName: 'string1.png',
    creationDate: new Date(),
    targetFormat: 0,
  },
];

export type FileConvertion = {
  id: string,
  fileName: string,
  originalFileName: string,
  creationDate: Date,
  targetFormat: number,
}

const useFileConvertionTable = () => {
  const data = fake;

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
        accessor: 'originalFileName',
      },
      {
        Header: 'Creation Date',
        accessor: 'creationDate',
        Cell:({ row: { original }}) => { return (<span>{original.creationDate.toDateString()}</span>)},
      },
      {
        Header: 'Target Format',
        accessor: 'targetFormat',
        Cell:({ row: { original }}) => { return (<span>{TargetFileFormat[original.targetFormat]}</span>)},
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
  const tableConfig = useFileConvertionTable();
  const {
    columns,
    getTableProps,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    rows,
  } = tableConfig;
  return (
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
      {/* <div>
        <Button variant="primary" onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </Button>
        <Button variant="primary" onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </Button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
      </div> */}
    </div>
  );
};

export default ConvertionsList;

