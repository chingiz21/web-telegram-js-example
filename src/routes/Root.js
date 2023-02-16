import React from 'react'
import { useTelegram } from '../helpers/useTelegram'

function Root() {
    const { user } = useTelegram();

    return (
        <div>
            {user}
        </div>
    )
}

export default Root