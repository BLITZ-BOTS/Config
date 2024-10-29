/**
 * Module: Config Loader
 *
 * This module provides a utility function `Config` for reading and retrieving configuration values
 * from a `config.json` file located in the current working directory. The function reads the JSON
 * file, parses it, and returns the value corresponding to a specified key.
 * 
 * @example
 * ```typescript
 * import Config from './path/to/Config';
 * const apiKey = Config('API_KEY');
 * console.log(apiKey); // Outputs the value of 'API_KEY' in config.json, if defined.
 * ```
 * 
 * Errors:
 * If the `config.json` file does not exist or cannot be read, the function will log an error message
 * to the console and return `undefined`.
 * 
 * @module ConfigLoader
 */

import fs from 'node:fs';
import path from 'node:path';

/**
 * Retrieves a configuration value by key from a `config.json` file located in the current
 * working directory.
 * 
 * @param {string} key - The key to look up in the configuration file.
 * @returns {string | number | boolean | object | undefined} - The value associated with the key,
 * or `undefined` if the key is not found or an error occurs.
 */
export default function Config(key: string): string | number | boolean | object | undefined {
    try {
        const configPath = path.join(Deno.cwd(), 'config.json');
        const configData = fs.readFileSync(configPath, 'utf-8');
        
        const config = JSON.parse(configData);
        
        return config[key];
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error reading config.json: ${error.message}`);
        } else {
            console.error("An unknown error occurred.");
        }
        return undefined;
    }
}
