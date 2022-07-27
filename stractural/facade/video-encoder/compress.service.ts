export class CompressService {
    compressor(file : File) {
        const blob = "";
        return {
            compress() {
                return blob;
            },
            deCompress() {
                return file;
            }
        }
    }
}
