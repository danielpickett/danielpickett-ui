for d in packages/components/*/dist ; do
  echo "removing $d"
  rm -rf "$d"
done