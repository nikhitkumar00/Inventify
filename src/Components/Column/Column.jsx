import "./Column.css";

const Columns = () => {
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
            <div className="minus2_Column">-</div>
            <div className="title_child_Column">NAME</div>
          </div>
          <div className="head1_Column">
            <div className="minus3_Column">-</div>
            <div className="title_child_Column">EXPIRY</div>
          </div>
          <div className="head1_Column">
            <div className="minus4_Column">-</div>
            <div className="title_child_Column">MRP</div>
          </div>
          <div className="head1_Column">
            <div className="minus5_Column">-</div>
            <div className="title_child_Column">QTY</div>
          </div>
        </div>
        <form className="table_Column">
          <div className="container_Column">
            <input
              className="newColumn"
              type="text"
              placeholder="Column Name"
            ></input>
            <div className="dropdown_Column">
            <select className="type_Column" id="dropdown">
                <option className="opt_Column" hidden selected>Data Type</option>
                <option className="opt_Column" value="text">Text</option>
                <option className="opt_Column" value="number">Number</option>
                <option className="opt_Column" value="date">Date</option>
            </select>
            </div>
          </div>
          <button className="btn_Column">Add Column</button>
        </form>
        {/*<form className="table_Column">
          <div className="odd_Column">
            <div className="odd_child_Column">1</div>
            <div className="even_child_Column">2</div>
            <div className="odd_child_Column">3</div>
            <div className="even_child_Column">4</div>
          </div>
          <div className="even_Column">
            <div className="odd_child_Column">sugar</div>
            <div className="even_child_Column">milk</div>
            <div className="odd_child_Column">biscuit</div>
            <div className="even_child_Column">boost</div>
          </div>
          <div className="odd_Column">
            <div className="odd_child_Column">20/2/2024</div>
            <div className="even_child_Column">20/2/2024</div>
            <div className="odd_child_Column">20/2/2024</div>
            <div className="even_child_Column">20/2/2024</div>
          </div>
          <div className="even_Column">
            <div className="odd_child_Column">Rs.50</div>
            <div className="even_child_Column">Rs.20</div>
            <div className="odd_child_Column">Rs.50</div>
            <div className="even_child_Column">Rs.20</div>
          </div>
          <div className="odd5_Column">
            <div className="odd_child_Column">2.00</div>
            <div className="even_child_Column">1.00</div>
            <div className="odd_child_Column">2.00</div>
            <div className="even_child_Column">1.00</div>
          </div>
        </form>*/}
      </div>
    </div>
  );
};

export default Columns;
