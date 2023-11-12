#!/bin/bash
cd /opt/lampp && sudo ./xampp start
cd ~
cd ~/Desktop/I_N_V_O/
npm run dev &
sleep 1
xdg-open http://localhost:5173
read -n 1 -s -r -p "Press any key to stop XAMPP..."
cd /opt/lampp && sudo ./xampp stop
