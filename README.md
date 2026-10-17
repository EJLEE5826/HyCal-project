# HyCal — Project Page

Project page for **HyCal: A Training-Free Prototype Calibration Method for Cross-Discipline Few-Shot Class-Incremental Learning** (CVPR 2026).

- Paper: [arXiv:2604.15678](https://arxiv.org/abs/2604.15678) · [CVPR Open Access](https://openaccess.thecvf.com/content/CVPR2026/html/Lee_HyCal_A_Training-Free_Prototype_Calibration_Method_for_Cross-Discipline_Few-Shot_Class-Incremental_CVPR_2026_paper.html)
- Code: [EJLEE5826/HyCal-CIL](https://github.com/EJLEE5826/HyCal-CIL)

## Structure

```text
index.html                 page content (static, no build step)
static/css/hycal.css       page-specific styles on top of the template's index.css
static/js/index.js         BibTeX copy, section nav, result-table tabs, KaTeX rendering
static/images/             paper figures (WebP), favicon, touch icon, social preview (1200x630)
```

Figures 1–5 are cropped from the arXiv v2 PDF. Result tables are HTML, transcribed from Tables 1–6 of the paper;
bold/underline mark the best/second-best training-free method in each column. Equations are rendered with KaTeX from jsDelivr.

## Before publishing

Search `index.html` for `TODO`:

- author homepage links
- `og:url` / `og:image` if the page is not served from `https://ejlee5826.github.io/HyCal-project/`

To preview locally:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Acknowledgments

Built on the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), which was adopted from the [Nerfies](https://nerfies.github.io/) project page.

## Website License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
