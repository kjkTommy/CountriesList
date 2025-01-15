'use client'
import { CountryListProps } from '@/types'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import CardCountry from './CardCountry'

const CountryList: React.FC<CountryListProps> = ({ countries, onRemove }) => {
    return (
        <AnimatePresence>
            {countries.map((country) => (
                <CardCountry
                    key={country.iso_code2}
                    flagUrl={country.flag_url}
                    isoCode2={country.iso_code2}
                    nameRu={country.name_ru}
                    onRemove={onRemove}
                />
            ))}
        </AnimatePresence>
    )
}

export default CountryList
