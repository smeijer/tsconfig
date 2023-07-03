# tsconfig

Shared [TypeScript config](tsconfig) for my projects

## Install

```sh
npm install --save-dev @smeijer/tsconfig
```

*This config requires TypeScript 5 or later.*

## Usage

`tsconfig.json`

```json
{
	"extends": "@smeijer/tsconfig",
	"compilerOptions": {
		"outDir": "dist",
    "rootDir": "src"
	},
  "include": ["src/**/*"],
  "exclude": ["src/**/*.test.ts"]
}
```

[tsconfig]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

## Prior Art

- [sindresorhus/tsconfig](https://github.com/sindresorhus/tsconfig)
