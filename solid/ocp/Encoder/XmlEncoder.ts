import { EncoderInterface } from "./EncoderInterface";

export default class XmlEncoder implements EncoderInterface {
    encoder(data : string) : string {
        return data + "/XmlEncode"
    }
}