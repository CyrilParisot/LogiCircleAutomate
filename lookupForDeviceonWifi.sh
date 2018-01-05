#!/bin/sh
export LOGI_EMAIL=login
export LOGI_PASS=pass
export DEBUG=dsd
export DeviceToLookFor=android-cyril

cd /home/cyril/git/LogiCircleAutomate/

# scan standard ip range
if nmap -sn 192.168.1.0/24 | grep -q $DeviceToLookFor
then
   echo "device found on local NetWork";
   #use full path to node for crontab
   /usr/local/bin/node desactivateLogiCircle.js
else
   echo "device not found on local NetWork";
   #use full path to node for crontab
   /usr/local/bin/node activateLogiCircle.js
fi
