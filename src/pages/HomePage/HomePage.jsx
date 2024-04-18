import React from 'react'

import CardsContact from '../../components/Contacts/CardsContact';
import SearchBar from '../../components/Inputs/SearchBar';
import AddContactButton from '../../components/Inputs/AddContactButton';

function HomePage() {
  return (
    <div className='HomePageContainer'>
      <div>
        <AddContactButton />
        <SearchBar />
      </div>
      <CardsContact />
    </div>
  )
}

export default HomePage
