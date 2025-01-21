// Import with different quote styles
import formatString from '../utils/stringUtils';
import { uppercase, lowercase, type StringFormatter } from "../utils/stringUtils";
import type { StringConfig } from '../utils/stringUtils';

// Class using the imports
export class User {
    constructor(
        private name: string,
        private config: StringConfig = {}
    ) {}

    formatName(): string {
        const formatted = formatString(this.name);
        return `${this.config.prefix || ''}${formatted}${this.config.suffix || ''}`;
    }

    shoutName(): string {
        return uppercase(this.name);
    }

    whisperName(): string {
        return lowercase(this.name);
    }
}
