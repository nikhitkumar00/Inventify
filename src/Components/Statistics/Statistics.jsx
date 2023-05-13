
import "./Statistics.css";

const Statistics = () => {
  return (
    <div className="container_statistics">
      <div className="header_statistics">Statistics</div>
      <div className="content_statistics">
        <div className="single-datas_statistics">
          <div className="data-child_statistics green_statistics">
            <div className="info_statistics">Total Profit</div>
            <div className="info-data_statistics">22k</div>
          </div>
          <div className="data-child_statistics blue_statistics">
            <div className="info_statistics">Total Expense</div>
            <div className="info-data_statistics">1232</div>
          </div>
          <div className="data-child_statistics yellow_statistics">
            <div className="info_statistics">Total Orders</div>
            <div className="info-data_statistics">252</div>
          </div>
          <div className="data-child_statistics purple_statistics">
            <div className="info_statistics">Growth This Month</div>
            <div className="info-data_statistics">15 %</div>
          </div>
        </div>
        <div className="tables_statistics">
          <table className="purple_statistics">
            <div className="head_statistics">Status</div>
            <tr>
              <th className="th_statistics">SL No.</th>
              <th className="th_statistics">Name</th>
              <th className="th_statistics">Status</th>
            </tr>
            <tr>
              <td className="td_statistics">1</td>
              <td className="td_statistics">Product A</td>
              <td className="td_statistics">80%</td>
            </tr>
            <tr>
              <td className="td_statistics">2</td>
              <td className="td_statistics">Product B</td> 
              <td className="td_statistics">60%</td>
            </tr>
            <tr>
              <td className="td_statistics">3</td> 
              <td className="td_statistics">Product C</td>
              <td className="td_statistics">90%</td>
            </tr>
            <tr>
              <td className="td_statistics">4</td>
              <td className="td_statistics">Product D</td>
              <td className="td_statistics">75%</td>
            </tr>
            <tr>
              <td className="td_statistics">5</td>
              <td className="td_statistics">Product E</td>
              <td className="td_statistics">85%</td>
            </tr>
            <tr>
              <td className="td_statistics">6</td>
              <td className="td_statistics">Product F</td>
              <td className="td_statistics">50%</td> 
            </tr>
            <tr>
              <td className="td_statistics">7</td>
              <td className="td_statistics">Product G</td>
              <td className="td_statistics">95%</td>
            </tr>
            <tr>
              <td className="td_statistics">8</td>
              <td className="td_statistics">Product H</td>
              <td className="td_statistics">70%</td>
            </tr>
            <tr>
              <td className="td_statistics">9</td>
              <td className="td_statistics">Product I</td>
              <td className="td_statistics">65%</td>
            </tr>
            <tr>
              <td className="td_statistics">10</td>
              <td className="td_statistics">Product J</td>
              <td className="td_statistics">88%</td>
            </tr>
          </table>
          <table className="red_statistics">
            <div className="head_statistics">Restock Items</div>
            <tr>  
              <th className="th_statistics">SL No.</th>
              <th className="th_statistics">Name</th>
            </tr>
            <tr>
              <td className="td_statistics">1</td>
              <td className="td_statistics">Product A</td>
            </tr>
            <tr>
              <td className="td_statistics">2</td>
              <td className="td_statistics">Product B</td>
            </tr>
            <tr>
              <td className="td_statistics">3</td>
              <td className="td_statistics">Product C</td>
            </tr>
            <tr>
              <td className="td_statistics">4</td>
              <td className="td_statistics">Product D</td>
            </tr>
            <tr>
              <td className="td_statistics">5</td>
              <td className="td_statistics">Product E</td>
            </tr>
            <tr>
              <td className="td_statistics">6</td>
              <td className="td_statistics">Product F</td>
            </tr>
            <tr>
              <td className="td_statistics">7</td>
              <td className="td_statistics">Product G</td>
            </tr>
            <tr>
              <td className="td_statistics">8</td>
              <td className="td_statistics">Product H</td>
            </tr>
            <tr>
              <td className="td_statistics">9</td>
              <td className="td_statistics">Product I</td>
            </tr>
            <tr>
              <td className="td_statistics">10</td>
              <td className="td_statistics">Product J</td>
            </tr>
          </table>
        </div>
      </div>
      <div />
    </div>
  );
}

export default Statistics;
