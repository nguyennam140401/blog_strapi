import React, { Fragment, useContext } from 'react'
import { AlertContext } from '../../context/AlertContext'
import './AlertMessage.scss'
const AlertMessage = () => {
    const { alertContextState, setAlertContextState } = useContext(AlertContext)
    return (
        <Fragment>
            {alertContextState.isDisplay && (
                <div className="alert_message">
                    {alertContextState.isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <p>{alertContextState.message}</p>
                    )}
                </div>
            )}
        </Fragment>
    )
}

export default AlertMessage
