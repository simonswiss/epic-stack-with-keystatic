# Epic Stack with Keystatic

This example adds a simple blog to the Epic Stack with
[Keystatic](https://keystatic.com) and [MDX](https://mdxjs.com).

The blog is available at the `/blog` route. Posts can be edited via the MDX
files directly, or via the Keystatic Admin UI available at the `/keystatic`
route.

## Main steps taken to add Keystatic

1. Install the `@keystatic/core` and `@keystatic/remix` packages from npm

2. Define Content schemas and storage strategy a `keystatic.config.tsx` file.
   This example uses the `local` storage mode (local file system). You can use
   [`github`](https://keystatic.com/docs/github-mode) or
   [`cloud`](https://keystatic.com/docs/cloud) modes to enable content
   management from the deployed site.

3. Create `app/routes/keystatic+/$.tsx` and `app/routes/api+/keystatic.$.tsx`
   routes to enable Keystatic to truly become part of your project.

4. Visit the `/keystatic` route to access the Keystatic Admin UI.

## Learn more about Keystatic

Keystatic makes Markdown, Markdoc, MDX, JSON and YAML content in your codebase
editable via an elegant Admin UI. No database — the content lives in your file
system and GitHub repository.

This example is setup to store content in MDX files, but you can also use
Markdoc, JSON or YAML to store content and make it editable.

Visit the [Keystatic website](https://keystatic.com) to learn more!
