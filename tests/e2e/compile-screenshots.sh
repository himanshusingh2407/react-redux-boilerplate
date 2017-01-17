cd ./reports/screenshots
convert ./screenshot-mobile* mobile.pdf
convert ./screenshot-tablet* tablet.pdf
convert ./screenshot-desktop* desktop.pdf
zip -r mobile.zip ./screenshot-mobile*
zip -r tablet.zip ./screenshot-tablet*
zip -r desktop.zip ./screenshot-desktop*
rm ./screenshot*
