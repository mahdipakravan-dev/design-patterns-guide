export class BitrateService {
    detectBiterate(file : File) {
        if(file.size > 10) {
            return "1080"
        } else {
            return "360"
        }
    }
}
