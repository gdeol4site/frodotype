# Introduction: Frodotype - a fantasy flavoured text generator
======





















Putting the final text file together:

1. Concatenate the files:

$ for f in *.txt do (cat "${f}"; echo) >> unprocessed.txt; done

2. Deleting all none ASCII charcaters:

$ LC_ALL=C tr -dc '\0-\177' < unprocessed.txt > processed.txt

3. Removing numbers and dashes from the text:

$ tr -d '[0-9-]' < processed.txt > final.txt

Additional processing is done in the text-analysis notebook.
