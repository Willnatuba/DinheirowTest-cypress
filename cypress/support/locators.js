const locators = {

    LOGIN:{
        USER: '[data-test=username]',
        PASSWORD: '[data-test=password]',
        BTN_LOGIN: '[data-test=login-button]',
        MESSAGE:"h3[data-test='error']"
    },

    PRODUCTS:{
    
        YOUR_CART: '.shopping_cart_link',
        BACKPACK:"[data-test=add-to-cart-sauce-labs-backpack]",
        TSHIRTS:{
            BOLT_TSHIRT:'[data-test=add-to-cart-sauce-labs-bolt-t-shirt]',
            FLEECE_JACKET:'[data-test=add-to-cart-sauce-labs-fleece-jacket]'
        },
    },

    BUTTOM:{

        REMOVE_BOLT_TSHIRT:'[data-test=remove-sauce-labs-bolt-t-shirt]',
        CONTINUE_SHOPPING:'#continue-shopping',
        FILTRO:'[data-test=product_sort_container]',
        CHECOUT:'[data-test=checkout]',
        CONTINUE_CHECK_OUT:'[data-test=continue]',
        FINISH_CHECKOUT:'[data-test=finish]',
        BACK_HOME: '[data-test=back-to-products]'


    },

    FORMULARIO_CHECHOUT:{
        USER_INFORMATION:{
            FiRSTNAME: '[data-test=firstName]',
            LASTNAME:'[data-test=lastName]',
            ZIP_POSTAL_CODE:'[data-test=postalCode]'

        },
    }

   

}

export default locators;