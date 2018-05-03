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

export function LandingPage() {
  return <div>Hello World</div>;
}

export function PortfolioPage() {
  return <div>Portfolio</div>;
}

export function NotFoundPage() {
  return <div>404 - Not found</div>;
}

/**
 * Demo component contain a RW operation on the store and disable the status
 */
class Demo extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    /** A boolean value to toggle for the demo of the redux store */
    demo: PropTypes.bool.isRequired,
    /** A dispatch function to be called for toggling the demo */
    onToggleDemo: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Router>
        <div>
          <Button onClick={this.props.onToggleDemo}>
            Toggle status {this.props.demo.toString()}
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

const mapStateToProps = createStructuredSelector({
  demo: makeSelectDemo(),
});

const mapDispatchToProps = (dispatch) => ({
  onToggleDemo: () => dispatch(onToggleDemoAction()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Demo);

