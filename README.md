Text preprocessing:

1. Concatenating the files with a blank line inserted after each file to prevent words merging:
awk 'FNR==1{print ""}1' *.txt > finalfile.txt

2. Removing the blank lines
sed -i '/^$/d' file.txt

3. 