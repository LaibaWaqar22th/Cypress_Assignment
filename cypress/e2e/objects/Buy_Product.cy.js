class BuyProduct {
    navigate(url) {
        cy.visit(url)
    }

    searchProduct(searchBox) {
        const productelm = cy.get(searchBox)
        productelm.click()
        productelm.type('dress{enter}')

    }

    selectProduct(parent, child) {
        cy.get(parent)
            .find(child).invoke('removeAttr', 'target').click()
    }

    addProduct(selSize, size, cart) {
        cy.get(selSize).select(size)
        cy.get(cart).click()

    }

    buyProduct(total, assertClass, buy) {
        cy.get(total).should('have.class', assertClass)
        cy.get(buy).click()

    }
}

export default BuyProduct