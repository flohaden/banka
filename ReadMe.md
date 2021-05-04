Table of Contents

1. About The Project
2. Scope of functionalities
3. Built With
4. Getting Started
   Prerequisites
   Installation
5. Development
6. Deployment
7. Repo structure
8. Contact
9. Acknowledgements

ABOUT THE PROJECT
Banka is a banking application that powers banking operations like account creation, customer deposit and withdrawals. This application is meant to support a single bank, where users can signup and create bank accounts online, but must visit the branch to withdraw or deposit money.

SCOPE OF FUNCTIONALITIES

- User can sign up, login, create account, view transaction history, and view specific account transaction
- Staff can debit user account, credit user account, and view all users' account.
- Admin can view a specific user account, deactivate user account, delete a specific user account, and create staff accounts.

BUILT WITH

- HTML
- CSS
- Javascript

Getting Started:
a. Pre-requisites
Some key things to set up / understand to use this app:

- HTML
- CSS
- npm
- javascript

Start the development environment: npm start
Open your browser and visit http://localhost:3000

b. Downloading
$ git clone https://github.com/floh_aden/Banka-app.git

DEVELOPMENT
When developing components, you may want assets automatically compiled and the browser to refresh automatically. To do this, run the following task:

- npm run dev

Creating a static build
To create a static instance of this project, run the following task:

- npm run build
  This will create a folder called www, into which the required files will be created.

DEPLOYMENT
To make this project publicly accessible, you can deploy a static instance by running the following task:

- npm run publish
  This will publish the contents of public to your gh-pages branch.

Using git bash:

- git checkout -b gh-pages
- git add. (name of file)
- git commit -m
- git push

REPO STRUCTURE
/
├─ src/
│ ├─ Index/ # Homepage
│ │ ├─ Pages/ # HTML files
│ │ ├─ images/ # images (used in component examples)
│ │ ├─ scripts/ # JavaScript files
│ │ ├─ CSS/ # CSS files
│ │ └─ icons/ # icons and logos
│ │
│ ├─ components/ # Components
│ │ ├─ \_partials/ # …that render component previews
│ │ ├─ common/ # …that may appear anywhere
│ │ ├─ global/ # …that appear on every page
│ │ ├─ layouts/ # …that govern macro layout
│ │ ├─ scopes/ # …that style undecorated markup
│ │ ├─ templates/ # …that combine components to render page types
│ │ └─ utilities/ # …that have a single purpose/role
│ │
│ ├─ docs/ # Documentation
│ ├─ \_partials/ # Partials for rendering documentation
│ └─ … # Documentation files
│
├─ tmp/ # Files required for dynamic builds (ignored by Git)
├─ www/ # Public build (ignored by Git)
│
├─ .editorconfig # Code style definitions
├─ .gitignore # List of files and folders not tracked by Git
├─ .eslintrc # Linting preferences for JavasScript
├─ LICENSE # License information for this project
├─ package.json # Project manifest
└─ README.md # This file

CONTACT
@floh_twitter - flohaden@gmail.com
Project Link: https://github.com/your_username/repo_name

ACKNOWLEDGMENTS

- github pages
- Font Awesome
- pngitem.com
