#!/usr/bin/env bash
bucket_name=reactors.haydenhw.com

if [[ $1  != "--no-build" ]]; then
  yarn build;
fi

aws2 s3 sync dist s3://$bucket_name
