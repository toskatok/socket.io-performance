# socket.io-performance
## Introduction
In three year of platform development we always face same problem, what do we do with real-time applications.
In these three years we have always used [socket.io](https://socket.io/) as our realtime solution, but after all we have time for check
it's performance for good of all IoT developers.

## How To

1. Run the server

```sh
node index.js
```

2. Checkout the following link

```
http://server_ip:1820
```

## Evaluation
### Echo
We create http, socket-io server and then emit messages from it, web client echoes back these messages and
from time difference between first and second message we can estimate round-trip time.

| RTT | Access |
|:---:|:-------|
| 2 - 4 ms | Local |

## Useful Links
- http://drewww.github.io/socket.io-benchmarking/
