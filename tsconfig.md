## `Suppose we want to compile whole typescript files then we can use`

```bash
tsc
```

## if we want to compile specfic files then

## inside tsconfig setting

```ts
"files":["index.ts","app.ts"]

```

### it should be in double quotes

## but if we want to complile all except some then we can use another properties

```ts
"inlcude":["src"],
"exclude":["src/routes.ts"]
// will compile all inside src folder except routes.ts

```

# OutDir option

### Suppose I want to put my compiled javaScript files into a directory then outDir is used
