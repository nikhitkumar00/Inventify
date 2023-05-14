import "./Column.css";

const Columns = () => {
  return (
    <div className="wrapper_Column">
      <h2 className="h2_Column">Customise Columns</h2>
      <div className="child_wrap_Column">
        <div className="header_Column">
          <div className="head1_Column">
            <div className="minus1_Column">-</div>
            <div className="title_child_Column">SL.NO</div>
          </div>
          <div className="head2_Column">
            <div className="minus2_Column">-</div>
            <div className="title_child_Column">NAME</div>
          </div>
          <div className="head3_Column">
            <div className="minus3_Column">-</div>
            <div className="title_child_Column">EXPIRY</div>
          </div>
          <div className="head4_Column">
            <div className="minus4_Column">-</div>
            <div className="title_child_Column">MRP</div>
          </div>
          <div className="head5_Column">
            <div className="minus5_Column">-</div>
            <div className="bg_Column">
              <div className="title_child5_Column">QTY</div>
              <div className="plus_Column">+</div>
            </div>
          </div>
        </div>
        <table className="table_Column">
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
        </table>
      </div>
    </div>
  );
};

export default Columns;
