import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from '@material-ui/icons';
import MaterialTable, { Icons } from 'material-table';
import React, { forwardRef } from 'react';
import './TableDemo.css';

const tableIcons: Icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const fetchedData = [
  { name: 'Bill', surname: 'Gates', birthYear: 1987, birthCity: 34 },
  { name: 'Elon', surname: 'Musk', birthYear: 1987, birthCity: 34 },
  { name: 'Elon', surname: 'Musk', birthYear: 1987, birthCity: 34 },
  { name: 'Elon', surname: 'Musk', birthYear: 1987, birthCity: 63 },
  { name: 'Elon', surname: 'Musk', birthYear: 1987, birthCity: 63 },
  { name: 'Elon', surname: 'Musk', birthYear: 1987, birthCity: 63 },
  { name: 'Elon', surname: 'Musk', birthYear: 1987, birthCity: 63 },
  { name: 'Elon', surname: 'Musk', birthYear: 1987, birthCity: 63 },
  { name: 'Elon', surname: 'Musk', birthYear: 1987, birthCity: 63 },
  { name: 'Elon', surname: 'Musk', birthYear: 1987, birthCity: 63 },
  { name: 'Elon', surname: 'Musk', birthYear: 1987, birthCity: 63 },
  { name: 'Elon', surname: 'Musk', birthYear: 1987, birthCity: 63 },
  { name: 'Elon', surname: 'Musk', birthYear: 1987, birthCity: 63 },
  { name: 'Elon', surname: 'Musk', birthYear: 1987, birthCity: 63 },
  {
    name: 'Jeff',
    surname: 'Bezos',
    birthYear: 2017,
    birthCity: 34,
  },
];

export default function TableDemo() {
  return (
    <MaterialTable
      icons={tableIcons}
      title="Table Demo"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'Beijing', 63: 'Tokyo' },
        },
      ]}
      data={fetchedData}
      options={{
        emptyRowsWhenPaging: false,
        pageSize: 20,
        pageSizeOptions: [10, 20, 50],
        search: false,
        headerStyle: {
          backgroundColor: '#123456',
          color: '#FFF',
        },
        padding: 'dense',
      }}
    />
  );
}
