import { ComponentFactory } from './ComponentFactory.js';
import { ImageMedia } from '../templates/ImageMedia.js';
import { VideoMedia } from '../templates/VideoMedia.js';

// Factory class to create media components (image or video)
export class MediaFactory extends ComponentFactory {
    createComponent(type, data) {
        if (type === "image") {
            return new ImageMedia(data);
        } else if (type === "video") {
            return new VideoMedia(data);
        }
        throw new Error("Invalid media type");
    }
}
