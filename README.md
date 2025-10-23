Using [Zola](https://github.com/getzola/zola) and ~~Simple~~ CSS to make a pretty, FAST site that isn't a pain to manage or update.
🤞
Experimenting with htmx.

### contributing
1. install `zola`
2. get it running:
```powershell
# nav to site folder
cd wittallen-com/
zola serve
```
3. open [localhost:1111](http://127.0.0.1:1111)


### TODO
- [ ] add performance scores to README
- [ ] add accessibility scores to README
- [ ] once `trusted-types` are more widely supported, enable it for htmx
```
# e.g.
require-trusted-types-for 'script'; trusted-types htmx-witt-policy;
```