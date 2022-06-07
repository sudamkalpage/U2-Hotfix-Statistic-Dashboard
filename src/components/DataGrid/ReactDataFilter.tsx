import React, { useEffect, useState } from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";
import DateFilter from "@inovua/reactdatagrid-community/DateFilter";
import moment from "moment";
import { IDataTableRow } from "../../Types/IDataTableRow";
import { IGraphData } from "../../Types/IGraphData";
// import { useDataStore } from "../store/DataStore";
import { useGraphDataStore } from "../../store/GraphDataStore";
import CustomizedDialogs from "./ConfirmModal";
import { DATES_PER_MONTH, EXCEL_SEPARATOR } from "../../constants/constants";
window.moment = moment;
var data: any = require("../../data/data.json");

export default function App(props: any) {
  // const data = useDataStore((state) => state.data);
  const setGraphdata = useGraphDataStore((state) => state.setGraphData);
  const setFilteredGraphdata = useGraphDataStore(
    (state) => state.setFilteredGraphData
  );
  // const filteredGraphData = useGraphDataStore(
  //   (state) => state.filteredGraphData
  // );
  const [dataSource, setDataSource] = useState<IDataTableRow[]>([]);
  var graph_data: IGraphData[][] = [];
  const total_graph_data: IGraphData[][][] = [];
  const filtered_graph_data: IGraphData[][][] = [];
  const [gridRef, setGridRef] = useState<any>(null);
  const [gridPagination, setGridPagination] = useState<boolean>(true);

  const [productNames, setProductNames] = useState<string[]>([]);
  const [lifeCycleStates, setLifeCycleStates] = useState<string[]>([]);
  const [issueTypes, setIssueTypes] = useState<string[]>([]);

  const product_names = new Set<string>();
  const life_cycle_states = new Set<string>();
  const issue_types = new Set<string>();

  useEffect(() => {
    if (graph_data.length === 0) {
      for (var i: number = 1; i <= 4; i++) {
        DATES_PER_MONTH.forEach(initializeGraphData);
        total_graph_data.push(graph_data);
        filtered_graph_data.push(graph_data);
        graph_data = [];
      }
    }
    // console.log("Initial graph_data", graph_data);
    console.log("Initial filtered graph_data", filtered_graph_data);
    // console.log("data", data.data);

    if (!isEmpty(data)) {
      setDataSource(data.data.map(convertData));
    }

    setProductNames(Array.from(product_names));
    setLifeCycleStates(Array.from(life_cycle_states));
    setIssueTypes(Array.from(issue_types));

    console.log("total_graph_data", total_graph_data);
    setGraphdata(total_graph_data);
    setFilteredGraphdata(total_graph_data);
    props.setIsFetched(true);
  }, []);

  // Initialize graph data with zero values
  function initializeGraphData(item: number, index: number) {
    var temp: any = [];
    for (var i: number = 1; i <= item; i++) {
      temp.push({ day: i.toString(), patches: 0 });
    }
    graph_data.push(temp);
  }

  function isEmpty(obj: any) {
    return Object.keys(obj).length === 0;
  }

  // Convert data
  const convertData = (patch: any): any => {
    product_names.add(patch.products[0].product.name);
    life_cycle_states.add(patch.lifecycleState);
    issue_types.add(patch.issueType);

    countData(patch,total_graph_data);

    return {
      id: 0,
      product_name: patch.products[0].product.name,
      product_version: patch.products[0].product.version,
      life_cycle_state: patch.lifecycleState,
      assigned_to: patch.developedBy,
      issue_type: patch.issueType,
      reported_date: patch.reportedDate,
      hotfix: patch.isHotfix.toString(),
      id_: patch.id,
      life_cycle: patch.lifecycle,
    };
  };

  // Set data to Rechart Graphs
  const countData = (patch: any, graph_data:IGraphData[][][] ): any => {
    const d = new Date(patch.reportedDate);
    // console.log(d)
    // console.log("date", d.getDate());
    // console.log("getMonth", d.getMonth());
    // console.log("getYear", d.getFullYear());
    switch (d.getFullYear()) {
      case 2019:
        graph_data[0][d.getMonth() + 1][d.getDate() - 1].patches++;
        break;
      case 2020:
        graph_data[1][d.getMonth() + 1][d.getDate() - 1].patches++;
        break;
      case 2021:
        graph_data[2][d.getMonth() + 1][d.getDate() - 1].patches++;
        break;
      case 2022:
        graph_data[3][d.getMonth() + 1][d.getDate() - 1].patches++;
        break;
      default:
        graph_data[3][d.getMonth() + 1][d.getDate() - 1].patches++;
    }
  };

  const columns = [
    {
      name: "product_name",
      defaultFlex: 1,
      minWidth: 200,
      header: "Product Name",
      filterEditor: SelectFilter,
      filterEditorProps: {
        // multiple: true,
        // wrapMultiple: false,
        dataSource: productNames.map((c) => {
          return { id: c, label: c };
        }),
      },
      sortable: true,
    },
    {
      name: "product_version",
      defaultFlex: 1,
      minWidth: 120,
      header: "Version",
      sortable: true,
    },
    {
      name: "life_cycle_state",
      defaultFlex: 1,
      minWidth: 180,
      header: "Life Cycle State",
      filterEditor: SelectFilter,
      filterEditorProps: {
        // multiple: true,
        // wrapMultiple: false,
        dataSource: lifeCycleStates.map((c) => {
          return { id: c, label: c };
        }),
      },
      sortable: true,
    },
    {
      name: "assigned_to",
      header: "Assigned To",
      minWidth: 180,
      defaultFlex: 2,
      sortable: true,
    },
    {
      name: "reported_date",
      header: "Reported Date",
      type: "date",
      defaultFlex: 1,
      minWidth: 300,

      // specify dateFormat
      dateFormat: "YYYY-MM-DD",
      filterEditor: DateFilter,
      filterEditorProps: (props: any, { index }: any) => {
        return {
          dateFormat: "YYYY-MM-DD",
          placeholder: index === 1 ? "End Date" : "Start Date",
        };
      },
      render: ({ value, cellProps: { dateFormat } }: any) =>
        moment(value).format(dateFormat),
    },
    {
      name: "issue_type",
      defaultFlex: 1,
      minWidth: 178,
      header: "Issue Type",
      filterEditor: SelectFilter,
      filterEditorProps: {
        // multiple: true,
        // wrapMultiple: false,
        dataSource: issueTypes.map((c) => {
          return { id: c, label: c };
        }),
      },
    },
    {
      name: "hotfix",
      defaultFlex: 1,
      minWidth: 100,
      header: "Hotfix",
      filterEditor: SelectFilter,
      filterEditorProps: {
        // multiple: true,
        // wrapMultiple: false,
        dataSource: ["true", "false"].map((c) => {
          return { id: c, label: c };
        }),
      },
    },
    {
      name: "id_",
      header: "ID",
      minWidth: 100,
      defaultFlex: 1,
      sortable: true,
    },

    {
      name: "life_cycle",
      defaultFlex: 1,
      minWidth: 150,
      header: "Life Cycle",
      filterEditor: SelectFilter,
      filterEditorProps: {
        // multiple: true,
        // wrapMultiple: false,
        dataSource: ["HotFixLifeCycle", "UpdateLifeCycle"].map((c) => {
          return { id: c, label: c };
        }),
      },
      sortable: true,
    },
  ];

  const gridStyle = { minHeight: 590 };

  const filterValue = [
    { name: "product_name", operator: "inlist", type: "select", value: "" },
    {
      name: "product_version",
      operator: "startsWith",
      type: "string",
      value: "",
    },
    { name: "life_cycle_state", operator: "inlist", type: "select", value: "" },
    {
      name: "assigned_to",
      operator: "startsWith",
      type: "string",
      value: "",
    },
    { name: "issue_type", operator: "inlist", type: "select", value: "" },
    { name: "reported_date", operator: "inrange", type: "date", value: null },
    {
      name: "hotfix",
      operator: "inlist",
      type: "select",
      value: "",
    },
    { name: "id_", operator: "startsWith", type: "string", value: "" },
    { name: "life_cycle", operator: "inlist", type: "select", value: "" },
  ];

  useEffect(() => {
    if (gridPagination === false) {
      setGridPagination(true);
    }
  }, [gridPagination]);

  // const hanldeRealTimeGraph = () => {

  //   console.log(filteredGraphData);
  //   gridRef.current.data.map(countData,filtered_graph_data)
  //   console.log(gridRef.current.data);
  // };

  const exportCSV = () => {
    console.log("dataSource", dataSource);
    const columns = gridRef.current.visibleColumns;

    const header = columns.map((c: any) => c.name).join(EXCEL_SEPARATOR);
    const rows = gridRef.current.data.map((data: any) =>
      columns.map((c: any) => data[c.id]).join(EXCEL_SEPARATOR)
    );

    const contents = [header].concat(rows).join("\n");
    const blob = new Blob([contents], { type: "text/csv;charset=utf-8;" });

    downloadBlob(blob);
  };

  const downloadBlob = (blob: any, fileName = "Filtered-U2-updates.csv") => {
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.style.position = "absolute";
    link.style.visibility = "hidden";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <React.Fragment>
      <ReactDataGrid
        handle={setGridRef}
        idProperty="id_"
        columns={columns}
        dataSource={dataSource}
        // onFilterValueChange={hanldeRealTimeGraph}
        style={gridStyle}
        pagination={gridPagination}
        enableColumnFilterContextMenu={false}
        defaultFilterValue={filterValue}
      />
      <CustomizedDialogs
        exportCSV={exportCSV}
        setGridPagination={setGridPagination}
      />
    </React.Fragment>
  );
}
