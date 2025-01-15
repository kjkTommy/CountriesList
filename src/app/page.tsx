'use client'
import styles from './globals.module.css'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { RootState, AppDispatch } from '../store/store'
import { fetchCountries, removeCountry } from '@/store/countriesSlice'
import CountryList from './CountryList'

const Home = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { countries, loading, error } = useSelector(
        (state: RootState) => state.countriesReducer
    )

    useEffect(() => {
        dispatch(fetchCountries())
    }, [dispatch])
    const handleRemoveCountry = (alpha2: string) => {
        dispatch(removeCountry(alpha2))
    }

    return (
        <div className={styles.container}>
            <h1>Список стран</h1>
            {loading && <p>Загрузка...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <CountryList countries={countries} onRemove={handleRemoveCountry} />
        </div>
    )
}

export default Home
