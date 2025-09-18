import Link from 'next/link'

const NotFound = () => {

  
  return (
    <>
      <h2> 
        This is unchattered territory
      </h2>
      <p>Sorry, that page could not be found.</p>
      <Link 
        href="/"
      >
        Go Home
      </Link>
    </>

    
  )
}

export default NotFound
