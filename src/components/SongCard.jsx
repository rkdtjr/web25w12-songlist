import { Link } from 'react-router-dom'

export default function SongCard({ song }) {
  return (
    <Link to={`/song/${song.id}`} >
      <img
        src={`https://picsum.photos/100/100?random=${song.id}`}
        alt={`${song.title} 앨범 이미지`}
      />
      <div>{song.title}</div>
    </Link>
  )
} 