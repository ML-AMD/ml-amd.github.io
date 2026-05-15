# Hosting Strategy for the MLAMD / exa-AMD / exa-PD Website

Prepared: 2026-05-15

## Recommendation

Use a two-layer hosting strategy:

1. **Primary DOE-facing landing page: Ames National Laboratory**
   - Best for credibility with DOE BES program managers, institutional visibility, durable center branding, and official project accountability.
   - Recommended URL pattern: an expanded Ames Lab center page or subpage under the existing Machine Learning Accelerated Materials Discovery Center page.
   - Use this layer for the concise story: mission, thrust overview, DOE outcomes, latest highlights, leadership/team, publications, and links to deeper technical resources.

2. **Technical and frequently updated microsite: ISU ML Materials site or GitHub Pages**
   - Best for fast updates, richer visuals, publication tracking, software release notes, manuscript progress, examples, and databases.
   - Best short-term path: publish this static site to GitHub Pages from a project repository, then link it from the Ames page and the ISU page.
   - Best medium-term path: mirror or migrate the same content under `ml-material.physics.iastate.edu` if the group wants an ISU-controlled long-lived technical hub.

## Why not only one host?

- **Only Ames Lab:** Strong official positioning, but likely slower updates and less flexibility for software documentation, examples, and frequent progress snapshots.
- **Only ISU:** Flexible and already aligned with the ML materials group, but less official for DOE-facing review and renewal positioning.
- **Only GitHub Pages:** Excellent for versioned static content and open-source visibility, but it can look less institutional if it is the sole public face of a DOE CMS project.

## Practical next step

Start with this local static site as the canonical content source. Deploy it first to GitHub Pages for fast iteration, then ask Ames communications to either:

- incorporate the polished center story and selected figures into the Ames Lab page, or
- create a fuller Ames-hosted project subpage that links to the technical microsite.

This keeps the DOE-facing page official while allowing the research team to update progress, publications, software releases, and roadmaps quickly.

## Existing public pages reviewed

- Ames Lab MLAMD center page: https://www.ameslab.gov/machine-learning-accelerated-materials-discovery-center
- ISU ML materials page: https://ml-material.physics.iastate.edu/
- exa-AMD documentation: https://ml-amd.github.io/exa-amd/
- exa-AMD code: https://github.com/ML-AMD/exa-amd
- exa-PD code: https://github.com/ML-AMD/exa-pd
