
import { m } from "../../utlis/ckeckers"
describe('Verify that site must be opened',()=>{
    it('Verify that site must be opened',()=>{
        cy.visit('https://www.gamesforthebrain.com/game/checkers/')
        cy.url().should('include','https://www.gamesforthebrain.com/game/checkers/')
        cy.get('h1').should('have.text','Checkers')
            cy.get('.boardWrapper').should('be.visible')
            cy.move('62','73')
            cy.move('22','13')
            cy.move('71','62')
            cy.move('42','24')
            cy.move('31','22')
            cy.move('51','33')
            cy.move('13',"04")
            cy.move('02','13')
            cy.move('04','15')
            cy.move('13','04')
            cy.move('22','13')
            cy.move('11','33')
            cy.move('00','11')
            cy.move('11','22')
            cy.move('33','44')
            cy.move('20','02')
            cy.move('73','64')
            cy.move('64','75')
            cy.move('15','26')
            cy.move('13','24')
            cy.move('02','24')
            cy.move('04','15')
            cy.move('15','26')
            cy.move('26','37')
            /*cy.get('[name="space62"]').click().should('have.attr', 'src', 'you2.gif')
            cy.get('[name="space73"]').click().should('be.visible').should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            //expect($el).to.have.value('test@dev.com')
            cy.get('[name="space22"]').click()
            cy.get('[name="space13"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space71"]').click()
            cy.get('[name="space62"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space42"]').click()
            cy.get('[name="space24"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space31"]').click()
            cy.get('[name="space22"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space51"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space33"]').click()//.should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space13"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space04"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space02"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space13"]').click()
            cy.wait(3000)
            cy.get('[name="space04"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space15"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space13"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space04"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space22"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space13"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space11"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space33"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space00"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space11"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space11"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space22"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space33"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space44"]').click().should('have.attr', 'src', 'gray.gif')
            cy.wait(3000)
            cy.get('[name="space20"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space02"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space73"]').click()
            cy.get('[name="space64"]').click()
            cy.wait(3000)
            cy.get('[name="space64"]').click()
            cy.get('[name="space75"]').click()
            cy.wait(3000)
            cy.get('[name="space15"]').click()
            cy.get('[name="space26"]').click()
            cy.wait(3000)
            cy.get('[name="space13"]').click()
            cy.get('[name="space24"]').click()
            cy.wait(3000)
            cy.get('[name="space02"]').click()
            cy.get('[name="space24"]').click()
            cy.wait(3000)
            cy.get('[name="space04"]').click()
            cy.get('[name="space15"]').click()
            cy.wait(3000)
            cy.get('[name="space15"]').click()
            cy.get('[name="space26"]').click()
            cy.wait(3000)
            cy.get('[name="space26"]').click()
            cy.get('[name="space37"]').click().should('have.attr', 'src', 'you1k.gif')*/
})
})