import React from 'react'

type PageProps = {
    params:{
        searchTerm: string
    }
}

const Search = async() => {
    const res = await fetch()
}

function SearchResults({params: {searchTerm}}: PageProps) {
    const searchResults = await Search(searchTerm)
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults