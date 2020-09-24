# Nuxt.js imgix Prismic SnipCart Example eComm Site with Responsive Images

[Nuxt.js](https://nuxtjs.org) example eComm project with responsive images from [imgix](https://www.imgix.com) content managed in [Prismic](https://prismic.io) and shopping cart by [Snipcart](https://snipcart.com)

## Explanation article and video

> An Article is currently in the works...

Here is a Vimeo demo as well:
[![Vimeo for demo](https://i.vimeocdn.com/video/957602859.jpg?mw=1920&mh=1080&q=70)](https://player.vimeo.com/video/458013155)


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

## Launching the project in production

Launching this in Netflify or Vercel is very easy.  When you are ready to launch a production environment, run npm run generate in your terminal.  This will generate a dist folder in your project.  You can then either connect this project to github and deploy from Netlify or just simply drag the dist folder to [NetlifyDrop](https://www.netlify.com/drop).  If connecting from Github, you will be essentially choosing the build command to be npm run generate and the publish directory to be dist.

Here is the documentation for deploying [Nuxt](https://nuxtjs.org/faq/netlify-deployment/).

For Snipcart, you also need to update your storeUrl.  

## Learn more

- Info about responsive images from [imgix](https://www.imgix.com)
- If you would like to learn more about the imgix Vue SDK that I used, here is the link to that [SDK](https://github.com/imgix/vue-imgix).
- Snipcart API Key - I know it seems concerning we are adding an API key for Snipcart that could be find in the javascript, but as per Snipcart: 
>"This key can be shared without security issues because it only allows a specific subset of API operations."
- Need more examples from Prismic? Here is a great example on making a [blog](https://user-guides.prismic.io/en/articles/2802125-create-a-sample-blog-with-prismic-and-nuxt)

## Credit
Credit goes to many poeple and the articles they have written for helping and giving insight. Phil Snow, Edouard Habered, & Renaud Bressand from Prismic, as well as Maxime Laboissonniere at Snipcart, and many other folks.

## License

The MIT License (MIT)

Copyright (c) 2020 Thomas Dale

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
