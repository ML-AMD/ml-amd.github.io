# MLAMD Center Website

This repository hosts the public website for the CMS Center for Machine Learning Accelerated Materials Discovery (MLAMD):

https://ml-amd.github.io/

The site presents the center's scientific vision, current research progress, publications, software, data products, team members, and future roadmap. It is intended to complement the Ames National Laboratory center page by providing a project-maintained technical microsite that can be updated quickly as exa-AMD, exa-PD, datasets, and publications evolve.

## What this website is for

The website is designed for several audiences:

- Researchers who want to understand the scientific ideas behind AI/ML-assisted materials discovery and exascale phase-diagram prediction.
- DOE program managers and reviewers who need a clear view of project progress, deliverables, publications, and future directions.
- Collaborators and users who want access to released software, documentation, datasets, and citable records.
- Project members who need a central public-facing record of people, thrusts, progress, and community engagement.

## Main content

- `index.html` - landing page and project overview.
- `thrusts.html` - Thrust 1 exa-AMD and Thrust 2 exa-PD research workflows, modules, progress, and code links.
- `progress.html` - recent outcomes, meetings, conference activity, and visible project momentum.
- `publications.html` - papers, preprints, manuscripts, and workflow outputs.
- `data.html` - software, datasets, databases, OSTI records, Zenodo records, GitHub repositories, and documentation links.
- `people.html` - leadership, key personnel, research team members, oversight committee, and advisory committee.
- `roadmap.html` - near-term plans and DOE-relevant future impact.

## Related resources

- Ames Lab center page: https://www.ameslab.gov/machine-learning-accelerated-materials-discovery-center
- ISU ML materials page: https://ml-material.physics.iastate.edu/
- exa-AMD documentation: https://ml-amd.github.io/exa-amd/
- exa-PD documentation: https://ml-amd.github.io/exa-pd/
- exa-AMD code: https://github.com/ML-AMD/exa-amd
- exa-PD code: https://github.com/ML-AMD/exa-pd

## Local preview

From `/Users/weiyixia/Documents/Code`, run:

```bash
./preview-mlamd-sites.sh start --no-open
```

Then preview the published multi-page site at:

```text
http://127.0.0.1:4173/
```

The helper script also serves the single-page prototype at `http://127.0.0.1:4172/` and the Ames-template option at `http://127.0.0.1:4174/`.

For a minimal preview from this repository directory only:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

## Deployment

This repository is the GitHub Pages repository for the ML-AMD organization. The intended public URL is:

```text
https://ml-amd.github.io/
```

The site is static HTML, CSS, JavaScript, and image assets. No build step is required for GitHub Pages once the generated multi-page files are committed to the repository root.

## Maintenance

The canonical editable source is kept locally in `exa-cms-website/`, with generated variants in `exa-cms-website-single-page/` and `exa-cms-website-multi-page/`. The current public repository uses the multi-page version.

Maintained by Weiyi Xia.
