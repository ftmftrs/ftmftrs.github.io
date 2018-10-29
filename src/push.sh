if ! git diff-index --quiet HEAD --; then
    echo "modification des images"
    git add dist/img
    git commit -m "Resize picture"
    git remote rm origin
    git remote add origin https://kosssi:$GITHUB_TOKEN@github.com/ftmftrs/ftmftrs.github.io.git
    git push origin HEAD:master
else
    echo "pas de changement"
fi
