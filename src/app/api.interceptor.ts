import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, of, tap } from "rxjs";



const API_COLLECTION = {
    products: "https://fakestoreapi.com/products"

}
export class ApiInterceptor implements HttpInterceptor {

    // Declared a cache Map
    private cache = new Map<string, HttpResponse<any>>();

    // Declared the set of endpoint calls to be cached
    private endpointsToCache = new Set([
        API_COLLECTION.products
    ])


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (this.endpointsToCache.has(req.url)) {            

            const cachedResponse = this.cache.get(req.url);

            // returning cached response
            if (cachedResponse) {
                return of(cachedResponse);
            }

            return next.handle(req).pipe(
                tap((response) => {
                    if (response instanceof HttpResponse) {
                        // caching the endpoint response if it not yet cached
                        this.cache.set(req.url, response)
                    }
                })
            )
        }
        return next.handle(req);
    }
}