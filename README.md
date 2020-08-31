# Nuxt.js imgix Prismic SnipCart Example eComm Site with Responsive Images

[Nuxt.js](https://nuxtjs.org) example eComm project with responsive images from [imgix](https://www.imgix.com) content managed in [Prismic](https://prismic.io) and shopping cart by [Snipcart](https://snipcart.com)

## An Article is currently in the works...

> to be added..


## Install Items

Run the following command to install the prismic client (you might need to add sudo):

``` 
npm install -g prismic-cli
```
Then you can clone this theme and initiate the prismic project:

```
prismic theme --theme-url https://github.com/daletom/nuxtjs-ecomm.git --conf nuxt.config.js
```

## Create Content & Add Snipcart

Next you will need to login to your Prismic Account.  Create a layout and a few products.  
![Upload Example](https://tom.imgix.net/addProduct.gif)

Once this is complete, you will need to login or create a free account at [Snipcart](https://snipcart.com).  No need to setup anything else, simply click on your account at the top right and go to API Keys.  You need to copy the Public Test API Key.  Now open the project folder we created when you configured the above Prismic theme.  Go to your layouts folder and the default.vue file.  Paste this API key  with an editor.  You will need to replace {your-api-key} with the snipcart API key, it will be in the hidden snipcart div that looks like this:

```
<div hidden id="snipcart" data-api-key="{your-api-key}"></div>
```

return to your terminal and cd into the project folder, then launch your nuxt front end:

```
cd {project-name}
npm run dev
```

Then you can access it at [http://localhost:3000](http://localhost:3000).

## Deploying this site

> To be added..

## Items of Note in this Theme

-Info about responsive images from [imgix](https://www.imgix.com)
-I know it seems concerning we are adding an API key for Snipcart that could be find in the javascript, but as per Snipcart: 
>"This key can be shared without security issues because it only allows a specific subset of API operations."
-Tailwind CSS

## Launching the project in production

> Instructions coming...

## Learn more

> ..

## Credit
Credit goes to many poeple and the articles they have written for helping and giving insight. Phil Snow, Edouard Habered, & Renaud Bressand from Prismic, as well as Maxime Laboissonniere at Snipcart, and many other folks.

## License

The MIT License (MIT)

Copyright (c) 2020 Thomas Dale

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
