import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper container">
            <a href="#!" className="brand-logo">
              Logo
            </a>
            <a href="!#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">Javascript</a>
              </li>
              <li>
                <a href="mobile.html">Mobile</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </header>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    test: state.testReducer.test
  };
};

export default connect(mapStateToProps)(Header);
