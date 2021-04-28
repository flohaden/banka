Table of Contents:
About The Project
Scope of functionalities
Built With
Getting Started

- Prerequisites
- Installation
  Usage
  Contact
  Acknowledgements

About The Project:
Banka is a banking application that powers banking operations like account creation, customer deposit and withdrawals. This application is meant to support a single bank, where users can signup and create bank accounts online, but must visit the branch to withdraw or deposit money.

Scope of functionalities:
-User can sign up, login, create account, view transaction history, and view specific account transaction
-Staff can debit user account, credit user account, and view all users' account.
-Admin can view a specific user account, deactivate user account, delete a specific user account, and create staff accounts.

Built With:
-HTML
-CSS
-Javascript

Getting Started:
a. Pre-requisites
Some key things to set up / understand to use this app:
-npm
-javascript

b. Downloading
$ git clone https://github.com/floh_aden/Banka-app.git

Usage:

- Entity specification:
  User;
  {
  “id” : Integer,
  “email” : String,
  “firstName” : String,
  “lastName” : String, “password” : String,
  “type” : String, // client or staff
  “isAdmin” : Boolean, // must be a staff user account
  ...
  }
  Account
  {
  “id” : Integer,
  “accountNumber” : Integer,
  “createdOn” : DateTime,
  “owner” : Integer, // user id
  “type” : String, // savings, current
  “status” : String, // draft, active, or dormant
  “balance” : Float,
  ...
  }
  Transaction
  {
  “id” : Integer,
  “createdOn” : DateTime,
  “type” : String, // credit or debit
  “accountNumber” : Integer,
  “cashier” : Integer, // cashier who consummated the transaction “amount” : Float,
  “oldBalance” : Float, “newBalance” : Float,
  ...
  }

Contact:
@floh_twitter - flohaden@gmail.com
Project Link: https://github.com/your_username/repo_name

Acknowledgements:
-github pages
-Font Awesome
-pngitem.com
