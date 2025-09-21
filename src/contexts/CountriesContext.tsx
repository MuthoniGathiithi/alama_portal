'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Country {
  id: string
  name: string
  flagSvg: string
  continent: string
  telCode: string
  centerLat: number
  centerLng: number
}

interface CountriesContextType {
  countries: Country[]
  addCountry: (country: Omit<Country, 'id'>) => void
  updateCountry: (id: string, country: Omit<Country, 'id'>) => void
  deleteCountry: (id: string) => void
  getCountryById: (id: string) => Country | undefined
}

const CountriesContext = createContext<CountriesContextType | undefined>(undefined)

export const useCountries = () => {
  const context = useContext(CountriesContext)
  if (!context) {
    throw new Error('useCountries must be used within a CountriesProvider')
  }
  return context
}

interface CountriesProviderProps {
  children: ReactNode
}

export const CountriesProvider: React.FC<CountriesProviderProps> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([])

  const addCountry = (countryData: Omit<Country, 'id'>) => {
    const newCountry: Country = {
      ...countryData,
      id: Date.now().toString() // Simple ID generation
    }
    setCountries(prev => [...prev, newCountry])
  }

  const updateCountry = (id: string, countryData: Omit<Country, 'id'>) => {
    setCountries(prev => 
      prev.map(country => 
        country.id === id ? { ...countryData, id } : country
      )
    )
  }

  const deleteCountry = (id: string) => {
    setCountries(prev => prev.filter(country => country.id !== id))
  }

  const getCountryById = (id: string) => {
    return countries.find(country => country.id === id)
  }

  return (
    <CountriesContext.Provider value={{
      countries,
      addCountry,
      updateCountry,
      deleteCountry,
      getCountryById
    }}>
      {children}
    </CountriesContext.Provider>
  )
}
