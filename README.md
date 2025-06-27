# Portfolio - Szymon Niedbała

Welcome to my profesional portfolio website
I'm high-school student, passionated about programming and web development.
This site was built using HTML, CSS and little bit of JS.

## 🛠️ Technologies used:

- HTML5
- CSS3
- JavaScript
- Git & GitHub Pages

➡️ [Live Site](https://szymekx13.github.io/portfolio/)

<!--START_SECTION:waka-->
name: Waka Readme
on:
  schedule:
    # Runs at 12am IST
    - cron: '30 18 * * *'
  workflow_dispatch:
jobs:
  update-readme:
    name: Update Readme with Metrics
    runs-on: ubuntu-latest
    steps:
      - uses: anmol098/waka-readme-stats@master
        with:
          WAKATIME_API_KEY: ${{ secrets.WAKATIME_API_KEY }}
          GH_TOKEN: ${{ secrets.GH_TOKEN }}
<!--END_SECTION:waka-->
