import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Sort,
  Selection,
  Filter,
  Page,
  Edit,
  Inject,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        allowPaging
        allowSorting
        width="auto"
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Filter, Toolbar, Selection, Sort, Edit, Toolbar]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
