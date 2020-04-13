import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'


export const Header = ({ startLogout }) => (
  <header>
  <div className="container__content_page">
    <div className="box_content__left__container">
      <div id="user__icon">
        <FontAwesomeIcon icon={faUserCircle} color="orange" size="5x"/>
      </div>
      <div>
        <button onClick={startLogout}><FontAwesomeIcon icon={faSignOutAlt} size="2x"/></button>
      </div>
        
      <Link to="/dashboard"><img className="box-content__title" src="/images/expensify-title.png" /></Link>
    </div>
  </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(Header);





// <NavLink to="/help" activeClassName="is-active">Help</NavLink> 