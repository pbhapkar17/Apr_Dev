# Apr_Dev

sign up to git hub
repository created
taken URL from main branch 
e.g https://github.com/pbhapkar17/Apr_Feb/tree/main
https://github.com/pbhapkar17/Apr_Feb -b main (main as a parent branch)

to do git set up-
link : https://git-scm.com/downloads
-download pkg it and install
- git version

at any drive create folder >>student name >> right click git bash here 
>> git clone https://github.com/pbhapkar17/Apr_Feb -b main>> Enter
>>it will clone copy of branch as repository name folder.
open cloned folder into vs code

leftmost coner will show u branch name(main)

to create new branch from parent branch

cmd >> git checkout -b "new_branch_name" main
e.g git checkout -b 'html_css_js' main >>enter


left most bottom corner will show u newly created branch name

create folder >> navbar.html , navbar.css >>

git add . (it will add all files at a time) >>enter
git commit -m 'navbar implementation'  >>enter
git push

(<<<very first time>>>)
git push --set upstream....

copy this above command and paste it into the same terminal(open terminal always on ur cloned folder)
>>enter
>>(cmd: we are setting upstream to parent branch and origin to newly created branch on remote(gitHub))

after this changes it will ask for authentication

git config --global user.email "abhishek333roy@gmail.com"
git config --global user.name "Abhishek125pradeep"

-----[[[[git config user.name "pbhapkar17"
>> git config credential.username "pbhapkar17"]]]]]]----


after doing all these steps ur branch will gwt pushed successfully to remote

branches 
main
html_css_js

to jumb from html_css_js branch to main

cmd>> git checkout main  >>enter


left most bottom corner will show u newly main branch name

git checkout -b 'js practice' html_css_js  >>enter

cmd to check branches inside repository >> git branch 
main
html_css_js
js practice

-----------------------------------------------------------------------------------

folder >>mam >>right git bash here >>
git clone https://github.com/pbhapkar17/Apr_Feb - b Feb_Apr_Angular  >>enter

open cloned folder into vs code

left most bottom corner will show u newly Feb_Apr_Angular branch name

daily only do >> git pull >>enter






APR/FEB >> STUDENT >> git bash here >>ur main branch >> create new branch from it >>>and do daily handson here and push

APR >> MAM_ANGULAR >> git bash here >> git clone https://github.com/pbhapkar17/Apr_Dev -b APR_FEB_ANGULAR >> open repository folder into VS Code>> daily do only git pull
    >>  MAM_HTML_CSS_JS >>git bash here >>> git clone https://github.com/pbhapkar17/Apr_Dev -b HTML_CSS_JS >> open repository folder into VS Code>> daily do only git pull
FEB >> MAM_ANGULAR >> git bash here >> git clone https://github.com/pbhapkar17/Apr_Dev -b APR_FEB_ANGULAR  >> open repository folder into VS Code>> daily do only git pull


to create new angular project:
1. ng new Angular