describe('user api', () => {
  it('create User', () => {
    cy.postAPI().then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eql({
        code: 200,
        message: 'ok',
        type: 'unknown'
      })
    })
  })
  it('change User', () => {
    cy.postAPI();
    cy.putAPI().then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eql({
        code: 200,
        message: '1',
        type: 'unknown'
      })
    })
  })
  it('delete User', () => {
    cy.postAPI();
    cy.putAPI();
    cy.request('DELETE', 'https://petstore.swagger.io/v2/user/Nikita', {
      username: "Nikita"
    }).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eql({
        code: 200,
        message: 'Nikita',
        type: 'unknown'
      })
    })
  })
})