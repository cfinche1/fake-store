const SHOP_ENDPOINT = "https://621d4042806a09850a561672.mockapi.io/products/";

class CynSHOP {
    get = async () => {
        try{
            const resp = await fetch(SHOP_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log('Get is not working!', e);
        }
    }

    put = async (product) => {
        try{
            const resp = await fetch(`${SHOP_ENDPOINT}/${product.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            return await resp.json();
        }catch(e) {
            console.log('Put is not working!', e);
        }
    }

    post = async (product) => {
        try{
            const resp = await fetch(`${SHOP_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            return await resp.json()
        }catch(e) {
            console.log('Post is not working.', e);
        }
    }

    delete = async (product) => {
        try{
            const resp = await fetch(`${SHOP_ENDPOINT}/${product.id}`,{
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

export const cynSHOP = new CynSHOP();