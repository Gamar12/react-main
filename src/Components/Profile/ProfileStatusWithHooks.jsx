import React, {useEffect, useState} from "react";
import {dblClick} from "@testing-library/user-event/dist/click";

const ProfileStatusWithHooks = (props) => {
    let [editMode,setEditMode] = useState(false)
    let [status,setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    useEffect(() => {
        setStatus(props.status)
    }, [props.editMode])

    function activateEditMode () {
        setEditMode(true)
    }

    function deactivateEditMode () {
        setEditMode(false);
        props.changeStatus(status);
    }

    function changeStatus (e) {
        setStatus(e.target.value)
    }

    return (<div>
            <div>
                {!editMode &&
                    <div>
                        <span
                            onDoubleClick={() => activateEditMode()}
                        >
                            {status || '-----'}
                        </span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input
                            type='text'
                            autoFocus={true}
                            onBlur={() => deactivateEditMode()}
                            value={status}
                            onChange={(e) => changeStatus(e)}
                        />
                    </div>
                }

            </div>
        </div>
    )
}

export default ProfileStatusWithHooks;