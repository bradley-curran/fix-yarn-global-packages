# fix-yarn-global-packages

Installed global packages using `yarn`? 

Can't access them since updating `node`? 

Use `fix-yarn-global-packages` to use your global packages again! 

## Installation

```bash
$ npm install -g fix-yarn-global-packages
```

Make sure to use `npm` over `yarn`. That way next time you update `node` you'll still be able to run this tool. 

## Usage

If you can't run your global packages after updating `node` just run the following in your terminal: 

```bash
$ fix-yarn-global-packages
linked http-server
linked css-beautify
linked http-beautify
linked js-beautify
linked <all your other global packages>
```

With any luck, you should be able to use your yarn-installed global packages again. 

## What now? 

My recommendation is that you install global packages using npm until [the issue](https://github.com/yarnpkg/yarn/issues/2064) is resolved. 

You can still use `yarn` to install global packages in the mean time - it just means you'll have to run `fix-yarn-global-packages` each time. 

## Why does yarn break my global packages? 

`npm` symlinks global package binaries to `/usr/local/bin`. 

`yarn` symlinks global package binaries to the same directory that `node` lives. 

The issue is when `node` is updated using tools such as `brew`. 

Rather than clobbering the old version of `node`, `brew` stores the updated version of node in a new directory. 

The problem is that all the existing symlinked binaries are in the old `node` directory. 

## What does fix-yarn-global-packages do under the hood? 

- Finds all the files in `~/.config/yarn/global/node_modules/.bin`
- symlinks each of the files above into `yarn global bin`

Essentially it's copying what yarn did when you first ran `yarn global add <blah>`
