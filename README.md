### Creation of Project

Create Github Repository from Command Line:
<pre>
  rails new animotion -d mysql

  git add .
  git commit -m "First commit ever"
  
  curl -u williamromero https://api.github.com/user/repos -d '{ "name": "animotion" }'
  git remote add origin git@github.com:williamromero/animotion.git

  git push -u origin master
</pre>

As we can see, we can create a repository using the next commands on git:
 
![Github Choices to Create a Repository from Command Line](https://s3-us-west-2.amazonaws.com/webres-studio.com/wiki_tuto_images/git_command_line_create_repository.png)

