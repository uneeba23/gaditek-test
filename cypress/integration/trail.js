

it('trial',function(){

cy.visit('https://phpstack-151565-1903552.cloudwaysapps.com')

cy.get(':nth-child(1) > .col-md-12 > .form-group > .form-control').type('super_admin')
cy.get(':nth-child(2) > .col-md-12 > .form-group > .form-control').type('dG0.yO2;zJ4>bN8$')
cy.get(':nth-child(3) > .col-md-12 > .btn').click()
Cypress.on('uncaught:exception', (err, runnable) => { return false })

cy.wait(3000)
    cy.get('.side-menu > :nth-child(1) > a').click()
    
cy.wait(1000)
    cy.get('.col-lg-3 > .btn').click()
    
cy.wait(1000)
    cy.get('#project-select').select('VPNRanks.com')
    cy.get('#title').type('uneeba')
    
    cy.get('#provider').select('ExpressVPN')
    cy.get('#tracking_code').type('12232435')

    cy.get('[ng-hide="!project"] > .text-md-right > .btn').click()
})

it('trial1',function(){

    cy.visit('https://phpstack-151565-1903552.cloudwaysapps.com')
    
    cy.get(':nth-child(1) > .col-md-12 > .form-group > .form-control').type('super_admin')
    cy.get(':nth-child(2) > .col-md-12 > .form-group > .form-control').type('dG0.yO2;zJ4>bN')
    cy.get(':nth-child(3) > .col-md-12 > .btn').click()
    Cypress.on('uncaught:exception', (err, runnable) => { return false })
    
    cy.wait(3000)
        cy.get('.side-menu > :nth-child(1) > a').click()
        
    cy.wait(1000)
        cy.get('.col-lg-3 > .btn').click()
        
    cy.wait(1000)
        cy.get('#project-select').select('VPNRanks.com')
        cy.get('#title').type('uneeba')
        
        cy.get('#provider').select('ExpressVPN')
        cy.get('#tracking_code').type('12232435')
    
        cy.get('[ng-hide="!project"] > .text-md-right > .btn').click()
    })
    
    