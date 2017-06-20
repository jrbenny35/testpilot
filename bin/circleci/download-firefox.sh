#!/bin/bash
set -ex

mozdownload ${FIREFOX} --destination ${FF_PATH}
mozinstall firefox.tar.bz2
firefox --version
