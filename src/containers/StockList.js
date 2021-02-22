// import { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Stock from '../components/Stock';
import { retrieveFilteredStocks } from '../actions/index';
import './StockList.scss';

const StockList = ({ stockList }) => (
  <div>
    <hr />
    <div>
      Fetched
      {` ${stockList.length} `}
      stocks
    </div>
    <hr />
    <table id="stocks-table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Sector</th>
          <th>Industry</th>
          <th>Exchange</th>
          <th>Country</th>
          <th>Price</th>
          <th>Id</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        {stockList.map((stock, index) => (
          <Stock
            key={stock.id}
            number={index + 1}
            stock={stock}
          />
        ))}
      </tbody>
    </table>
  </div>
);

StockList.propTypes = {
  stockList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  stockList: retrieveFilteredStocks(state),
});

export default connect(mapStateToProps)(StockList);
