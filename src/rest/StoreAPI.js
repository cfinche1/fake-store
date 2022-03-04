const StoreEndpoint = "https://621d4042806a09850a561672.mockapi.io/products/";

class StoreAPI {
    get = async () => {
        try{
            const resp = await fetch(StoreEndpoint);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log('The necklace broke!', e);
        }
    }

    put = async (product) => {
        try{
            const resp = await fetch(`${StoreEndpoint}/${product.product}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            return await resp.json();
        }catch(e) {
            console.log('The ring is lost!', e);
        }
    }

    post = async (product) => {
        try{
            const resp = await fetch(`${StoreEndpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            return await resp.json()
        }catch(e) {
            console.log('You have lost an earring.', e);
        }
    }

    delete = async (product) => {
        try{
            const resp = await fetch(`${StoreEndpoint}/${product.product}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            return await resp.json();
        }catch(e) {
            console.log("The watch stopped ticking.", e);
        }
    }
}

export const storeAPI = new StoreAPI();