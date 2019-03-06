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

 When you've done all of this, click 'Create'. Azure will pop up a notification telling you that deployment is in progress:

 ![deploy in progress](images/deploying.png)


