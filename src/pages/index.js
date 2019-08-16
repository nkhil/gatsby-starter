import React from 'react';
import { Link } from 'gatsby';

// export default () => <div>Hello world!</div>

const home = () => {
  return (
    <>
      <Link to='/contact'>Contact</Link>
      <h1>Hello World</h1>
    </>
  )
}

export default home