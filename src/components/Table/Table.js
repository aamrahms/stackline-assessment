import React from "react";
import "./Table.css";
import { useSelector } from "react-redux";

const Table = () => {
  const sales = useSelector((state) => state.data.data[0].sales);
  console.log(sales);
  if (!sales || sales.length === 0) {
    return <p> Loading sales data...</p>;
  }
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th> Week Ending</th>
            <th> Retail Sales</th>
            <th> Wholesale Sales</th>
            <th> Units Sold</th>
            <th> Retailer Margin</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.weekEnding}>
              <td>{sale.weekEnding}</td>
              <td>${sale.retailSales.toLocaleString()}</td>
              <td>${sale.wholesaleSales.toLocaleString()}</td>
              <td>{sale.unitsSold}</td>
              <td>${sale.retailerMargin.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
