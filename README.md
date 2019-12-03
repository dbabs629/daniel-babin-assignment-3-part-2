Step 1
npm install expo-cli --global
Step 2
git init
Step 3
git add .
Step 4
git commit -m "First commit"
Step 5
git remote add origin remote
Step 6
git push origin master
Step 7
npm install firebase
Step 8
go to node_modules/metro-config/src/defaults/blacklist.js
    change line 15 to: /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
Step 9
create firebase.js & add line import firebase from './firebase';