import { useState } from 'react';

import { UIText } from '../../config'

export const MainMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const {sections} = props

  return (
    <>
      <button 
        id="main-menu"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {isOpen ? (
          <p>blah</p>
        ) : (
          <p>more blah</p>
        )}
      </button>
    </>
  );
}
