import React from 'react'

export default function Alerts(props) {
    return (
        props.data && <div className={`alert alert-${props.data.status} alert-dismissible fade show position-absolute w-100`} role="alert">
            <strong className="text-capitalize">{props.data.status}: </strong> {props.data.msg}
        </div>
    )
}