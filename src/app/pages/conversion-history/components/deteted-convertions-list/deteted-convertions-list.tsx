import React from 'react';
import {
  Column,
  useFlexLayout,
  useSortBy,
  useTable,
} from 'react-table';
import { FormControl, Table } from 'react-bootstrap';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { useConversionAllQuery } from '../../../../../api/axios-client/Query';
import useConvertionHistoryState from '../../state/use-convertion-history-state/use-convertion-history-state';
import { FileConvertion } from '../../../FileConvertion';
import { DeleteActionButtons } from '../action-buttons/action-buttons';
import formatColumn from '../../utils/formatColumn';
import * as Types from '../../../../../api/axios-client';

type SearchFilterProps = {
  filter: string,
  setFilter: (filter: string) => void
}

const SearchFilter: React.FC<SearchFilterProps> = ({filter, setFilter}) => {
  return <FormControl type='text' value={filter} onChange={(e) => setFilter(e.target.value)}/>
} 
const useDetetedConvertionTable = (data: FileConvertion[]) => {
  const columns = React.useMemo<Column<FileConvertion>[]>(
    () => [
      {
        Header: 'Item Number',
        accessor: 'id',
        Cell: ({ row: { index } }) => {
          return <span>{index+1}</span>;
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
          return <span>{original.conversionDate.toDateString()}</span>;
        },
      },
      {
        Header: 'Deletion Date',
        accessor: 'deletionDate',
        Cell: ({ row: { original } }) => {
          return <span>{original.deletionDate?.toDateString()}</span>;
        },
      },
      {
        Header: 'Target Format',
        accessor: 'fileFormat',
        Cell: ({ row: { original } }) => {
          return (<span>{formatColumn(original?.fileFormat ?? Types.TargetFileFormat._0)}</span>);

        },
      },
      {
        Header: 'Actions',
        Cell: ({ row: { original } }) => (<DeleteActionButtons id={original.id}/>),
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

export function DetetedConvertionsList() {
  //const convetions = useConversionAllQuery({ isDeleted: true });
  const {
    state: { deletedFiles },
  } = useConvertionHistoryState();

  const tableConfig = useDetetedConvertionTable(deletedFiles);
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
}

export default DetetedConvertionsList;
