# Nodes

The nodes are object the abstract language concepts.

Name  | Description                 | Example (SCSS)       | Example (less)
------|-----------------------------|----------------------|-----------------
call  | Mixin call                  | `@include example()` | `.example()`
arg   | Mixin call argument         | `10px`               | `10px`
dec   | Property declaration        | `color: red;`        | `color: red;`
var   | Variable declaration        | `$blue: #00f;`       | `@blue: #00f;`
val   | Value                       | `10px`               | `10px`
ref   | Variable reference          | `$blue`              | `@blue`
mixin | Mixin declaration           | `@mixin example() {}`| `.example() {}`
param | Mixin parameter declaration | `$color`             | `@color`

There are available a lot of factory functions to respective nodes. Similar to it, there are also stringifiers that convert the node to string.