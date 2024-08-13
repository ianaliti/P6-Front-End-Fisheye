// Base factory class for creating components
export class ComponentFactory {
    createComponent(type, data) {
        throw new Error("This method should be overridden!");
    }
}
