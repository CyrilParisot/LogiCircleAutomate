#!/bin/sh
export LOGI_EMAIL=login
export LOGI_PASS=pass
export DEBUG=dsd
export DeviceToLookFor=android-cyril

if nmap -sn 192.168.1.0/24 | grep -q $DeviceToLookFor
then
   echo "device found";
   node desactivateLogiCircle.js
else
   echo "device not found";
   node activateLogiCircle.js
fi
