import React from "react";
import {dblClick} from "@testing-library/user-event/dist/click";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false,
        })
        this.props.changeStatus(this.state.status)
    }

    changeStatus (e) {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) return this.setState({status: this.props.status})
    }


    render() {
        return <div>
            <div>
                {!this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={() => this.activateEditMode()}
                        >
                            {this.props.status || '-----'}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            type='text'
                            autoFocus={true}
                            value={this.state.status }
                            onBlur={() => this.deactivateEditMode()}
                            onChange={(e) => this.changeStatus(e)}
                        />
                    </div>
                }

            </div>
        </div>
    }
}

export default ProfileStatus;