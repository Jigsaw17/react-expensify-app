import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faComment, faAddressBook, faConciergeBell } from '@fortawesome/free-solid-svg-icons'



export const LoginPage = ({ startLogin }) => (
    <div className="container__layout_page">
    <div className="box_layout__left__container">
     <div className="box_layout">
      <img className="box-layout__title" src="/images/expensify-title.png" />
      <span id="concierge__expensify">
      <FontAwesomeIcon icon={faConciergeBell} color="white" size="2x"/>
      </span>
      <p id="welcome__expensify">Welcome! How would you like to connect?</p>
      <div className ="button_container">
      <button className="buttons__nav" onClick={startLogin}>
      <span id="google__icon">
      <FontAwesomeIcon icon={faGlobe}/>
      </span></button>
      <button className="buttons__nav" >
      <span id="facebook__icon">
      <FontAwesomeIcon icon={faAddressBook}/>
      </span></button>
      <button className="buttons__nav">
      <span id="phone_number__icon">
      <FontAwesomeIcon icon={faComment}/>
      </span></button>
      </div>
      <p id="link__expensify">By logging in, you agree to the <a href="" target="_blank">privacy policy.</a></p>
    </div>
    </div>

    <div className="box_layout__right__container">
        <h1 className="quotes__expensify">Don't just get paid back.<br />Pay it forward</h1>
        <div id="vl__expensify"/>
        <p id="note__one">Every time you book a hotel,<br /> you cover a kid's school lunch</p>
    </div>
    </div>
);


const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

