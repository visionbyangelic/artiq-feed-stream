<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Artiq architecture
- Keep shared social navigation and the in-memory frontend state provider around the root Outlet so interactions survive navigation without implying backend persistence.
- Keep content screens in their own TanStack leaf routes with unique head metadata, so each destination is directly accessible.
- Keep sample research data separate from presentation and link citations to original sources; mock activity must not claim to be live AI output.
- Define the Artiq visual system in src/styles.css and use shared design-system controls to preserve a cohesive social experience.
