#!/bin/bash

# make directory
mkdir -p .pnpm-store

# install packages
pnpm i

exec "$@"
