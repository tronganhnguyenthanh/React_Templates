import React, { Component } from 'react'
export default class HeaderBottom extends Component {
    render() {
        return (
            <div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="mainmenu pull-left">
                                    <ul className="nav navbar-nav collapse navbar-collapse">
                                        <li><a className="active">Home</a></li>
                                        <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down"></i></a>
                                            <ul role="menu" className="sub-menu">
                                                <li><a>Products</a></li>
                                                <li><a>Product Details</a></li>
                                                <li><a>Checkout</a></li>
                                                <li><a>Cart</a></li>
                                                <li><a>Login</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">Blog<i className="fa fa-angle-down"></i></a>
                                            <ul role="menu" className="sub-menu">
                                                <li><a>Blog List</a></li>
                                                <li><a>Blog Single</a></li>
                                            </ul>
                                        </li>
                                        <li><a>404</a></li>
                                        <li><a>Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="search_box pull-right">
                                    <input type="text" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
