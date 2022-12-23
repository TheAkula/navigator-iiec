interface Property {
  name: string;
  value: unknown;
}

interface MetadataObject {
  object: ObjectConstructor;
  properties: Property[];
}

export class Reflect {
  static metadata: Record<string, MetadataObject[]> = {};
  static defineMetadata<T extends object>(
    metadataType: string,
    propertyName: string,
    target: T,
    metadataValue: unknown,
  ): void {
    const property: Property = { name: propertyName, value: metadataValue };
    const newMetadata: MetadataObject = {
      object: target.constructor as ObjectConstructor,
      properties: [property],
    };
    const metadataTypeValues = this.metadata[metadataType];
    if (metadataTypeValues) {
      const index = metadataTypeValues.findIndex(
        (value) => value.object === target,
      );

      if (index === -1) {
        this.metadata[metadataType].push(newMetadata);
      } else {
        this.metadata[metadataType][index].properties.push(property);
      }
    } else {
      this.metadata[metadataType] = [newMetadata];
    }
  }

  static getMetadata<T extends ObjectConstructor>(
    metadataType: string,
    propertyName: string,
    target: T,
  ): unknown | null {
    if (!this.metadata[metadataType]) {
      return null;
    }

    const type = this.metadata[metadataType].find((m) => m.object === target);

    if (!type) {
      return null;
    }

    const property = type.properties.find((p) => p.name === propertyName);

    if (!property) {
      return null;
    }

    return property;
  }
  static getMetadataProperties<T extends object>(
    metadataType: string,
    target: T,
  ): Property[] | null {
    const metadata = this.metadata[metadataType];

    if (!metadata) {
      return null;
    }

    const value = metadata.find((v) => v.object === target);

    if (!value) {
      return null;
    }

    return value.properties;
  }
  static clearMetadata(): void {
    this.metadata = {};
  }
}
