if ! git diff-index --quiet HEAD --; then
    echo "modification des images"
else
    echo "pas de changement"
fi
