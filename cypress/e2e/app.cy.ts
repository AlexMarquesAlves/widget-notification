describe('widget-notification spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render page with title "Widget Notification"', () => {
    cy.get('title').should('contain', 'Widget Notification')
  })

  describe('should render header component successfully', () => {
    it('should render header successfully', () => {
      cy.get('div.px-6').should('be.visible')
    })

    it('should render header title successfully', () => {
      cy.get('div>span.font-bold')
        .should('be.visible')
        .should('contain', 'Notificações')
    })

    it('should render header button successfully', () => {
      cy.get('div > button.text-violet-500')
        .should('be.visible')
        .should('contain', 'MARCAR TODAS COMO VISTAS')
    })
  })

  describe('should render recent section successfully', () => {
    it('should render recent block successfully', () => {
      cy.get(':nth-child(2) > .bg-zinc-300')
        .should('be.visible')
        .should('contain', 'Recentes')
    })

    it('should render notification block successfully', () => {
      cy.get('div.divide-y-2').should('be.visible')
      cy.get('div>svg.text-violet-500').should('be.visible')
      cy.get(
        ':nth-child(2) > .divide-y-2 > :nth-child(1) > .flex-1 > .text-sm'
      ).should('be.visible')
      cy.get(
        ':nth-child(2) > .divide-y-2 > :nth-child(1) > .flex-1 > .text-xxs > :nth-child(1)'
      )
        .should('be.visible')
        .should('have.text', 'Convite')
      cy.get(
        ':nth-child(2) > .divide-y-2 > :nth-child(1) > .flex-1 > .text-xxs > :nth-child(2)'
      )
        .should('be.visible')
        .should('have.text', 'Há 3 min')
    })

    it('should render notification block with buttons successfully', () => {
      cy.get('div.divide-y-2').should('be.visible')
      cy.get('div>svg.text-violet-500').should('be.visible')
      cy.get(
        ':nth-child(2) > .divide-y-2 > :nth-child(1) > .flex-1 > .text-sm'
      ).should('be.visible')
      cy.get(
        ':nth-child(2) > .divide-y-2 > :nth-child(1) > .flex-1 > .text-xxs > :nth-child(1)'
      )
        .should('be.visible')
        .should('have.text', 'Convite')
      cy.get(
        ':nth-child(2) > .divide-y-2 > :nth-child(1) > .flex-1 > .text-xxs > :nth-child(2)'
      )
        .should('be.visible')
        .should('have.text', 'Há 3 min')
      // buttons
      cy.get('#close-button').should('be.visible')
      cy.get('#check-button').should('be.visible')
    })
  })

  describe('should render old section successfully', () => {
    it('should render recent block successfully', () => {
      cy.get(':nth-child(3) > .bg-zinc-300')
        .should('be.visible')
        .should('contain', 'Antigas')
    })
  })
})
