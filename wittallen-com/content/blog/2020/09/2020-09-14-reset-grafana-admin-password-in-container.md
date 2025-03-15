+++
title = "Reset Grafana admin password in container"
[taxonomies]
  tags = ["grafana", "docker"]
[extra]
  toc = false
+++

I came across this handy article[^1] today while attempting to resolve the very issue in the title. Short, unambiguous, and to-the-point, this post by Milosz Galazka wins my "handy dandy article of the week" award. _I'll work on the title._

Based off of his work, I've made this shell one-liner to reset it to "password". Your container must be running, named `grafana`, and your user part of the `docker` group for it to work:
```bash
ADMIN_PASSWORD="password";CONTAINER_ID=$(docker ps -qf "name=^grafana$");docker exec -it $CONTAINER_ID grafana-cli admin reset-admin-password $ADMIN_PASSWORD
```

And then Ctrl+P Ctrl+Q to detach from the container without stopping it.

Cheers!

---

[^1]: [How to reset admin password in Grafana container](https://blog.sleeplessbeastie.eu/2019/12/11/how-to-reset-admin-password-in-grafana-container/)