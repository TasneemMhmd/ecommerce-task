const url = "https://fakestoreapi.com";

export const getProducts = async () => {
        const response = await fetch(`${url}/products`);
        const data = await response.json();
        return data;    
};