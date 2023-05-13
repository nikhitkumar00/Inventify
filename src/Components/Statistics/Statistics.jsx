import React from "react";
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
              <th>SL No.</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Product A</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Product B</td>
              <td>60%</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Product C</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Product D</td>
              <td>75%</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Product E</td>
              <td>85%</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Product F</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Product G</td>
              <td>95%</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Product H</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Product I</td>
              <td>65%</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Product J</td>
              <td>88%</td>
            </tr>
          </table>
          <table className="red_statistics">
            <div className="head_statistics">Restock Items</div>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Product A</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Product B</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Product C</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Product D</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Product E</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Product F</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Product G</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Product H</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Product I</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Product J</td>
            </tr>
          </table>
        </div>
      </div>
      <div />
    </div>
  );
}

export default Statistics;
