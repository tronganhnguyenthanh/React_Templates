import React, {Component} from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
export default class Category extends Component{
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                       <LeftSidebar/>
                       <RightSidebar/>
                    </div>
                </div>
            </div>
        )
    }
}
