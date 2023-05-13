
import "./Stocks.css";

export const Stocks = () => {
  return (
    <div className="Stocks">
      <table className="StocksTable">
        <tr>
          <th className="th_STOCKS">Sl.no</th>
          <th className="th_STOCKS">Name</th>
          <th className="th_STOCKS">Expiry Date</th>
          <th className="th_STOCKS">MRP</th>
          <th className="th_STOCKS">Quantity</th>
        </tr>
        <tr>
          <td className=".td_STOCKS">data</td>
          <td className=".td_STOCKS">data</td>
          <td className=".td_STOCKS">data</td>
          <td className=".td_STOCKS">data</td>
          <td className=".td_STOCKS">data</td>
        </tr>
        <tr>
          <td className=".td_STOCKS">Sl.no</td>
          <td className=".td_STOCKS">data</td>
          <td  className=".td_STOCKS">data</td>
          <td className=".td_STOCKS">data</td>
          <td className=".td_STOCKS">data</td>
        </tr>
      </table>
      <div>
        <form action="" style={{width:"100%"}}>
          <table className="AddTable">
            <tr>
              <th className="th_STOCKS">Sl.no</th>
              <th className="th_STOCKS">Name</th>
              <th className="th_STOCKS">Expiry Date</th>
              <th className="th_STOCKS">MRP</th>
              <th className="th_STOCKS">Quantity</th>
            </tr>
            <tr>
              <td  className=".td_STOCKS">
                <input type="text" name="" id="" className="StocksInput"/>
              </td>
              <td  className=".td_STOCKS">
                <input type="text" name="" id="" className="StocksInput"/>
              </td>
              <td  className=".td_STOCKS">
                <input type="text" name="" id="" className="StocksInput"/>
              </td>
              <td  className=".td_STOCKS">
                <input type="text" name="" id="" className="StocksInput" />
              </td>
              <td  className=".td_STOCKS">
                <input type="text" name="" id="" className="StocksInput"/>
              </td>
            </tr>
          </table>

          <div className="StocksBottomTableWrapper">
            <input className="StocksAddButton"
              type="submit" value="Add"
              />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Stocks