import { EncoderInterface } from "./EncoderInterface";

export default class JsonEncoder implements EncoderInterface {
    encoder(data : string) : string {
        return data + "/JSONEncode"
    }
}