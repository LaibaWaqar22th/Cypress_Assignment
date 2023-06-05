import BuyProduct from './objects/Buy_Product.cy'

describe('order spec', () => {
  it('buy a product', () => {
    const buyProduct = new BuyProduct()

    buyProduct.navigate('https://www.amazon.in/')

    buyProduct.searchProduct('#twotabsearchtextbox')

    buyProduct.selectProduct('div[data-index="22"]', 'a[class="a-link-normal s-no-outline"]')

    buyProduct.addProduct('select[id="native_dropdown_selected_size_name"]', 2, '#add-to-cart-button')

    buyProduct.buyProduct('span[id="sw-subtotal-item-count"]', 'a-size-medium a-color-base a-text-bold', '#sc-buy-box-ptc-button')
  })
})