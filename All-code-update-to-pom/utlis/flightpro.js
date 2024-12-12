class alltestcases {
        tc01(){
        cy.get('[class="css-1y1pb0x"]').eq(0).click().should('have.text', 'My Bookings')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('[class="b0x94f1"]').eq(2).click().should('have.text', 'Find my booking')
        }
        tc02(){
        cy.get('[class="css-1y1pb0x"]').eq(0).click().should('have.text', 'My Bookings')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('#email').type('111111gmail.com')
        cy.get('#orderNumber').click()
        cy.get('#email-error').click().should('have.text', 'Invalid email address')
        }
        tc03(){
        cy.get('[class="css-1y1pb0x"]').eq(0).click().should('have.text', 'My Bookings')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('#email').type('malikanassultan@gmail.com')
        cy.get('#orderNumber').type('1111-111-111')
        cy.get('[class="b0x94f1"]').eq(2).click()
        cy.get('[class="etiHtmlContent"]').should('have.text','No matching order was found. Check your order information and try again.')
        }
        tc04(){
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('[class=" css-1hwfws3"]').eq(0).type('lahore').should('have.text','lahore')
        cy.wait(2000)
        cy.contains('Lahore, Pakistan').click()
        cy.get('[class=" css-1hwfws3"]').eq(1).type('kara')
        cy.contains('Karachi, Pakistan').click()
        cy.get('[placeholder="Departure"]').click()
        cy.get('[class="rdp-cell"]').eq(12)//
        cy.contains('13').trigger("click")//.click()//.should('have.value','13')
        cy.get('[placeholder="Return"]')
        cy.contains('16').trigger("click")
        cy.get('[class="css-wqv4tk"]').should('have.text','1 adult').click()
        cy.get('[class="css-vqwtyu"]').eq(0).click()
        cy.get('[class="css-vqwtyu"]').eq(2).click()
        cy.get('[class="_1l9hnub5"]').should('have.text','Economy').click()
        cy.get('[class="_1l9hnubh _1l9hnubj _1l9hnubi"]').eq(0).click()//.should('have.text','Premium')
        cy.get('#directFlightCheckbox').check().should('be.checked')
        cy.get('[class="b0x94f1"]').eq(2).should('have.text','Search flights').click()
        }
        tc05(){
        cy.get('#onetrust-accept-btn-handler').click()
        cy.wait(2000)
        cy.get('[class="_15h2k5o0 ioeri02 _15h2k5o1"]>[class="_7x9w550"]').eq(1).should('be.visible').click({force:true})
        cy.get('[class=" css-1hwfws3"]').eq(0).type('lahore').should('have.text','lahore')
        cy.wait(2000)
        cy.contains('Lahore, Pakistan').click()
        cy.get('[class=" css-1hwfws3"]').eq(1).type('kara')
        cy.contains('Karachi, Pakistan').click()
        cy.get('[placeholder="Departure"]').click()
        cy.get('[class="css-qkh1e0"]').eq(17).should('be.visible')
        cy.contains('16').trigger("click")
        cy.get('[class="css-wqv4tk"]').should('have.text','1 adult').click()
        cy.get('[class="css-vqwtyu"]').eq(0).click()
        cy.get('[class="css-vqwtyu"]').eq(2).click()
        cy.get('[class="_1l9hnub5"]').should('have.text','Economy').click()
        cy.get('[class="_1l9hnubh _1l9hnubj _1l9hnubi"]').eq(0).click()//.should('have.text','Premium')
        cy.get('#directFlightCheckbox').check().should('be.checked')
        cy.get('[class="b0x94f1"]').eq(2).should('have.text','Search flights').click()
        }
    }
    export const Alltestcase =new alltestcases
    /*mybookingbutton: '[class="css-1y1pb0x"]',
        cacheacceptbtn: '#onetrust-accept-btn-handler',
        clickonfindmybooking: '[class="b0x94f1"]',
        email: '#email',
        errorvalid: '#email-error',
        ordernumber: '#orderNumber',
        errormsg: '[class="etiHtmlContent"]',
        clickonfromfield: '[class=" css-1hwfws3"]',
        departure: '[placeholder="Departure"]',
        dateee: '[class="rdp-cell"]',
        returndate: '[placeholder="Return"]',
        selectdate: '[class="css-qkh1e0"]',
        oneway: '[class="_15h2k5o0 ioeri02 _15h2k5o1"]>[class="_7x9w550"]',
        clickonadults: '[class="css-wqv4tk"]',
        clickonplusbutton: '[class="css-vqwtyu"]',
        clickoneconomy: '[class="_1l9hnub5"]',
        selectpre: '[class="_1l9hnubh _1l9hnubj _1l9hnubi"]',
        checkbox: '#directFlightCheckbox',
        searchbtn: '[class="b0x94f1"]',
    }*/
