import React, { Fragment, useContext } from 'react'
import { AlertContext } from '../../context/AlertContext'
import Style from './style.js'
const AlertMessage = () => {
    const { alertContextState, setAlertContextState } = useContext(AlertContext)
    return (
        <Fragment>
            <Style>
                {alertContextState.isDisplay && (
                    <div className="alert_message">
                        {alertContextState.isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            <p>{alertContextState.message}</p>
                        )}
                    </div>
                )}
            </Style>
        </Fragment>
    )
}

export default AlertMessage
