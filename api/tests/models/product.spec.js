const { Product } = require('../../src/models/index');
const expect = require('chai').expect;



describe('Products', function () {
    it('agrega productos nuevos ', function() {
      return Product.create({
        marca: 'Patagonia',
        nombre: '24.7',
      })
        .then(product => {
          expect(product.marca).to.equal('Patagonia');
          expect(product.nombre).to.equal('24.7');
        })
    });
});