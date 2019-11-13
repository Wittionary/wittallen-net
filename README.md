[![Build Status](https://travis-ci.org/Wittionary/wittallen-net.svg?branch=master)](https://travis-ci.org/Wittionary/wittallen-net)

Currently "404s" under some network conditions. I believe it's because the request goes in as HTTPS and something on the AWS side is downgrading to HTTP and then upgrading it again to HTTPS. Firewalls (or potentially some browsers) see this as a downgrade attack - which is fair.
Works if you navigate to it on your celluar network without a VPN. Looking for a definitive solution.
