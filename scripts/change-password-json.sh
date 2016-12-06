#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
curl "http://httpbin.org/patch?id=${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN" \
  --data "{
      \"credentials\" : {
      \"email\" : \"$EMAIL\",
      \"password\" : \"$PASSWORD\",
    }
  }"

# data output from curl doesn't have a trailing newline
echo
