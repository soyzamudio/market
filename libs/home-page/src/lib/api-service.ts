class ApiService {
    apiUrl = 'http://localhost:3001/graphql';
    popularBrandsFields = `{id, title, url, image}`;
    popularStylesFields = `{id, title, url, image}`;
    trendingBrandsFields = `{id, title, url}`;
    productsFields = `{id, title, price, priceLabel, favoriteCount, retailerId, condition}`;

    async getGraphQlData(resource, params, fields) {
        const query = `{${resource} ${this.paramsToString(params)} ${fields}}`
        const res = await fetch(this.apiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            body: JSON.stringify({query}),
        });

        if (res.ok) {
            const body = await res.json();
            return body.data;
        } else {
            throw new Error(res.statusText);
        }
    }

    async getProducts(params = {}) {
        const data = await this.getGraphQlData('products', params, this.productsFields);
        return data.products;
    }

    async getPopularBrands(params = {}) {
        const data = await this.getGraphQlData('popularBrands', params, this.popularBrandsFields);
        return data.popularBrands;
    }

    async getPopularStyles(params = {}) {
        const data = await this.getGraphQlData('popularStyles', params, this.popularStylesFields);
        return data.popularStyles;
    }

    async getTrendingBrands(params = {}) {
        const data = await this.getGraphQlData('trendingBrands', params, this.trendingBrandsFields);
        return data.trendingBrands;
    }

    paramsToString(params) {
        let paramString = '';
        if (params.constructor === Object && Object.keys(params).length) {
            const tmp = [];
            // tslint:disable-next-line: forin
            for (const key in params) {
                let paramStr = params[key];
                if(paramStr !== '') {
                    if (typeof params[key] === 'string') {
                        paramStr = `"${paramStr}"`;
                    }
                    tmp.push(`${key}:${paramStr}`);
                }
            }
            if (tmp.length) {
                paramString = `(${tmp.join()})`;
            }
        }

        return paramString;
    }

}

export default new ApiService();