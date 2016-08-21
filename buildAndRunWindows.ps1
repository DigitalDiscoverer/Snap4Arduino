#!/bin/sh
#cd snap
#Remove-Item ..\..\nwjs-sdk\node_modules\* -recurse
Remove-Item app.zip
Remove-Item app.nw
Remove-Item c:\temp\app.nw
Compress-Archive -Path .\snap\* -DestinationPath app.zip
Rename-Item app.zip app.nw
Move-Item app.nw c:\temp
#rm -R node_modules
#cd ..
.\run.ps1
