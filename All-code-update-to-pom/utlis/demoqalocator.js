class qaweb {
    Addnewuser() {
            cy.get('[class="card mt-4 top-card"]').eq(0).click()
            cy.get('#item-3').click().should('have.id','item-3')
            cy.get('#addNewRecordButton').click().should('have.text','Add')
            cy.get('#firstName').type('Alden').should('have.value', 'Alden')
            cy.get('#lastName').type('Cantrell').should('have.value', 'Cantrell')
            cy.wait(3000)
            cy.get('#userEmail').type('test@test.com').should('have.value', 'test@test.com')
            cy.wait(3000)
            cy.get('#age').type('30').should('have.value', '30')
            cy.wait(3000)
            cy.get('#salary').type('12345').should('have.value', '12345')
            cy.get('#department').type('QA').should('have.value', 'QA')
            cy.get('#submit').click().should('have.text','Submit') 
    }
    edituser(){
        cy.get('[class="card mt-4 top-card"]').eq(0).click()
        cy.get('#item-3').click().should('have.id','item-3')
        cy.wait(3000)
        cy.get('#edit-record-2').should('have.id','edit-record-2').click()
        cy.wait(3000)
        cy.get('#firstName').should('have.value', 'Alden').clear().type('Gerimedica').and('have.value', 'Gerimedica')
        cy.get('#lastName').should('have.value', 'Cantrell').clear().type('BV').and('have.value', 'BV')
        cy.get('#submit').click().should('have.text','Submit')
    }
    brokenimage(){
        cy.get('[class="card mt-4 top-card"]').eq(0).click()
        cy.get('#item-6').click().should('have.id','item-6')
        cy.get('[src="/images/Toolsqa_1.jpg"]').should('have.attr','src','/images/Toolsqa_1.jpg')
    }
    usersubmit(){
        cy.get('[class="card mt-4 top-card"]').eq(1).click()
        cy.get('[class="element-list collapse show"]').click()//.should('have.id','item-0')
        cy.get('#firstName').type('Gerimedica')//.should('have.value','Gerimedica')
        cy.get('#lastName').type('BV')//.should('have.value','Gerimedica')
        cy.get('#userEmail').type('test@test.com')//.should('have.value', 'test@test.com')
        cy.get('[for="gender-radio-1"]').eq(0).click()//.should('have.value','Male')
        cy.get('#userNumber').type('0123456789')//.should('have.value', '12345')
        cy.get('#dateOfBirthInput').click()//.should('have.value','15 January 1990')
        cy.get('[class="react-datepicker__month-select"]').select('January')
        cy.get('[class="react-datepicker__year-select"]').select('1990')
        cy.get('[class="react-datepicker__day react-datepicker__day--015"]').click()
        cy.get('#subjectsContainer').type('Maths')
        cy.get('[id="react-select-2-option-0"]').click()
        cy.get('[for="hobbies-checkbox-2"]').click()
        cy.get('[type="file"]').selectFile('C:/Users/owner/OneDrive/Desktop/zaaa.PNG')
        cy.get('#currentAddress-wrapper').type('Netherland')
        cy.get('[class=" css-tlfecz-indicatorContainer"]').eq(0).click()
        cy.contains('Haryana').eq(0).click()
        cy.get('[class=" css-1hwfws3"]').eq(1).click()
        cy.contains('Panipat').click()
        cy.get('#submit').click()
        cy.get('#example-modal-sizes-title-lg').should('have.text','Thanks for submitting the form')
    }
    progressbar(){
        cy.get('[class="card-body"]').eq(3).should('have.class','card-body').click()
        cy.get('[class="element-list collapse show"]>[class="menu-list"]>[id="item-4"]').should('have.id','item-4').click()
        cy.get('#startStopButton').should('have.text','Start').click().should('have.text','Stop')
    }
    tooltip(){
        cy.get('[class="card-body"]').eq(3).should('have.class','card-body').click()
        cy.get('[class="element-list collapse show"]>[class="menu-list"]>[id="item-6"]').click()
        cy.get('#toolTipButton').trigger('mouseover').should('have.text','Hover me to see')
    }
    dragdrop(){
        cy.get('[class="card-body"]').eq(4).should('have.class','card-body').click()
        cy.get('[class="element-list collapse show"]>[class="menu-list"]>[id="item-3"]').click()
        cy.get('#draggable').drag('#droppable',{force:true})//.should('be.visible')
    }
}
export const Qaweb = new qaweb


/*export const demoqaverifyaddnewuser ={
    navigatetoelement: '[class="card mt-4 top-card"]',
    clickonwebtales: '#item-3',
    clickonaddbutton: '#addNewRecordButton',
    adduserfirstname: '#firstName',
    adduserlastname: '#lastName',
    adduserEmail: '#userEmail',
    adduserage: '#age',
    addusersalary: '#salary',
    adduserdepartment: '#department',
    clickonsubmitbtn: '#submit'
}

export const verifyeditfunctionality ={
    navigatetoelement: '[class="card mt-4 top-card"]',
    clickonwebtales: '#item-3',
    clickonsecroweditbox: '#edit-record-2',
    clearfirstname:'#firstName',
    clearlastname:'#lastName',
    clickonsubmitbtn: '#submit',
}

export const verifybrokenimage ={
    navigatetoelement: '[class="card mt-4 top-card"]',
    clickonbrokenimages: '#item-6',
    clickonimage: '[src="/images/Toolsqa_1.jpg"]',
}
export const verifythesubmitform ={
    naviagtetoform:'[class="card mt-4 top-card"]',
    clickonpracticefrom: '[class="element-list collapse show"]',  
    userfirstname: '#firstName',
    userlastname: '#lastName',
    userEmail: '#userEmail',
    selectgender: '[for="gender-radio-1"]',
    usernumber: '#userNumber',
    userdateofbirth: '#dateOfBirthInput',
    clickonmonth: '[class="react-datepicker__month-select"]',
    selectyear: '[class="react-datepicker__year-select"]',
    selectdate: '[class="react-datepicker__day react-datepicker__day--015"]',
    usersubject: '#subjectsContainer',
    usercheckbox: '[for="hobbies-checkbox-2"]',
    uploadpicture: '[type="file"]',
    usercurrentaddress: '#currentAddress-wrapper',
    selectuserstate: '[class=" css-tlfecz-indicatorContainer"]',
    selectusercity: '[class=" css-1hwfws3"]',
    clickonsubmitbtn: '#submit',
    verifytheform: '#example-modal-sizes-title-lg',
}
export const verifyprogressbar ={
    clickonwidget: '[class="card-body"]',
    navigatetoprogressbar: '[class="element-list collapse show"]>[class="menu-list"]>[id="item-4"]',
    clickonstartbtn: '#startStopButton'
}
export const verifytooltip ={
    clickonwidget: '[class="card-body"]',
    navigatetotooltip: '[class="element-list collapse show"]>[class="menu-list"]>[id="item-6"]',
    hoveronbtn:'#toolTipButton',
}
export const verifydraganddrop ={
    clickonwidget: '[class="card-body"]',
    navigatetodraganddrop: '[class="element-list collapse show"]>[class="menu-list"]>[id="item-3"]',
    clickondrag: '#draggable',
    clickondrop:'#droppable',
}*/