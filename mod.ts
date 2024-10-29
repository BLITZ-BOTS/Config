import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

/**
 * Retrieves a configuration value by key from a `config.json` file located in the current
 * working directory.
 * 
 * @param {string} key - The key to look up in the configuration file.
 * @returns {string | number | boolean | object | undefined} - The value associated with the key,
 * or `undefined` if the key is not found or an error occurs.
 */
export function Config(key: string): string | number | boolean | object | undefined {
    try {
        const configPath = path.join(process.cwd(), 'config.json');
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
