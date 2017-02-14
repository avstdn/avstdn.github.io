import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

const rows = [
{"id":1,"first_name":"William","last_name":"Elliott","email":"welliott0@wisc.edu",
"country":"Argentina","ip_address":"247.180.226.89"},
{"id":2,"first_name":"Carl","last_name":"Ross","email":"cross1@mlb.com",
"country":"South Africa","ip_address":"27.146.70.36"},
{"id":3,"first_name":"Jeremy","last_name":"Scott","email":"jscott2@cbsnews.com",
"country":"Colombia","ip_address":"103.52.74.225"},
{"id":4,"first_name":"William","last_name":"Elliott","email":"welliott0@wisc.edu",
"country":"Argentina","ip_address":"247.180.226.89"},
{"id":5,"first_name":"Carl","last_name":"Ross","email":"cross1@mlb.com",
"country":"South Africa","ip_address":"27.146.70.36"},
{"id":6,"first_name":"Jeremy","last_name":"Scott","email":"jscott2@cbsnews.com",
"country":"Colombia","ip_address":"103.52.74.225"},
// more data
];

ReactDOM.render(
    <Table
      height={(rows.length + 1) * 30 + 2}
      width={1150}
      rowsCount={rows.length}
      rowHeight={30}
      headerHeight={30}
      rowGetter={function(rowIndex) {return rows[rowIndex]; }}>
 
      <Column dataKey="id" width={50} label="Id" />
      <Column dataKey="first_name" width={200} label="First Name" />
      <Column  dataKey="last_name" width={200} label="Last Name" />
      <Column  dataKey="email" width={400} label="e-mail" />
      <Column  dataKey="country" width={300} label="Country" />
 
    </Table>,
    document.getElementById('example')
);