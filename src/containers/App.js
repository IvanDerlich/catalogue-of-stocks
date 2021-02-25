import { connect } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.scss';
import Loading from '../components/Loading';
import DisplayStocks from '../components/StocksAndFilters';
import DisplaySingleStock from './SingleStock';
import About from '../components/About';
import NavBar from '../components/Navbar';

function App({ visible }) {
  if (visible) {
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={() => <DisplayStocks />} />
        <Route path="/About" component={About} />
        <Route path="/stocks/:symbol" component={DisplaySingleStock} />
      </BrowserRouter>
    );
  }
  return Loading();
}

App.proptypes = {
  visible: PropTypes.bool,
};

App.defaultProps = {
  visible: false,
};

const mapStateToProps = state => ({
  visible: state.visible,
});

export default connect(
  mapStateToProps,
)(App);
