import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.scss';
import Loading from '../components/Loading';
import StocksAndFilters from '../components/StocksAndFilters';
import SingleStock from './SingleStock';
import About from '../components/About';
import NavBar from '../components/Navbar';
// eslint-disable-next-line import/extensions
import PageNotFound from '../components/PageNotFound.js';

function App({ visible }) {
  if (visible) {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={() => <StocksAndFilters />} />
          <Route path="/About" component={About} />
          <Route path="/stocks/:symbol" component={SingleStock} />
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
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
