import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Button from 'bootstrap-styled/lib/Button';
import { createStructuredSelector } from 'reselect';
import { makeSelectDemo } from './selectors';
import { onToggleDemo as onToggleDemoAction } from './actions';

const LandingPage = function LandingPage() {
  return <div>Hello World</div>;
};

const PortfolioPage = function PortfolioPage() {
  return <div>Portfolio</div>;
};

const NotFoundPage = function NotFoundPage() {
  return <div>404 - Not found</div>;
};

export const defaultProps = {
  demo: true,
  onToggleDemo: onToggleDemoAction,
};

export const propTypes = {
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  demo: PropTypes.bool.isRequired,
  /**
   * Title used to display abbreviation text.
   */
  onToggleDemo: PropTypes.func.isRequired,
};

class DemoComponentUnstyled extends Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      demo,
      onToggleDemo,
    } = this.props;

    return (
      <Router>
        <div>
          <Button onClick={onToggleDemo}>
            Toggle status {demo.toString()}
          </Button>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
/**
 * An abbreviation tag component used to display abbreviated words and acronyms definition
 */

const mapStateToProps = createStructuredSelector({
  demo: makeSelectDemo(),
});

const mapDispatchToProps = (dispatch) => ({
  onToggleDemo: () => dispatch(onToggleDemoAction()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

DemoComponentUnstyled.defaultProps = defaultProps;
DemoComponentUnstyled.propTypes = propTypes;

const DemoComponent = compose(withConnect)(DemoComponentUnstyled);


/** @component */
export default DemoComponent;

