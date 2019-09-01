ng build --prod --output-path docs --base-href "/foe-gb-calc" --deploy-url "https://robsen77.github.io/foe-gb-calc/"
cp docs/index.html docs/404.html
git commit -m 'deploy to github'
git push
