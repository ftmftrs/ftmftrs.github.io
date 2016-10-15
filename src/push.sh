if ! git diff-index --quiet HEAD --; then
    echo "modification des images"
    git add build/img
    git ci -m "Resize picture"
    git push
else
    echo "pas de changement"
fi
