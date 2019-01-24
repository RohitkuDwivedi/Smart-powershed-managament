# cdac_project
a project on controlled electricity distribution system and reduction in load sheds

# resources
1) for power meter go to: https://www.youtube.com/watch?v=_PKQdEUam6Y
---
2)IoT energy Meter please do check link asap
...........https://github.com/mithilaGhuge/IoT-Energy-Meter.git

## Task Achived and to be achived
#### Achived
1) base api
2) wireframe of frontend
3) partial transformer node
4) patrial home node

#### To achive
1) full communication from transformer node to home node and vice versa
2) communicate API to rpi and communication between rpi and lora Transformer node
3) complete api from UI & API


---
# API 
#### 1) to add new user 
#####     api:  ip:port/addUser
##### method :  POST
##### BODY : 
user = {
    name: STRING,
 address: STRING,
 pincode: NUMBER,
 phoneno: NUMBER,
   email: STRING,
userName: STRING
password: STRING
  }
  
  








___
# Git commands
___
### Branching:

### create a new branch: `git branch <branch_name>`
### show all branches: ` git branch ` 
### move to new branch: ` git checkout <branch_name>`
### create and move to branch: ` git checkout -b <branch_name> `
### delete a branch: ` git branch -D <branch_name> `
### rename a branch: ` git branch -m <old_name> <new_name>`
### merge two branch: ` git push <dest (origin) > <source_branch(branch_name) > ` 

___

# CHEAT SHEET FOR "MARKDOWN"SYNTAX
<!-- dummy code for learning  markdown lang>
<!-- heading -->
# Heading 1
## Heading 2
### Heading 3
### Heading 4
#### Heading 5
##### Heading 6
###### Heading 7
<!-- Italics -->
*this text* is italic <br>
_this text_ is italic
<!-- Strong -->

**this text** is italic <br>
__this text__ is italic

<!-- Strike through -->pincode: NUMBER,
~~ strike through ~~
<!-- horizontal rule -->
1) ===
2) ___

<!-- block quotes -->
> This is bloque quote
<!-- LINK -->
[Rohit Kumar Dwivedi](rohitkumardwivedi.ml "goto my website") 

<!-- Ordered list  -->
* item 1
* item 2
* item 3
    * inside item1
    * inside item2

<!-- unorderd lis-->
1. list1
1. list2
<!-- code -->
` <br> <html>`
<!-- image-->
![this is my image](https://avatars0.githubusercontent.com/u/30552632?s=40&v=4)

<!-- gihub specific codes-->
<!--codes -->
```bash
    npm i express
    ng serve --open
```

```javascript
 function add(a,b){
     return a+b
     }
```
```python
def add(a,b)
    return a+b
```

