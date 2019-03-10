## Introduction
Welcome! In this tutorial, we’re going to be creating a simple but fun HTTP API using Azure Functions. 

If you’re new to Serverless and are wondering what all of the fuss is about, I suggest you take a few minutes to read my introductory article. There, I give a high level over what Serverless is all about and why “Serverless” isn’t as horrible a name as you might be thinking it is. 

## Getting Started
If you don’t have an Azure account yet, you’ll need to create one first. Click here to jump to the account creation page. 

You'll need a credit card to create a free trial account, even though you won't be billed. I know this is a bit annoying, but all of the cloud providers do this to prevent people from getting an unlimited number of free trials just by creating new e-mail addresses.

If you already have an Azure account, the Functions service has a free tier than never expires, so you’ll be able to complete this tutorial without incurring any charges. 

Once you are signed into the Azure portal, you can create your first serverless function by clicking on 'Create a resource, then Compute, and then Function App:

 ![azure function creation](images/create.png)

 Next, you'll see this screen that asks you to fill some information about your app:

 ![azure function app details](images/function-app.png)

 Start by choosing a name for your function app. Since it will be hosted on the azurewebsites.net domain, you'll need to pick a name that nobody else has used. 

 Next, you'll need to create a new Resource Group. Think of a resource group has a handy container that bundles up all of the bits of your app. This is helpful when your apps grow larger, because you can ensure that all of the functions, permissions, and other settings related to your app are kept in a logical bundle that makes them easy to monitor and manage. 

 By default, Azure will try to use your app name as the resource group name. I suggest sticking with this unless you have a reason not to. 

 For the rest of the settings, use what is shown in the image above: Windows OS, Consumption Plan, Central US as the location, and JavaScript as the runtime stack. Let Azure create new storage for your function app. 

 When you've done all of this, click 'Create'. Azure will pop up a notification telling you that deployment is in progress. If you click the notifications icon at the top of the screen, you'll see the deployment status of your app:

 ![deploy in progress](images/deploying.png)

 When deployment finishes, the notification will update to tell you so:

 ![deployment complete](images/deployed.png)

 Click on the 'Go to resource' button, and you'll be taken to your Function App's dashboard:

 ![function app dashboard](images/app-dash.png)

 So we now have a Function App, but we haven't added any actual functions to it. Let's fix that! On the app dashboard, click on the '+ New function' button. This will open a dialog asking you to choose your development environment:

 ![choose development environment](images/function-dev-env.png)

 Choose the 'In-portal' option. This way, you won't have to install anything on your computer to get your serverless app up and running. 

 In a real-world scenario, where you'll working on serverless apps that contain many functions, you'll probably want to use Visual Studio, VS Code, or another text editor or IDE of your choice. But for small projects like ours, using the in-portal editor makes the app creation process quick and easy! 

 After we've chosen our development environment, Azure will ask us to choose the type of function we want:

 ![choose function type](images/function-type.png)

 Choose 'Webhook + API'. This will give us a function that is set up to respond to HTTP requests. Once you've chosen this option, Azure will create your function, populate it with some default code, and send you to a code editor for your new function:

 ![default code editor](images/default-code.png)

 If you want to see the default code in action, click on the 'Get function URL' link. Copy the link provided, paste it in a new browser tab, and load it. 

 You'll notice that your function complains that you need to provide a name as part of the query string. 

 If you look at the URL, you'll notice that it already contains a query parameter called 'code'. By default, Azure generates an access code for every serverless function to prevent unauthorized access. 

 While you'd want to add a more sophisticated access control policy to a production application, the Azure-generated access code is perfect for our first serverless function since we just creating it for ourselves. 

 Since the URL already has a query string, simply append
 ```
 &name=Bob
 ```
 to the end of the URL in your browser, and hit Enter. This time, the function will say hello to Bob! 

 And with that, we have a serverless app created, running, and responding to HTTP requests. Notice all of the things we *didn't* have to do: we didn't have to install Node.js, or a web server or, a web framework. We filled out a short form, clicked a few times, and ended up with a functioning web application. 

 ## Customizing the Code

Now that we have our function in place, let's make it do something useful! 

We're going to turn our serverless function into a geocoding service - it will take a POST request that contains a street address in the body, and will return a set of map coordinates for that street address. 

To do this, we'll need to use Azure Maps. Like Azure Functions, Azure Maps has a free tier that we will be making use of. 



