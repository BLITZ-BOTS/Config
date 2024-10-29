# <img src="./blitz_config.png">

This module provides a utility function [Config](/mod.ts) for reading and retrieving configuration values from a `config.json` file located in the current working directory. The function reads the JSON file, parses it, and returns the value corresponding to a specified key.

## Installation

Make sure you have a `config.json` file in your current working directory. You can create one with the required configuration values.

## Usage

```typescript
import { Config } from '@blitz-bots/config';

const apiKey = Config('API_KEY');
console.log(apiKey); 
```
