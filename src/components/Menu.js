import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

class Menu extends React.Component {
  constructor(props){
      super(props)
    this.state = {
        isSidebarOpen: false
    };
  };

  handleMenu = () => {
    this.setState(() => ({ isSidebarOpen: !this.state.isSidebarOpen }));
};

  render() {
      const { isSidebarOpen } = this.state
    return (
     <div className="container">
      <div className="menu-button" onClick={this.handleMenu}>
        <FontAwesomeIcon  icon={faBars} color="black" size="2x"/>
      </div>   
	{/*	Sidebar */}
        {<Header /> && (
            <div>
            
            </div>
        )}
      
    </div>      
     )
  }; 
};

export default Menu;


