import {RequestBuilder} from "./request.builder";

export class MyRequest {
    private url;
    private data;
    private method;
    private headers;
    private agent;

    constructor(requestBuilder : RequestBuilder) {
        this.url = requestBuilder.url
        this.data = requestBuilder.data
        this.method = requestBuilder.method
        this.headers = requestBuilder.headers
        this.agent = requestBuilder.agent
    }

    run () : Promise<any> {
        console.log("Sending "  ,this)
        return fetch(this.url ,{
            method : this.method,
            headers : this.headers ?? {},
            body : this.data ?? {}
        })
    }
}
