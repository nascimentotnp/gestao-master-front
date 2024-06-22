import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { navbar_items } from "./Data";
import IUser from "../../types/user.type";

interface NavbarItem {
  name: string;
  icon: string;
  public?: boolean;
}

interface NavbarProps {
  currentUser: IUser | undefined;
  showModeratorBoard: boolean;
  showAdminBoard: boolean;
  logOut: () => void;
}

interface NavbarState {
  s: boolean;
}

class Navbar extends Component<NavbarProps, NavbarState> {
  state: NavbarState = { s: false };

  display_navbar_items = (): JSX.Element[] => {
    const { currentUser } = this.props;

    return navbar_items
      .filter((item: NavbarItem) => {
        if (item.public) {
          return !currentUser;
        }
        return currentUser;
      })
      .map((item: NavbarItem, index: number) => {
        return (
          <li className="nav-item me-lg-3 my-lg-0 my-2" key={index}>
            <NavLink
              className="nav-link text-capitalize position-relative hover"
              to={`/${item.name === "" ? "" : item.name}`}
            >
              <i className={`${item.icon} me-2`}></i>
              {item.name === "" ? "home" : item.name}
            </NavLink>
          </li>
        );
      });
  };

  add_shadow = (): void => {
    window.scrollY >= 80
      ? this.setState({ s: true })
      : this.setState({ s: false });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.add_shadow);
    document.addEventListener("DOMContentLoaded", this.add_shadow);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.add_shadow);
    document.removeEventListener("DOMContentLoaded", this.add_shadow);
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard, logOut } = this.props;

    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light text-dark fixed-top ${
          this.state.s ? "shadow-xs" : "shadow"
        }`}
      >
        <div className="container py-2">
          <Link className="navbar-brand" to="/">
            <span>Gestão</span>Master<span>1.0</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">{this.display_navbar_items()}</ul>

            <ul className="navbar-nav mr-auto">
              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/mod"} className="nav-link">
                    Moderator Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </ul>

            {currentUser && (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={logOut}>
                    LogOut
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
