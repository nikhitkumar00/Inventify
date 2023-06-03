import { toast } from "react-toastify";
import "./Column.css";
import { useState } from "react";

const Columns = () => {
  const [columnName, setColumnName] = useState("");
  const [dataType, setDataType] = useState("");

  const handleAddColumn = (e) => {
    e.preventDefault();

    const url = `http://127.0.0.1/I_N_V_O%20Backend/newcolumn.php?columnName=${columnName}&dataType=${dataType}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .then(toast.success("Column added successfully"))
      .catch((error) => {
        console.log(error);
        toast.error("Error occured");
      });
  };

  const handleColumnNameChange = (e) => {
    setColumnName(e.target.value);
    console.log(columnName);
  };

  return (
    <div className="wrapper_Column">
      <h2 className="h2_Column">Customize Columns</h2>
      <div className="child_wrap_Column">
        <div className="header_Column">
          <div className="head1_Column">
            <div className="minus1_Column">-</div>
            <div className="title_child_Column">SL.NO</div>
          </div>
          <div className="head1_Column">
            <div className="minus1_Column">-</div>
            <div className="title_child_Column">NAME</div>
          </div>
          <div className="head1_Column">
            <div className="minus1_Column">-</div>
            <div className="title_child_Column">EXPIRY</div>
          </div>
          <div className="head1_Column">
            <div className="minus1_Column">-</div>
            <div className="title_child_Column">MRP</div>
          </div>
          <div className="head1_Column">
            <div className="minus1_Column">-</div>
            <div className="title_child_Column">QTY</div>
          </div>
        </div>
        <form className="table_Column" onSubmit={handleAddColumn}>
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
                  console.log(dataType);
                }}
              >
                <option className="opt_Column" value="VARCHAR(40)">
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
          <button className="btn_Column" type="submit">
            Add Column
          </button>
        </form>
      </div>
    </div>
  );
};

export default Columns;
