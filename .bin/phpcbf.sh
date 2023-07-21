#!/usr/bin/env bash

# phpcbf will return exit code 1 if all fixable errors were fixed correctly
# https://github.com/squizlabs/PHP_CodeSniffer/issues/1818#issuecomment-354420927
#   Exit code 0 is used to indicate that no fixable errors were found, so nothing was fixed
#   Exit code 1 is used to indicate that all fixable errors were fixed correctly
#   Exit code 2 is used to indicate that PHPCBF failed to fix some of the fixable errors it found
#   Exit code 3 is used for general script execution errors

echo "Running [composer phpcbf]"
composer phpcbf

if [ "$?" == 1 ]; then
  exit 0
fi