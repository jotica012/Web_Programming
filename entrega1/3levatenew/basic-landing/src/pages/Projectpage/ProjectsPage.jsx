import { Link } from 'react-router-dom'
const projects = [
  {
    id: 1,
    title: 'Mcdonalds DOOH',
    description: 'An interactive DOOH experience in which you can interact with a mupi, play and win a McDonald’s combo. This project was developed thinking in an information environment to test the use of arduino, intercommunication through web sockets using express and an attractive design for loyalty and collection of information from new customers.',
    image: '/img/mcdo.png'
  },
  {
    id: 2,
    title: '2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/img/image1.png'
  },
  {
    id: 3,
    title: '3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/img/image2.png'
  },
  {
    id: 4,
    title: '4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/img/image3.png'
  }
]

export function ProjectsPage () {
  return (
    <>
      <h1 id='title'> Projects</h1>
      <ul>
        {
            projects.map((project) => {
              const { id, image, title } = project
              return (
                <li key={id}>
                  <div className='img-container'>
                    <Link to={`/projects/project/${title}`} state={project}>
                      <img src={image} alt='mcdo' />
                    </Link>
                  </div>
                </li>
              )
            })
        }
      </ul>
    </>
  )
}
