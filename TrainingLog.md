# Plan

It is not feasible for myself to learn JavaScript, Angular and the project libraries in sufficent depth to produce a new body of code. So, to enable an assessment of my ability to understand and grasp the concepts going on, i have maintained a journal of my actions as i go through orientation of the hello world project, and then incorporate a shopping cart example off the web.

# Training Log

- The brief says RxJS is the prefered framework, so reading https://rxjs.dev/guide/overview
- searched for an article on creating Angular projects in Visual Studio - found https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/angular?view=aspnetcore-6.0&tabs=visual-studio
- created project by running `dotnet new angular -o shopping-cart`
- opened project and tried running. got error - Node.js is required to run and build project.
- verified that node.js is installed as part of Visual Studio, but still get build error.
- installed node.js from https://nodejs.org using windows installer.
- build project now generates a long list of deprecated versions of npm software, and builds code.
- running VS project brings up the helloworld website.
- noticed in code `ClientApp\src\app\app.module.ts` that it is initialising the NgModule.  Looks like the default is to create a NgModule based project
- Components seem to be assembled using a ts file (typescript?) and optional html and css files that are declared by templateUrl and styleUrls references on the component declaration.
- The component selector seems to define the HTML tag that this component should replace in the page.

# Adding a shopping Cart.

- A google search using `RxJS shopping cart example` found the following URL that seems to by relevent: `https://stackblitz.com/edit/angular-simple-rxjs-shopping-cart-example-vgymdr`
- Looking at the code structure, there are some aspects that are looking pretty simular. `index.html` provides a HTML tag `my-app` which is referenced in `app.component.ts`
- the file `shopping-cart.service.ts` seems to be incorporating a data file `data.ts` which contains a fairly simular textual representation of products.
- Lets try hacking some of this example code into our helloworld project and see what happens.
- Add a menu item to the project to create a shopping cart page.
- Add a page to contain the shopping cart
- Add the list of products to the shopping cart page.
- I cannot get the observable list of products to appear, so to show a list of products, I am using the data array directly.
- Added some basic styling to the product card, in keeping with the existing site.

