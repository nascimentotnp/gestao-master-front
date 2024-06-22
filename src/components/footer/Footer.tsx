import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { navbar_items } from '../navbar/Data';
import './Footer.css';
import { accounts } from './Data';

interface NavbarItem {
  name: string;
  icon: string;
}

interface Account {
  link: string;
  icon: string;
}

class Footer extends Component {
  display_navbar_items = (): JSX.Element[] => {
    return navbar_items.map((item: NavbarItem) => (
      <Link
        className="d-block mb-1 text-muted text-capitalize"
        to={`/${item.name === '' ? '' : item.name}`}
        key={item.name}
      >
        {item.name === "" ? "home" : item.name}
      </Link>
    ));
  };

  display_accounts = (): JSX.Element[] => {
    return accounts.map((item: Account, index: number) => (
      <div className={`a account-${index} mx-2 px-2 py-1 rounded-circle shadow-lg`} key={index}>
        <a className='text-center' href={item.link} target='_blank' rel="noreferrer">
          <i className={item.icon}></i>
        </a>
      </div>
    ));
  };

  display_page_elements = (): JSX.Element[] => {
    const elements: string[] = []; // Add actual elements if needed

    return elements.map((item: string, index: number) => (
      <a className='d-block mb-1 text-muted text-capitalize' href={`#${item}`} key={index}>
        {item === "" ? "Pedidos" : item}
      </a>
    ));
  };

  render() {
    return (
      <div className='footer py-3 pb-4'>
        <div className='container'>
          <div className='footer-top py-3 mb-4 d-flex justify-content-center'>
            {this.display_accounts()}
          </div>
          <div className='row text-center mb-4'>
            <div className='c'>
              <div className='s'>
                <h6 className='footer-title mb-3'>GestãoMaster</h6>
              </div>
            </div>
          </div>
          <div className='copyrights text-center'>
            <p className="small text-muted mb-0">
              &copy; Copyrights. All rights reserved. <Link to="/">GestãoMaster</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
