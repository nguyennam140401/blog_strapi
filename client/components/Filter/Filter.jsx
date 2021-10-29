import React, { Fragment, useContext } from 'react'
import { Style } from './style'
import { SortContext } from '../../context/SortContext'
import { useRouter } from 'next/router'
const Filter = () => {
    const router = useRouter()
    const { sortState, setSortState } = useContext(SortContext)
    router.query
    const change = (event) => {
        const field = event.target.name
        const value = event.target.value
        setSortState({ ...sortState, [field]: value })
    }
    return (
        <Fragment>
            <Style>
                <select
                    name="published_at"
                    id="published_at"
                    value={sortState.published_at}
                    onChange={change}
                >
                    <option value="asc">Mới nhất</option>
                    <option value="desc">Cũ nhất</option>
                </select>
            </Style>
        </Fragment>
    )
}

export default Filter
