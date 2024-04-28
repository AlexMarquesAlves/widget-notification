describe('widget-notification spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render page with title "Widget Notification"', () => {
    cy.get('title').should('contain', 'Widget Notification')
  })
})
