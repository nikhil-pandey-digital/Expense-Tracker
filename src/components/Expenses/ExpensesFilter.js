import React from "react";
import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
  // let filteredStatement = "results don't include data of 2021,2020";
  // if(props.selectedYear==='2021'){
  //   filteredStatement="results don't include data of 2022,2020"
  // }

  return (
    <div className="filter">
      <div className="filter-year">
        <label htmlFor="year">Filter by Year </label>

        <select
          name="year"
          id="year"
          value={props.selectedYear}
          onChange={(event) => props.onChangeFilter(event.target.value)}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>

      
    </div>
  );
};

export default ExpensesFilter;
