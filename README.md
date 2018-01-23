# Connector component PoC

A while ago when developing React components for a styleguide we were thinking about a way to release and maintain breaking changes to the styleguide library.

## Idea

**Container component:** A component used within a project to fetch data and pass it on to the presentational component.
**Presentational component:** A component which accepts props and state and return the rendered markup
**Connector component:** A component which imports the Presentational component, maintains backwards compatibility and exports the component to be used within other projects.
