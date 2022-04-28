import JsonEncoder from "./JsonEncoder";
import XmlEncoder from "./XmlEncoder";

class GenericEncoder {
    encode(data:string , format : "json"|"xml") {
        let encoder;
        if(format === "json") {
            encoder = new JsonEncoder()
        }    
        if(format === "xml") {
            encoder = new XmlEncoder()
        } else {
            throw new Error("Unhandled Format")
        }
        return encoder.encode(data);
    }
}

new GenericEncoder().encode("MyData" , "json");