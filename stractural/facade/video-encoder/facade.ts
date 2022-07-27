import {CodecService} from "./codec.service";
import {BitrateService} from "./bitrate.service";
import {CompressService} from "./compress.service";

export class VideoConvertorFacade {
    constructor(
        private codecService : CodecService,
        private bitrateService : BitrateService,
        private compressService : CompressService,
    ) {

    }

    convert() {
        const file = new File(["20","10"],"MYMOVIE" , {});
        const codec = this.codecService.codecDetector(file);
        const biterate = this.bitrateService.detectBiterate(file);
        const compressed = this.compressService.compressor(file);
        return {
            codec,
            biterate,
            compressed,
        }
    }
}
