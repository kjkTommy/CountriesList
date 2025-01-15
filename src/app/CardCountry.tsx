'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './globals.module.css'
import { CardCountryProps } from '@/types'
import Image from 'next/image'

const normalizeUrl = (url?: string): string => {
    if (!url) {
        return ''
    }
    if (url.startsWith('//')) {
        return `https:${url}`
    }
    return url
}

const CardCountry: React.FC<CardCountryProps> = ({
    flagUrl,
    isoCode2,
    nameRu,
    onRemove,
}) => {
    const normalizedUrl = normalizeUrl(flagUrl)
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
                <Image
                    src={normalizedUrl}
                    alt={nameRu}
                    className={styles.flag}
                    width={40}
                    height={30}
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
