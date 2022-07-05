import {MyRequest} from "./myRequest";

export class RequestBuilder {
    private request : MyRequest;
    public url;
    public data;
    public method;
    public headers;
    public agent;

    static forge() : RequestBuilder {
        return new RequestBuilder();
    }

    withUrl(url : string) : RequestBuilder {
        this.url = url;
        return this;
    }

    withPayload(data : any) : RequestBuilder {
        this.data = data
        return this
    }

    withHeaders(headers : Object) : RequestBuilder {
        this.headers = headers
        return this
    }

    withMethod(method : string) : RequestBuilder {
        this.method = method
        return this
    }

    withAgent(agent : any) : RequestBuilder {
        this.agent = agent
        return this
    }

    build() : MyRequest {
        return new MyRequest(this);
    }
}
