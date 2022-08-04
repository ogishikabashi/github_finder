import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-light">A React app to search GitHub profiles and displaying profile details.</h1>
      <Link to='/' className='btn btn-primary btn-lg'>
        <FaHome className='mr-2' />
        Back To Home
      </Link>
    </div>
  )
}

export default About