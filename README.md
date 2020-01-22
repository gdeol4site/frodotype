Text preprocessing:

1. Concatenating the files with a blank line inserted after each file to prevent words merging:

$ awk 'FNR==1{print ""}1' *.txt > unprocessed.txt

2. Removing the blank lines

$ sed -i '/^$/d' unprocessed.txt

3. Word and line counts of unprocessed files 

$ wc -w unprocessed.txt

32694245

$ wc -l unprocessed.txt

934904
