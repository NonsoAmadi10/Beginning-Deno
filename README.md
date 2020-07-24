# Beginning-Deno
- Playing around the new Javascript and Typescript Runtime built with RustLang.


### Getting Started
---

#### Prerequisites & Installation

- Make Sure you have deno installed if not run ` curl -fsSL https://deno.land/x/install/install.sh | sh ` if you are on mac or linux. After Installing copy the `export` commands generated and paste it in the bottom of your `~/.bashrc` file.

- If you are on a windows system, Open powershell and run `$v="1.0.0"; iwr https://deno.land/x/install/install.ps1 -useb | iex` 

- After installing, clone this repo

- Run the helloworld.ts by typing `deno run --allow-net helloworld.ts`. Then Open your browser on `localhost:5000`

- To Run the restapi.ts run `deno run --allow-net restapi.ts`. Open postman on `localhost:5000/posts` to test CRUD functions.




### Notes

- Deno is a better improvement on Node JS

- It supports typescript fully, however you can still write your programs in JavaScript

- It allows you to import a package via its url as opposed to using the npm registry. This not only saves time but also removes the bottleneck of having dependency errors faced using npm.

- It is the future of Javascript and Typescript.

- To understand more on deno's API, kindly visit their official [website](https://deno.land/manual).
