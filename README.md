# [@gliech/semantic-release-generic-github-config][1]

> **Disclaimer:** The *code* that exports the preset is pretty bad atm and the
> whole package mainly exists so that I can use the preset in my own projects
> and won't have to replace configurations in all of my repositories if I decide
> to change the flavor of semantic versioning / conventional commmits I use.

A shareable semantic-release config for projects that are on github and do not
need any special build or release steps.

- creates a tag and github release
- updates the ```CHANGELOG.md```

The commit parsing is based on the conventionalcommits preset but adds a bunch
of commit types and changes a few of the commit-type → release-type mappings.

The styling of release-notes and changelog was changes to more closely resemble
the angular preset.

## License

This project is licensed under the terms of the [BSD 4-Clause License](LICENSE)

[1]: https://www.npmjs.com/package/@gliech/semantic-release-generic-github-config
