'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './globals.module.css'
import { CardCountryProps } from '@/types'

const CardCountry: React.FC<CardCountryProps> = ({
    flagUrl,
    isoCode2,
    nameRu,
    onRemove,
}) => {
    return (
        <motion.div
            key={isoCode2}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            layout
            className={styles.card}
        >
            <div className={styles.info}>
                <img
                    src={flagUrl}
                    alt={nameRu}
                    className={styles.flag}
                    loading="lazy"
                />
                <span>{nameRu}</span>
            </div>
            <button
                onClick={() => onRemove(nameRu)}
                className={styles.removeButton}
            >
                Удалить
            </button>
        </motion.div>
    )
}

export default CardCountry
