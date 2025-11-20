import { Routes, Route } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getSongList } from './api/songApi'

import SongList from './pages/SongList.jsx'
import SongDetail from './pages/SongDetail.jsx'
//import { useState, useEffect } from 'react'

function App() {
  const { data: songs, isLoading, isError, error } = useQuery({
    queryKey: ['songs'],
    queryFn: getSongList
  })

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>
  }

  return (
    <Routes>
      <Route path="/" element={<SongList songs={songs} />} />
      <Route path="/song/:id" element={<SongDetail songs={songs} />} />
    </Routes>
  )
}

export default App
