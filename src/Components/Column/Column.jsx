import { toast } from "react-toastify";
import "./Column.css";
import { useEffect, useState } from "react";

const Columns = () => {
  const [columnName, setColumnName] = useState("");
  const [dataType, setDataType] = useState("");
  const [columnNames, setColumnNames] = useState([]);
  const [refreshColumnNames, setRefreshColumnNames] = useState(false);

  const fixedcolumns = [
    "item_id",
    "name",
    "cost_price",
    "quantity",
    "mrp",
    "expiry_date",
  ];

  useEffect(() => {
    const fetchColumnNames = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1/I_N_V_O%20Backend/tableattribute.php"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setColumnNames(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchColumnNames();
  }, [refreshColumnNames]);

  const handleAddColumn = (e) => {
    e.preventDefault();

    if (columnName === "") {
      toast.info("Enter column name");
      return;
    }
    
    if (columnNames.map((column) => column.COLUMN_NAME).includes(columnName)) {
      toast.info("Column already exists");
      return;
    }

    const url = `http://127.0.0.1/I_N_V_O%20Backend/newcolumn.php?columnName=${columnName}&dataType=${dataType}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        toast.success("Column added successfully");
        setRefreshColumnNames(!refreshColumnNames);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error occurred while adding");
      });
  };

  const handleRemoveColumn = (e) => {
    e.preventDefault();

    if (fixedcolumns.includes(columnName)) {
      toast.info("This is a fixed column, hence cannot be removed");
      return;
    }

    const url = `http://127.0.0.1/I_N_V_O%20Backend/removecolumn.php?columnName=${columnName}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        toast.success("Column removed successfully");
        setRefreshColumnNames(!refreshColumnNames);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error occurred while removing");
      });
  };

  const handleColumnNameChange = (e) => {
    setColumnName(e.target.value);
  };

  return (
    <div className="wrapper_Column">
      <h2 className="h2_Column">Customize Columns</h2>
      <div className="child_wrap_Column">
        <div className="header_Column">
          {columnNames.map((columnName, index) => (
            <div className="head1_Column" key={index}>
              <div className="title_child_Column">{columnName.COLUMN_NAME}</div>
            </div>
          ))}
        </div>
        <form className="table_Column">
          <div className="container_Column">
            <input
              className="newColumn"
              type="text"
              placeholder="Column Name"
              value={columnName}
              onChange={handleColumnNameChange}
            />
            <div className="dropdown_Column">
              <select
                className="type_Column"
                id="dropdown"
                value={dataType}
                onChange={(e) => {
                  setDataType(e.target.value);
                }}
              >
                <option className="opt_Column" value="VARCHAR(20)">
                  Text
                </option>
                <option className="opt_Column" value="INT">
                  Number
                </option>
                <option className="opt_Column" value="DATE">
                  Date
                </option>
                <option className="opt_Column" value="BOOLEAN">
                  Boolean
                </option>
              </select>
            </div>
          </div>
          <div className="btn_class_Column">
            <button
              className="btn_Column"
              type="submit"
              onClick={handleAddColumn}
            >
              Add Column
            </button>
            <button
              className="btn_Column"
              type="submit"
              onClick={handleRemoveColumn}
            >
              Delete Column
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Columns;
