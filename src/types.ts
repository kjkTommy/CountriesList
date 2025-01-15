interface Country {
    flag_url: string
    iso_code2: string
    name_ru: string
}

interface CountryListProps {
    countries: Country[]
    onRemove: (isoCode2: string) => void
}
interface CardCountryProps {
    flagUrl: string
    isoCode2: string
    nameRu: string
    onRemove: (isoCode2: string) => void
}
interface CountriesState {
    countries: Country[]
    loading: boolean
    error: string | null
}
export type { Country, CountryListProps, CardCountryProps, CountriesState }
