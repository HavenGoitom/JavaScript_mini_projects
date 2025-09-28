import { renderOrderSummary } from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage(){
    await loadProductsFetch();

    const value = await new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

// Using Promise.all
/*Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/



// Using Promise
/*new Promise((resolve) => {
    loadProducts(()=>{
        resolve();
    });
}).then(() =>{
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
}).then(() =>{
    renderOrderSummary();
    renderPaymentSummary();
})
.catch(() => {
    console.log('error')
})
*/


//Using callbacks
/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    }); 
});
*/
