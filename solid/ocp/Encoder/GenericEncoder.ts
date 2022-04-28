import { EncoderFactory } from "./EncoderFactory";

class GenericEncoder {
    constructor(
        private encoderFactory : EncoderFactory
    ){}

    encoder(data : string , format : "XML"|"JSON") : string{
        return this.encoderFactory.createEncoder(format).encoder(data);
    }
}

const encoder = new EncoderFactory();
new GenericEncoder(encoder).encoder("My Data" , "JSON")