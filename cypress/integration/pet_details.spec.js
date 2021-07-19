//This test validates adding pet details to quote and buy site
const data=require('../data/data.js');
import PetdetailsPage from '../pages/pet_details.page'

describe('Adding pet details to quote and buy', () => {
  beforeEach(() =>{
    PetdetailsPage.startQnB(data.pageURL,data.petDetailsPageTitle);
})

  it('Verify validation checks on the page', () => {
      PetdetailsPage.checkValidation();
  })

  it('Enter mandatory values in pet details', () => {
        PetdetailsPage.addPetDetails();

    })

})
