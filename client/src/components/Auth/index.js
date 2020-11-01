import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import { connect } from 'react-redux';
import { loginAction, logoutAction } from '../../store/actions';

import './style.css';

function Auth(props) {
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    full_name: '',
    email: '',
    password: '',
    designation: ''
  })

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    const body = {
      email: state.email,
      password: state.password
    }
    props.loginAction(body);
  }

  // const fullName = props.user !== null ? props.user.full_name : '';

  return (
    <div className={`authWrapper ${show ? 'show' : ''}`}>
      <div className="toggleAuth" id="TooltipExample" onClick={() => setShow(!show)}>
        <i className="fa fa-sign-in"></i>
        <Tooltip placement="left" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
          {show ? 'Close' : 'Show'}
        </Tooltip>
      </div>
      <div className="icon">
        <i className="fa fa-lock"></i>
      </div>
      {!props.user ? (
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-3" placeholder="User email" type="text" name="email" onChange={handleChange} value={state.email} />
          <input className="form-control mb-3" type="password" placeholder="Password" name="password" onChange={handleChange} value={state.password} />
          <button className="btn submit">Login</button>
        </form>
      ) : (
          <button onClick={props.logoutAction} className="btn btn-danger submit">logout</button>
        )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    hero: state.hero,
    user: state.meta.user
  }
}

export default connect(mapStateToProps, { loginAction, logoutAction })(Auth);