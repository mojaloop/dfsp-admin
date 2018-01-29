┌────────────┬────────────────────────────────────────────────────────────────────┐
│            │ Denial of Service                                                  │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Name       │ ws                                                                 │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ CVSS       │ 7.5 (High)                                                         │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Installed  │ 1.1.2                                                              │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Vulnerable │ <1.1.5 || >=2.0.0 <3.3.1                                           │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Patched    │ >= 1.1.5 <2.0.0 || >=3.3.1                                         │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Path       │ @mojaloop/dfsp-admin@0.17.45 > ut-port-console@6.2.13 >            │
│            │ socket.io@1.7.3 > engine.io@1.8.3 > ws@1.1.2                       │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ More Info  │ https://nodesecurity.io/advisories/550                             │
└────────────┴────────────────────────────────────────────────────────────────────┘

┌────────────┬────────────────────────────────────────────────────────────────────┐
│            │ Regular Expression Denial of Service                               │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Name       │ parsejson                                                          │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ CVSS       │ 7.5 (High)                                                         │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Installed  │ 0.0.3                                                              │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Vulnerable │ <=0.0.3                                                            │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Patched    │ None                                                               │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Path       │ @mojaloop/dfsp-admin@0.17.45 > ut-port-console@6.2.13 >            │
│            │ socket.io@1.7.3 > socket.io-client@1.7.3 > engine.io-client@1.8.3  │
│            │ > parsejson@0.0.3                                                  │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ More Info  │ https://nodesecurity.io/advisories/528                             │
└────────────┴────────────────────────────────────────────────────────────────────┘

┌────────────┬────────────────────────────────────────────────────────────────────┐
│            │ Denial of Service                                                  │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Name       │ ws                                                                 │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ CVSS       │ 7.5 (High)                                                         │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Installed  │ 2.3.1                                                              │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Vulnerable │ <1.1.5 || >=2.0.0 <3.3.1                                           │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Patched    │ >= 1.1.5 <2.0.0 || >=3.3.1                                         │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Path       │ @mojaloop/dfsp-admin@0.17.45 > ut-port-httpserver@8.15.0 >         │
│            │ ws@2.3.1                                                           │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ More Info  │ https://nodesecurity.io/advisories/550                             │
└────────────┴────────────────────────────────────────────────────────────────────┘

┌────────────┬────────────────────────────────────────────────────────────────────┐
│            │ Regular Expression Denial of Service                               │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Name       │ mime                                                               │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ CVSS       │ 7.5 (High)                                                         │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Installed  │ 1.3.6                                                              │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Vulnerable │ < 1.4.1 || > 2.0.0 < 2.0.3                                         │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Patched    │ >= 1.4.1 < 2.0.0 || >= 2.0.3                                       │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Path       │ @mojaloop/dfsp-admin@0.17.45 > ut-rule@5.8.22 > url-loader@0.5.9 > │
│            │ mime@1.3.6                                                         │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ More Info  │ https://nodesecurity.io/advisories/535                             │
└────────────┴────────────────────────────────────────────────────────────────────┘

┌────────────┬────────────────────────────────────────────────────────────────────┐
│            │ Denial of Service via malformed accept-encoding header             │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Name       │ hapi                                                               │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ CVSS       │ 5.3 (Medium)                                                       │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Installed  │ 16.0.2                                                             │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Vulnerable │ >= 15.0.0 <= 16.1.0                                                │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Patched    │ >= 16.1.1                                                          │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Path       │ @mojaloop/dfsp-admin@0.17.45 > ut-port-console@6.2.13 >            │
│            │ hapi@16.0.2                                                        │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ More Info  │ https://nodesecurity.io/advisories/335                             │
└────────────┴────────────────────────────────────────────────────────────────────┘

┌────────────┬────────────────────────────────────────────────────────────────────┐
│            │ Denial of Service via malformed accept-encoding header             │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Name       │ hapi                                                               │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ CVSS       │ 5.3 (Medium)                                                       │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Installed  │ 16.0.2                                                             │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Vulnerable │ >= 15.0.0 <= 16.1.0                                                │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Patched    │ >= 16.1.1                                                          │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Path       │ @mojaloop/dfsp-admin@0.17.45 > ut-port-httpserver@8.15.0 >         │
│            │ hapi@16.0.2                                                        │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ More Info  │ https://nodesecurity.io/advisories/335                             │
└────────────┴────────────────────────────────────────────────────────────────────┘

┌────────────┬────────────────────────────────────────────────────────────────────┐
│            │ Regular Expression Denial of Service                               │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Name       │ debug                                                              │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ CVSS       │ 3.7 (Low)                                                          │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Installed  │ 2.3.3                                                              │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Vulnerable │ <= 2.6.8 || >= 3.0.0 <= 3.0.1                                      │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Patched    │ >= 2.6.9 < 3.0.0 || >= 3.1.0                                       │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Path       │ @mojaloop/dfsp-admin@0.17.45 > ut-port-console@6.2.13 >            │
│            │ socket.io@1.7.3 > debug@2.3.3                                      │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ More Info  │ https://nodesecurity.io/advisories/534                             │
└────────────┴────────────────────────────────────────────────────────────────────┘

┌────────────┬────────────────────────────────────────────────────────────────────┐
│            │ Regular Expression Denial of Service                               │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Name       │ debug                                                              │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ CVSS       │ 3.7 (Low)                                                          │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Installed  │ 2.2.0                                                              │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Vulnerable │ <= 2.6.8 || >= 3.0.0 <= 3.0.1                                      │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Patched    │ >= 2.6.9 < 3.0.0 || >= 3.1.0                                       │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ Path       │ @mojaloop/dfsp-admin@0.17.45 > ut-port-console@6.2.13 >            │
│            │ socket.io@1.7.3 > socket.io-parser@2.3.1 > debug@2.2.0             │
├────────────┼────────────────────────────────────────────────────────────────────┤
│ More Info  │ https://nodesecurity.io/advisories/534                             │
└────────────┴────────────────────────────────────────────────────────────────────┘