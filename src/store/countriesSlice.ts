import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Country, CountriesState } from '@/types'

const initialState: CountriesState = {
    countries: [],
    loading: false,
    error: null,
}

export const fetchCountries = createAsyncThunk<Country[], void>(
    'countries/fetchCountries',
    async (_, thunkApi) => {
        try {
            const result = await axios.get<Country[]>(
                'https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json'
            )
            return result.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        removeCountry: (state, action: PayloadAction<string>) => {
            state.countries = state.countries.filter(
                (country) => country.name_ru !== action.payload
            )
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading = false
                state.countries = action.payload
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.loading = false
                state.error =
                    action.error.message || 'Failed to fetch countries.'
            })
    },
})

export const { removeCountry } = countriesSlice.actions
export default countriesSlice.reducer
