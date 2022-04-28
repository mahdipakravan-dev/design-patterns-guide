import { EncoderInterface } from "./EncoderInterface";
import JsonEncoder from "./JsonEncoder";
import XmlEncoder from "./XmlEncoder";

export class EncoderFactory {
    createEncoder(format : "XML" | "JSON") : EncoderInterface {
        if(format === "JSON") return new JsonEncoder()
        if(format === "XML") return new XmlEncoder()
    }   
}