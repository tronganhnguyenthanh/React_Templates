import React, {Component} from 'react'
import HeaderBottom from './HeaderBottom'
import HeaderMiddle from './HeaderMiddle'
import HeaderTop from './HeaderTop'
export default class Header extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <HeaderTop/>
                    <HeaderMiddle/>
                    <HeaderBottom/>
                </header>
            </div>
        )
    }
}
