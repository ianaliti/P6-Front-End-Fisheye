import { ComponentFactory } from '../factories/ComponentFactory.js';
import { PhotographerCard } from '../templates/PhotograherCard.js';
import { PhotographerProfile } from '../templates/photographerProfile.js';


// Factory class to create photographer components
export class PhotographerFactory extends ComponentFactory {
    createComponent(type, data) {
        if (type === "photographerCard") {
            return new PhotographerCard(data);
        } else if (type === "photographerProfile") {
            return new PhotographerProfile(data);
        }
        throw new Error("Invalid component type");
    }
}
