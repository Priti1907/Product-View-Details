import React, { useState } from "react";
import branch1 from "./api/branch/branch1.json";
import branch2 from "./api/branch/branch2.json";
import branch3 from "./api/branch/branch3.json";

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const SearchInp = () => {
  const [searchFilter, setSearchFilter] = useState("");

  const filterProducts = (products, searchValue) => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const calculateTotalRevenue = (products) => {
    return products.reduce((total, product) => total + product.sold, 0);
  };

  const allProducts = [
    ...branch1.products,
    ...branch2.products,
    ...branch3.products,
  ];

  const filteredProducts = filterProducts(allProducts, searchFilter);
  const totalRevenue = calculateTotalRevenue(filteredProducts);

  const handleInpVal = (searchValue) => {
    setSearchFilter(searchValue);
  };

  return (
    <div className="product-list">
      <label htmlFor="search">Search Products</label>
      <input
        type="text"
        id="search"
        onChange={(e) => handleInpVal(e.target.value)}
        value={searchFilter}
      />
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {filterProducts(branch1.products, searchFilter).map(
            (product) => {
              return (
                <tr key={product.id}>
                   <td>{product.name}</td>
                  <td>{product.sold}</td>
                </tr>
              );
            }
          )}
          {filterProducts(branch2.products, searchFilter).map((product) => {
            return (
              <tr key={product.id}>
                 <td>{product.name}</td>
                <td>{product.sold}</td>
              </tr>
            );
          })}
          {filterProducts(branch3.products, searchFilter).map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.sold}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>Total Revenue:</th>
            <th>{formatNumber(totalRevenue)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SearchInp;
