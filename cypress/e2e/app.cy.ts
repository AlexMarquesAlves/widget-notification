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
})
