class shoppingcartPage {
    
    product_table='[class="page shopping-cart-page"]'
    valueprice_table="/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/form[1]/table[1]/tbody[1]/tr[${i}]/td[4]/span[2]"
    product_name='[class="product-name"]'
    qty_field='[class="qty-input"]'


    verify_shoppingcartUrl() {
        cy.url().should('include', '/cart')
    }

    verify_producttable() {
        cy.get(this.product_table).should('be.visible')
    }

    verify_productname(name) {
        cy.get(this.product_name).should('have.text', name)
    }

    verify_qty(qty) {
        cy.get(this.qty_field).should('have.value', qty)
    }

    verify_pricetable() {
        cy.xpath(this.valueprice_table).should('be.visible')

        // return cy.get(this.valueprice_table).invoke('text').then((text) => {
        //     const cleanedText = text.replace(/[()]/g, '').trim()    // Hapus semua non-angka
        //     return parseInt(cleanedText) || 0   // Konversi ke angka, default 0 jika kosong
        // })
    }

    get_price() {
        let valueprices = [];
        let i = 1;
    
        // // Menggunakan `.each()` untuk iterasi setiap elemen
        // cy.xpath(this.valueprice_table).each(($el) => {
        //     // Mengambil nilai harga atau harga yang ada di dalam elemen tersebut
        //     const valueprice = parseFloat($el.text().replace(/[^0-9.]/g, '')); // Menghapus karakter non-numerik dan mengonversi ke angka
        //     valueprices.push(valueprice); // Menambahkan valueprice ke array
        //     cy.log(`Harga ke-${i}: ${valueprice}`); // Log harga per item
        //     i++;
        // }).then(() => {
        //     // Jika perlu memproses array valueprices setelah selesai iterasi
        //     cy.log(`Array harga: ${valueprices}`);
        // });
    }

}
module.exports = new shoppingcartPage()