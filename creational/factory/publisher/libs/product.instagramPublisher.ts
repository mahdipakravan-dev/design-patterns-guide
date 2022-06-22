export class ProductInstagramPublisher implements ProductType {
    publish(message: MessageInterface): ProductType {
        //TODO Send Message To Linkedin Server
        console.log("🔃 Sending Message To <b>Instagram</b> ...")
        console.log("✅ Sending Message To Instagram <b>Done !</b> ...")
        return this;
    }
}
