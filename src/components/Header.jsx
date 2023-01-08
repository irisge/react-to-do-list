import React from 'react';

import fireIcon from '../assets/fireIcon.svg';
import profilePicture from '../assets/profilePicture.svg';

function Header() {
  return (
    <header className="flex w-100 items-center justify-between text-darkgray font-primary font-1sm pt-4 pr-4 pl-4">
      <div>
        <p className="font-light">Hello!</p>
        <p className="font-medium">
          User Name
          <img src={fireIcon} alt="fire emoji" />
        </p>
      </div>
      <img src={profilePicture} alt="profile picture" />{' '}
    </header>
  );
}
export default Header;
