# helix-github-app

> A GitHub App built with [Probot](https://probot.github.io) that A Probot app

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Contributing

If you have suggestions for how helix-github-app could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2018 Tobias Bocanegra <tripod@bocanegra.ch>

### Openwhisk

```
$ wsk action update github-app --docker tripodsan/probot-ow-nodejs8:latest --web raw action.zip
```

https://adobeioruntime.net/api/v1/web/tripod/default/github-app/probot
