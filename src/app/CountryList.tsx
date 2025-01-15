'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FixedSizeList as List } from 'react-window'
import { CountryListProps } from '@/types'
import CardCountry from './CardCountry'
const CountryList: React.FC<CountryListProps> = ({ countries, onRemove }) => {
    const Row = ({
        index,
        style,
    }: {
        index: number
        style: React.CSSProperties
    }) => {
        const country = countries[index]
        return (
            <motion.div
                style={style}
                layout
                key={country.iso_code2}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
            >
                <CardCountry
                    flagUrl={country.flag_url}
                    isoCode2={country.iso_code2}
                    nameRu={country.name_ru}
                    onRemove={onRemove}
                />
            </motion.div>
        )
    }

    return (
        <AnimatePresence>
            <List
                height={750}
                itemCount={countries.length}
                itemSize={100}
                width="100%"
            >
                {Row}
            </List>
        </AnimatePresence>
    )
}

export default CountryList
