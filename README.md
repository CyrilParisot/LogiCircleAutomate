Installation minimium

  nodeJS V 9.2.1 or more
    sudo apt-get install nodejs
  install npm 5.5.1 or more
    sudo apt-get install npm


  cd "git clone location"
      sudo npm install n -g
    // use lastest stable version
      sudo n stable
  module nodejs
    npm i puppeteer
    npm i debug

  // scan network tools
    sudo apt-get install nmap

Run

1 test node Simpletest.js is use to test nodejs module works

2 run ./lookupForDeviceonWifi.sh
  if $DeviceToLookFor is found it will desactivate LogiCircle record module
  else if $DeviceToLookFor isn't present on network it will activate LogiCircle recode module

next step do a cron job depending on your needs
