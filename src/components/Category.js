import React, {Component} from 'react'
import LeftSidebarHook from "./LeftSidebarHook"
import RightSidebarHook from "./RightSidebarHook"
export default class Category extends Component{
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                       <LeftSidebarHook/>
                       <RightSidebarHook/>
                    </div>
                </div>
            </div>
        )
    }
}
