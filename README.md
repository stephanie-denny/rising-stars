# Rising Stars Bilingual Learning Center

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

An brochure childcare site using [Gatsby](https://gatsbyjs.org) v2 and [Netlify CMS](https://netlifycms.org) v2.

- **[Gatsby](https://gatsbyjs.org)** static site generator
- **[Netlify CMS](https://github.com/netlify/netlify-cms)** for content management

## See also

[Netlify CMS Docs](https://www.netlifycms.org/docs/)

## CMS

The CMS lives at [\_\_YOUR_SITE_NAME\_\_.netlify.com/admin](https://__YOUR_SITE_NAME__.netlify.com/admin).

## Developing

1.  Clone your repo to your local machine

1.  Install dependencies

`yarn`

1.  Run the development server

`yarn start`

If you are adding or editing content locally in the CMS, a couple of things to note:

1.  Changes will be pushed to the remote repo.

1.  You will be prompted to enter your site's url, this is necessary for Netlify Identity to manage user login. This is stored in `localStorage`, so you might have to empty your browser cache if you are switching projects but remaining on `localhost:8000`.

## Editing CMS fields

The Netlify CMS configuration is located in `public/admin/config.yml`. This is where you will configure the pages, fields, posts and settings that are editable by the CMS.

Find out more in the [Netlify CMS Docs](https://www.netlifycms.org/docs/#configuration).

## Uploadcare setup

Uploadcare is our file upload system. It hosts the files for us and delivers them trough their CDN network.
Each site you'll create need its own Uploadcare API key's. See below how to set this up

1. Create new project in Uploadcare and save API keys in project

- Go to [Uploadcare.com](https://uploadcare.com/accounts/login/) and login
- Once on the dashboard create a new project
- Set the name and hit create
- In the left menu click in API Keys and copy the public key
- Now open your project and open the CMS congif.yml file
- find the `media_library` settings and paste in the public key after `publicKey:`
- Done!!

For more details see the [Netlify CMS Docs](https://www.netlifycms.org/docs/uploadcare/)

## Mailchimp integration

https://hooks.zapier.com/hooks/catch/2881617/ea5exg/

- Go to [Zapier.com](https://zapier.com/) and login
- Hit make a zap button in the right top corner
- Search for webhook by Zapier and select catch hook and continue to next step
- In most cases leave this field empty and continue
- Copy the generated url
- Now go to the [form settings](https://app.netlify.com/sites/Rising Stars Bilingual Learning Center/settings/forms#outgoing-notifications) in you Netlify project
- Find the form notifications section click the add notification button
- Select the option `outgoing webhook`
- Set the event to listen for
- Paste in our recent generated url in the URL to notify field
- Select your form and save settings
- Open your website navigate to your form, fill it out and send the data
- Go back to Zaper and see if your form data has come trough.
- Hit continue and add a new step on the left side of the screen
- Search for MailChimp and select add/update subscriber
- Select MailChimp account or add one and hit the test button
- if succeeded hit continue button
- Select your MailChimp list and select the subscriber email address
- Fill in other settings for your needs and continue
- Hit send test to MailChimp button and hit finish if succeeded
- Give your Zap a name and make sure your zap is turned on
- Submit your form one last time and see if all data is coming trough to MailChimp
- Thats is!

## Instagram Feed

Get Your Instagram Access Token [here](https://generator.thrivex.io/). In order to display your Instagram photos on your own website, you are required to provide an Instagram Access Token. You can do this by clicking the generator button on this site you will first need to login to your account.
