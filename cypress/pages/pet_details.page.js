class PetdetailsPage{
    //Locators
    get buttonCookieAccept(){
        return cy.get('button#onetrust-accept-btn-handler')
    }
    get buttonContinue(){
        return cy.get('button[id="continueBtn"]',{ timeout: 10000 })
    }
    get divValidationError1(){
        return cy.contains('div','Please select a pet')
    }
    get divValidationError2(){
        return cy.contains('div','Please enter your pet\'s name')
    }
    get divValidationError3(){
        return cy.contains('div','Please select a gender')
    }
    get divValidationError4(){
        return  cy.contains('div','Please select whether or not this pet is neutered')
    }
    get divValidationError5(){
        return  cy.contains('div','Please select your pet\'s date of birth')
    }
    get spanPetSelector(){
        return cy.contains('span','Dog')
    }
    get inputPetName(){
        return cy.get('input[id="name[0]"]')
        }
    get spanPetGender(){
        return cy.contains('span','Male')
            }
    get inputSpayedOrNeutered(){
        return cy.get('input[id="spayedOrNeutered-Yes[0]"]')
    }
    get inputSignsOfIllnessOrInjury(){
        return cy.get('input[id="signsOfIllnessOrInjury-No[0]"]')
    }
    get spanSingleBreed(){
        return cy.contains('span','Single breed')
    }
    get inputBreedDetails(){
        return cy.get('input[id="breedOne[0]"]')
    }
    get selectDateofBirth(){
        return cy.get('select[id="dateOfBirth[0]relday"]')
    }
    get selectMonthofBirth(){
        return cy.get('select[id="dateOfBirth[0]relmonth"]')
    }
    get selectYearofBirth(){
        return cy.get('select[id="dateOfBirth[0]relyear"]')
    }
    get spanBehaviour(){
        return cy.get('span[id="behaviourLabel[0]"]')
    }
    get spanHasAttacked(){
        return cy.get('span[id="hasAttackedLabel[0]"]')
    }
    get spanIsGuardDog(){
        return cy.get('span[id="isGuardDogLabel[0]"]')
    }
    get spanLivesWithAlcohol(){
        return cy.get('span[id="livesWithAlcoholLabel[0]"]')
    }
    get spanTakenToWork(){
        return cy.get('span[id="takenToWorkLabel[0]"]')
    }

    //Methods
    startQnB(url,title){
        cy.visit(url)
        cy.ignoreException()
        this.buttonCookieAccept.click();
        cy.screenshot()
        cy.title().should('eq',title)
    }

    checkValidation(){
        this.buttonContinue.click();
        cy.screenshot()
        this.divValidationError1;
        this.divValidationError2;
        this.divValidationError3;
        this.divValidationError4;
        this.divValidationError5;

    }

    addPetDetails(){
         //cy.contains('span','Dog').click()
         this.spanPetSelector.click()
         //cy.get('input[id="name[0]"]').click().type('Tommy')
         this.inputPetName.click().type('Tommy')
         //cy.contains('span','Male').click()
         this.spanPetGender.click()
         //cy.get('input[id="spayedOrNeutered-Yes[0]"]').next().click()
         this.inputSpayedOrNeutered.next().click()
         //cy.get('input[id="signsOfIllnessOrInjury-No[0]"]').next().click()
         this.inputSignsOfIllnessOrInjury.next().click()
         //cy.contains('span','Single breed').click()
         this.spanSingleBreed.click()

         //dynamic dropdown+keyboard actions

         //cy.get('input[id="breedOne[0]"]').click().type('{downarrow}')
         this.inputBreedDetails.click().type('{downarrow}')
         //drop down
         //cy.get('select[id="dateOfBirth[0]relday"]').select('1')
         this.selectDateofBirth.select('1')
         //cy.get('select[id="dateOfBirth[0]relmonth"]').select('January')
         this.selectMonthofBirth.select('January')
         //cy.get('select[id="dateOfBirth[0]relyear"]').select('2018')
         this.selectYearofBirth.select('2018')
         //cy.get('span[id="behaviourLabel[0]"]').click()
         this.spanBehaviour.click()
         //cy.get('span[id="hasAttackedLabel[0]"]').click()
         this.spanHasAttacked.click()
         //cy.get('span[id="isGuardDogLabel[0]"]').click()
         this.spanIsGuardDog.click()
         //cy.get('span[id="livesWithAlcoholLabel[0]"]').click()
         this.spanLivesWithAlcohol.click()
         //cy.get('span[id="takenToWorkLabel[0]"]').click()
         this.spanTakenToWork.click()
         //cy.get('button[id="continueBtn"]').click()
         this.buttonContinue.click()
    }
}
export default new PetdetailsPage();