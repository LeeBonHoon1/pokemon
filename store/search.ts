import { create } from 'zustand'

interface SearchStore {
  count?: number
  id: number
  resetSearchInput: () => void
  setTotalCount: (id: number) => void
  setSearchId: (id: number) => void
}

export const searchStore = create<SearchStore>((set) => ({
  id: 0,
  resetSearchInput: () => {
    set((state) => ({
      ...state,
      id: 0
    }));
  },
  setTotalCount: (id: number) => {
    set((state) => ({
      count: id
    }))
  },
  setSearchId: (id: number) => {
    set((state) => ({
      id: id
    }))
  }
}))


