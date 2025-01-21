// Testing different import styles and quotes
import { User } from './models/User';
import formatString from "./utils/stringUtils";
import type { StringConfig } from './utils/stringUtils';
import { uppercase as toUpper } from "../typescript-testing/utils/stringUtils";
import * as StringUtils from './utils/stringUtils';

// Dynamic import
async function testDynamicImport() {
    const module = await import('./utils/stringUtils');
    console.log(module.lowercase('DYNAMIC IMPORT TEST'));
}

// Test different configurations
const config: StringConfig = {
    prefix: '>>',
    suffix: '<<'
};

// Test the imports
const user = new User('John Doe', config);
console.log('Formatted:', user.formatName());
console.log('Shouted:', user.shoutName());
console.log('Whispered:', user.whisperName());

// Test direct utility usage
console.log('Direct format:', formatString('  HELLO  '));
console.log('Renamed import:', toUpper('hello'));
console.log('Namespace import:', StringUtils.lowercase('NAMESPACE'));

// Test dynamic import
testDynamicImport();
