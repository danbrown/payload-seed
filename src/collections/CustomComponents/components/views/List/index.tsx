import React from "react";
// import {DefaultList} from '../../../../../../src/admin/components/views/collections/List/Default';
import { List } from "payload/components/views/List";

import "./index.scss";

const CustomListView: React.FC<any> = (props) => (
  <div className="custom-list">
    <p>This is a custom Pages list view</p>
    <p>Sup</p>
    <List {...props} />
  </div>
);

export default CustomListView;
