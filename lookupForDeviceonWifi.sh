#!/bin/sh
export LOGI_EMAIL=login
export LOGI_PASS=pass
export DEBUG=dsd
export DeviceToLookFor=android-cyril
# scan standard ip range
if nmap -sn 192.168.1.0/24 | grep -q $DeviceToLookFor
then
   echo "device found on local NetWork";
   node desactivateLogiCircle.js
else
   echo "device not found on local NetWork";
   node activateLogiCircle.js
fi
