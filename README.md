# Introduction: **__Frodotype - a fantasy flavoured text generator__**

Frodotye is a webapp that generates text which grammatically correct and logical most of the time. This project aims to fine-tune the GPT2 model using the gpt-2-simple python package. OpenAI offers the use of 3 of their models, however the size and complexity of these models makes it diffcult to train on consumer hardware. Therefor, the smallest (117m) parameter model was used in conjucntion with a Google Deep Leanring VM to retrain the model.The data used to fine-tuned the model consists of 102 fantasy novels by 20 authors. This data was used for 2 reasons:

1. Fantasy is the genre I read the most.
2. I own the ebooks used in this project.

Frodotype was built using Tensorflow, docker, Google Cloud Platform, Javascript, Chart.js, and Bulma CSS. A bulk of the heavy lifting in python was done using Max Wolf's gpt-2-simple project. 

# Gathering the data

The 102 books used were converted from the Amazon Kindle format .azw to plain text files. This processes included stripping all images, formattting, and hyperlinks. The books then manually had the table of contents, appencices, and gloassaries manually removed.















Putting the final text file together:

1. Concatenate the files:

$ for f in *.txt do (cat "${f}"; echo) >> unprocessed.txt; done

2. Deleting all none ASCII charcaters:

$ LC_ALL=C tr -dc '\0-\177' < unprocessed.txt > processed.txt

3. Removing numbers and dashes from the text:

$ tr -d '[0-9-]' < processed.txt > final.txt

Additional processing is done in the text-analysis notebook.
