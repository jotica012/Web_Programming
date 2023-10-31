import { useParams, useNavigate, useLocation } from 'react-router-dom'
import './pdetail.css'
export function ProjectDetail () {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { image, description, title } = state

  return (
    <>
      <h1 id='title'> Projects</h1>
      <p id='protitle'>Can you catch a combo?
      </p>

      <div class='right-align'>
        <p id='ptitle'> ___________{title}</p>
        <div className='img-container'>
          <img src={image} alt='imagen de mcdo' />
        </div>
      </div>
      <p id='descrip'>{description}</p>
      <a onClick={() => navigate('/projects')}>Go back to the project page</a>
    </>
  )
}
