# api

This is the standalone/self hosted version of the api in order to avoid server costs getting too high.

To build, run
```bash
docker build -t <your-container-name> --squash .
```

You can then run the container with
```bash
docker compose up
```
Or deploy it to dockerhub/deploy it on portainer (or wherever else you want to host it.)

# Changelog

## v0.2
- add `/run` endpoint (req body going to change in the future)
- runs introduced at `85,200` turns.
